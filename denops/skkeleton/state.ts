import type { HenkanType } from "./jisyo.ts";
import { getKanaTable } from "./kana.ts";
import { KanaTable } from "./kana/type.ts";

export type State = InputState | HenkanState | EscapeState;

export type InputMode = "direct" | HenkanType;

export type InputState = {
  type: "input";
  mode: InputMode;
  table: KanaTable;
  tableName: string;
  converter?: (input: string) => string;
  converterName: string;
  feed: string;
  henkanFeed: string;
  okuriFeed: string;
  // かなフィードが変換ポイントの前にあるかどうか
  // 「察し」などを変換するのに必要
  previousFeed: boolean;
};

export function asInputState(astate: State, initialize = true): InputState {
  const state = astate as InputState;
  state.type = "input";
  if (initialize) {
    state.table = getKanaTable();
    state.mode = "direct";
    state.tableName = "";
    state.converterName = "";
    state.feed = "";
    state.henkanFeed = "";
    state.okuriFeed = "";
    state.previousFeed = false;
  } else {
    state.table ??= getKanaTable();
    state.mode ??= "direct";
    state.tableName ??= "";
    state.converterName ??= "";
    state.feed ??= "";
    state.henkanFeed ??= "";
    state.okuriFeed ??= "";
    state.previousFeed ??= false;
  }
  return state;
}

export type HenkanState = Omit<InputState, "type"> & {
  type: "henkan";
  mode: HenkanType;
  word: string;
  candidates: string[];
  candidateIndex: number;
};

export type EscapeState = {
  type: "escape";
};
