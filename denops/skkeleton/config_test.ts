import { config } from "./config.ts";
import { Context } from "./context.ts";
import { dispatch } from "./function/testutil.ts";
import { currentLibrary } from "./jisyo.ts";
import { assertEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";

const defaultConfig = { ...config };

const lib = currentLibrary.get();
lib.registerCandidate("okurinasi", "あ", "あ");

Deno.test({
  name: "egg like newline",
  async fn() {
    Object.assign(config, defaultConfig);
    const context = new Context();
    // normal
    await dispatch(context, "A \nA\n");
    assertEquals(context.preEdit.output(""), "あ\nあ\n");
    // egg like
    config.eggLikeNewline = true;
    await dispatch(context, "A \nA\n");
    assertEquals(context.preEdit.output(""), "ああ");
  },
});
