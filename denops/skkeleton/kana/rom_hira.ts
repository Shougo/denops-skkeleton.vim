import { disable } from "../function/disable.ts";
import type { KanaTable } from "./type.ts";

export const romToHira: KanaTable = [
  ["a", ["あ", ""]],
  ["bb", ["っ", "b"]],
  ["ba", ["ば", ""]],
  ["be", ["べ", ""]],
  ["bi", ["び", ""]],
  ["bo", ["ぼ", ""]],
  ["bu", ["ぶ", ""]],
  ["bya", ["びゃ", ""]],
  ["bye", ["びぇ", ""]],
  ["byi", ["びぃ", ""]],
  ["byo", ["びょ", ""]],
  ["byu", ["びゅ", ""]],
  ["cc", ["っ", "c"]],
  ["cha", ["ちゃ", ""]],
  ["che", ["ちぇ", ""]],
  ["chi", ["ち", ""]],
  ["cho", ["ちょ", ""]],
  ["chu", ["ちゅ", ""]],
  ["cya", ["ちゃ", ""]],
  ["cye", ["ちぇ", ""]],
  ["cyi", ["ちぃ", ""]],
  ["cyo", ["ちょ", ""]],
  ["cyu", ["ちゅ", ""]],
  ["dd", ["っ", "d"]],
  ["da", ["だ", ""]],
  ["de", ["で", ""]],
  ["dha", ["でゃ", ""]],
  ["dhe", ["でぇ", ""]],
  ["dhi", ["でぃ", ""]],
  ["dho", ["でょ", ""]],
  ["dhu", ["でゅ", ""]],
  ["di", ["ぢ", ""]],
  ["do", ["ど", ""]],
  ["du", ["づ", ""]],
  ["dya", ["ぢゃ", ""]],
  ["dye", ["ぢぇ", ""]],
  ["dyi", ["ぢぃ", ""]],
  ["dyo", ["ぢょ", ""]],
  ["dyu", ["ぢゅ", ""]],
  ["e", ["え", ""]],
  ["ff", ["っ", "f"]],
  ["fa", ["ふぁ", ""]],
  ["fe", ["ふぇ", ""]],
  ["fi", ["ふぃ", ""]],
  ["fo", ["ふぉ", ""]],
  ["fu", ["ふ", ""]],
  ["fya", ["ふゃ", ""]],
  ["fye", ["ふぇ", ""]],
  ["fyi", ["ふぃ", ""]],
  ["fyo", ["ふょ", ""]],
  ["fyu", ["ふゅ", ""]],
  ["gg", ["っ", "g"]],
  ["ga", ["が", ""]],
  ["ge", ["げ", ""]],
  ["gi", ["ぎ", ""]],
  ["go", ["ご", ""]],
  ["gu", ["ぐ", ""]],
  ["gya", ["ぎゃ", ""]],
  ["gye", ["ぎぇ", ""]],
  ["gyi", ["ぎぃ", ""]],
  ["gyo", ["ぎょ", ""]],
  ["gyu", ["ぎゅ", ""]],
  ["hh", ["っ", "h"]],
  ["ha", ["は", ""]],
  ["he", ["へ", ""]],
  ["hi", ["ひ", ""]],
  ["ho", ["ほ", ""]],
  ["hu", ["ふ", ""]],
  ["hya", ["ひゃ", ""]],
  ["hye", ["ひぇ", ""]],
  ["hyi", ["ひぃ", ""]],
  ["hyo", ["ひょ", ""]],
  ["hyu", ["ひゅ", ""]],
  ["i", ["い", ""]],
  ["jj", ["っ", "j"]],
  ["ja", ["じゃ", ""]],
  ["je", ["じぇ", ""]],
  ["ji", ["じ", ""]],
  ["jo", ["じょ", ""]],
  ["ju", ["じゅ", ""]],
  ["jya", ["じゃ", ""]],
  ["jye", ["じぇ", ""]],
  ["jyi", ["じぃ", ""]],
  ["jyo", ["じょ", ""]],
  ["jyu", ["じゅ", ""]],
  ["kk", ["っ", "k"]],
  ["ka", ["か", ""]],
  ["ke", ["け", ""]],
  ["ki", ["き", ""]],
  ["ko", ["こ", ""]],
  ["ku", ["く", ""]],
  ["kya", ["きゃ", ""]],
  ["kye", ["きぇ", ""]],
  ["kyi", ["きぃ", ""]],
  ["kyo", ["きょ", ""]],
  ["kyu", ["きゅ", ""]],
  ["mm", ["っ", "m"]],
  ["ma", ["ま", ""]],
  ["me", ["め", ""]],
  ["mi", ["み", ""]],
  ["mo", ["も", ""]],
  ["mu", ["む", ""]],
  ["mya", ["みゃ", ""]],
  ["mye", ["みぇ", ""]],
  ["myi", ["みぃ", ""]],
  ["myo", ["みょ", ""]],
  ["myu", ["みゅ", ""]],
  ["n", ["ん", ""]],
  ["n'", ["ん", ""]],
  ["na", ["な", ""]],
  ["ne", ["ね", ""]],
  ["ni", ["に", ""]],
  ["nn", ["ん", ""]],
  ["no", ["の", ""]],
  ["nu", ["ぬ", ""]],
  ["nya", ["にゃ", ""]],
  ["nye", ["にぇ", ""]],
  ["nyi", ["にぃ", ""]],
  ["nyo", ["にょ", ""]],
  ["nyu", ["にゅ", ""]],
  ["o", ["お", ""]],
  ["pp", ["っ", "p"]],
  ["pa", ["ぱ", ""]],
  ["pe", ["ぺ", ""]],
  ["pi", ["ぴ", ""]],
  ["po", ["ぽ", ""]],
  ["pu", ["ぷ", ""]],
  ["pya", ["ぴゃ", ""]],
  ["pye", ["ぴぇ", ""]],
  ["pyi", ["ぴぃ", ""]],
  ["pyo", ["ぴょ", ""]],
  ["pyu", ["ぴゅ", ""]],
  ["rr", ["っ", "r"]],
  ["ra", ["ら", ""]],
  ["re", ["れ", ""]],
  ["ri", ["り", ""]],
  ["ro", ["ろ", ""]],
  ["ru", ["る", ""]],
  ["rya", ["りゃ", ""]],
  ["rye", ["りぇ", ""]],
  ["ryi", ["りぃ", ""]],
  ["ryo", ["りょ", ""]],
  ["ryu", ["りゅ", ""]],
  ["ss", ["っ", "s"]],
  ["sa", ["さ", ""]],
  ["se", ["せ", ""]],
  ["sha", ["しゃ", ""]],
  ["she", ["しぇ", ""]],
  ["shi", ["し", ""]],
  ["sho", ["しょ", ""]],
  ["shu", ["しゅ", ""]],
  ["si", ["し", ""]],
  ["so", ["そ", ""]],
  ["su", ["す", ""]],
  ["sya", ["しゃ", ""]],
  ["sye", ["しぇ", ""]],
  ["syi", ["しぃ", ""]],
  ["syo", ["しょ", ""]],
  ["syu", ["しゅ", ""]],
  ["tt", ["っ", "t"]],
  ["ta", ["た", ""]],
  ["te", ["て", ""]],
  ["tha", ["てぁ", ""]],
  ["the", ["てぇ", ""]],
  ["thi", ["てぃ", ""]],
  ["tho", ["てょ", ""]],
  ["thu", ["てゅ", ""]],
  ["ti", ["ち", ""]],
  ["to", ["と", ""]],
  ["tsu", ["つ", ""]],
  ["tu", ["つ", ""]],
  ["tya", ["ちゃ", ""]],
  ["tye", ["ちぇ", ""]],
  ["tyi", ["ちぃ", ""]],
  ["tyo", ["ちょ", ""]],
  ["tyu", ["ちゅ", ""]],
  ["u", ["う", ""]],
  ["vv", ["っ", "v"]],
  ["va", ["ヴぁ", ""]],
  ["ve", ["ヴぇ", ""]],
  ["vi", ["ヴぃ", ""]],
  ["vo", ["ヴぉ", ""]],
  ["vu", ["ヴ", ""]],
  ["ww", ["っ", "w"]],
  ["wa", ["わ", ""]],
  ["we", ["うぇ", ""]],
  ["wi", ["うぃ", ""]],
  ["wo", ["を", ""]],
  ["wu", ["う", ""]],
  ["xx", ["っ", "x"]],
  ["xa", ["ぁ", ""]],
  ["xe", ["ぇ", ""]],
  ["xi", ["ぃ", ""]],
  ["xka", ["か", ""]],
  ["xke", ["け", ""]],
  ["xo", ["ぉ", ""]],
  ["xtsu", ["っ", ""]],
  ["xtu", ["っ", ""]],
  ["xu", ["ぅ", ""]],
  ["xwa", ["ゎ", ""]],
  ["xwe", ["ゑ", ""]],
  ["xwi", ["ゐ", ""]],
  ["xya", ["ゃ", ""]],
  ["xyo", ["ょ", ""]],
  ["xyu", ["ゅ", ""]],
  ["yy", ["っ", "y"]],
  ["ya", ["や", ""]],
  ["ye", ["いぇ", ""]],
  ["yo", ["よ", ""]],
  ["yu", ["ゆ", ""]],
  ["zz", ["っ", "z"]],
  ["z,", ["‥", ""]],
  ["z-", ["～", ""]],
  ["z.", ["…", ""]],
  ["z/", ["・", ""]],
  ["z[", ["『", ""]],
  ["z]", ["』", ""]],
  ["za", ["ざ", ""]],
  ["ze", ["ぜ", ""]],
  ["zh", ["←", ""]],
  ["zi", ["じ", ""]],
  ["zj", ["↓", ""]],
  ["zk", ["↑", ""]],
  ["zl", ["→", ""]],
  ["zo", ["ぞ", ""]],
  ["zu", ["ず", ""]],
  ["zya", ["じゃ", ""]],
  ["zye", ["じぇ", ""]],
  ["zyi", ["じぃ", ""]],
  ["zyo", ["じょ", ""]],
  ["zyu", ["じゅ", ""]],
  ["-", ["ー", ""]],
  [":", ["：", ""]],
  [";", ["；", ""]],
  ["!", ["！", ""]],
  ["?", ["？", ""]],
  ["[", ["「", ""]],
  ["]", ["」", ""]],
  [".", ["。", ""]],
  [",", ["、", ""]],
  ["l", disable],
];
