import { config } from "../config.ts";
import type { Context } from "../context.ts";
import { hiraToKata } from "../kana/hira_kata.ts";
import { KanaResult } from "../kana/type.ts";
import { PreEdit } from "../preedit.ts";
import { asInputState } from "../state.ts";
import type { InputState } from "../state.ts";
import { undoPoint } from "../util.ts";
import { henkanFirst } from "./henkan.ts";

// feedが仮名に変換できる場合は確定
export function kakuteiFeed(context: Context) {
  if (context.state.type !== "input") {
    return;
  }
  const inputState = context.state;
  const feed = inputState.feed;
  const queueAsKana = inputState.table.find((e) => e[0] === feed)?.[1];
  if (Array.isArray(queueAsKana)) {
    kakuteiKana(inputState, context.preEdit, queueAsKana[0], "");
  }
}

export function kakuteiKana(
  state: InputState,
  preEdit: PreEdit,
  kana: string,
  feed: string,
) {
  switch (state.mode) {
    case "direct":
      if (state.converter) {
        kana = state.converter(kana);
      }
      preEdit.doKakutei(kana);
      break;
    case "okurinasi":
      state.henkanFeed += kana;
      break;
    case "okuriari":
      if (feed && state.previousFeed) {
        state.henkanFeed += kana;
      } else {
        state.okuriFeed += kana;
      }
      state.previousFeed = false;
      break;
  }
  state.feed = feed;
}

async function doKakutei(
  context: Context,
  kana: string,
  feed: string,
) {
  const { preEdit, state } = context;
  if (state.type !== "input") {
    return;
  }
  kakuteiKana(state, preEdit, kana, feed);
  if (state.mode === "okuriari" && !feed) {
    await henkanFirst(context, "");
  }
}

async function acceptResult(context: Context, result: KanaResult) {
  if (Array.isArray(result)) {
    await doKakutei(context, result[0], result[1]);
  } else {
    await result(context, "");
  }
}

export async function kanaInput(context: Context, char: string) {
  const state = asInputState(context.state, false);
  const lower = char.toLowerCase();
  if (char !== lower) {
    henkanPoint(context);
    await kanaInput(context, lower);
    return;
  }

  // 「ん」に関するパターンの処理に必要
  const current = state.table.find((e) => e[0] === state.feed);

  const previousFeed = state.feed;
  state.feed += char;
  const found = state.table.filter((e) => e[0].startsWith(state.feed));

  if (found.length === 0) {
    if (current) {
      await acceptResult(context, current[1]);
      state.feed = char;
    } else {
      // kakutei previous feed
      await doKakutei(context, previousFeed, char);
      const found2 = state.table.find((e) => e[0] === char);
      if (found2) {
        await acceptResult(context, found2[1]);
      }
    }
  } else if (found.length === 1 && found[0][0] === state.feed) {
    await acceptResult(context, found[0][1]);
  }
}

export function henkanPoint(context: Context, _?: string) {
  if (context.state.type !== "input") {
    return;
  }
  const state = context.state;
  const found = state.table.filter((e) => e[0].startsWith(state.feed));
  // don't transition to okuri mode when henkan str is empty
  if (state.mode === "okurinasi" && state.henkanFeed.length === 0) {
    return;
  }
  switch (state.mode) {
    case "direct":
      if (found.length === 0) {
        context.preEdit.doKakutei(state.feed);
        state.feed = "";
      }
      if (config.setUndoPoint && context.vimMode === "i") {
        context.preEdit.doKakutei(undoPoint);
      }
      state.mode = "okurinasi";
      break;
    case "okurinasi":
      if (state.feed === "" || found.length === 0) {
        state.feed = "";
      } else {
        state.previousFeed = true;
      }
      state.mode = "okuriari";
  }
}

export function deleteChar(context: Context, _?: string) {
  if (context.state.type !== "input") {
    return;
  }
  const state = context.state;
  if (state.feed) {
    state.feed = state.feed.slice(0, -1);
  } else if (state.mode === "okuriari") {
    if (state.okuriFeed) {
      state.okuriFeed = state.okuriFeed.slice(0, -1);
    } else {
      state.mode = "okurinasi";
    }
  } else if (state.mode === "okurinasi") {
    if (state.henkanFeed) {
      state.henkanFeed = state.henkanFeed.slice(0, -1);
    } else {
      state.mode = "direct";
    }
  } else {
    context.preEdit.doKakutei("\b");
  }
}

export function katakana(context: Context, _?: string) {
  if (context.state.type !== "input") {
    return;
  }
  const state = context.state;
  if (state.mode === "direct") {
    if (state.converter) {
      state.converter = void 0;
    } else {
      state.converter = hiraToKata;
      state.converterName = "katakana";
    }
    return;
  }
  kakuteiFeed(context);
  let result = state.henkanFeed + state.okuriFeed;
  if (!state.converter) {
    result = hiraToKata(result);
  }
  context.preEdit.doKakutei(result);
  asInputState(state);
}
