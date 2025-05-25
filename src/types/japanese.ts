export type JapaneseChar = {
  sound: string
  hiragana: string
  katakana: string
  romaji: string
}

export type CharacterGroup = {
  name: string
  characters: JapaneseChar[]
}

// Japanese character data with Hiragana and Katakana pairs
export const characterGroups: CharacterGroup[] = [
  {
    name: "Vowels",
    characters: [
      { sound: "a", hiragana: "あ", katakana: "ア", romaji: "a" },
      { sound: "i", hiragana: "い", katakana: "イ", romaji: "i" },
      { sound: "u", hiragana: "う", katakana: "ウ", romaji: "u" },
      { sound: "e", hiragana: "え", katakana: "エ", romaji: "e" },
      { sound: "o", hiragana: "お", katakana: "オ", romaji: "o" },
    ]
  },
  {
    name: "K",
    characters: [
      { sound: "ka", hiragana: "か", katakana: "カ", romaji: "ka" },
      { sound: "ki", hiragana: "き", katakana: "キ", romaji: "ki" },
      { sound: "ku", hiragana: "く", katakana: "ク", romaji: "ku" },
      { sound: "ke", hiragana: "け", katakana: "ケ", romaji: "ke" },
      { sound: "ko", hiragana: "こ", katakana: "コ", romaji: "ko" },
    ]
  },
  {
    name: "S",
    characters: [
      { sound: "sa", hiragana: "さ", katakana: "サ", romaji: "sa" },
      { sound: "shi", hiragana: "し", katakana: "シ", romaji: "shi" },
      { sound: "su", hiragana: "す", katakana: "ス", romaji: "su" },
      { sound: "se", hiragana: "せ", katakana: "セ", romaji: "se" },
      { sound: "so", hiragana: "そ", katakana: "ソ", romaji: "so" },
    ]
  },
  {
    name: "T",
    characters: [
      { sound: "ta", hiragana: "た", katakana: "タ", romaji: "ta" },
      { sound: "chi", hiragana: "ち", katakana: "チ", romaji: "chi" },
      { sound: "tsu", hiragana: "つ", katakana: "ツ", romaji: "tsu" },
      { sound: "te", hiragana: "て", katakana: "テ", romaji: "te" },
      { sound: "to", hiragana: "と", katakana: "ト", romaji: "to" },
    ]
  },
  {
    name: "N",
    characters: [
      { sound: "na", hiragana: "な", katakana: "ナ", romaji: "na" },
      { sound: "ni", hiragana: "に", katakana: "ニ", romaji: "ni" },
      { sound: "nu", hiragana: "ぬ", katakana: "ヌ", romaji: "nu" },
      { sound: "ne", hiragana: "ね", katakana: "ネ", romaji: "ne" },
      { sound: "no", hiragana: "の", katakana: "ノ", romaji: "no" },
      { sound: "n", hiragana: "ん", katakana: "ン", romaji: "n" },
    ]
  },
  {
    name: "H",
    characters: [
      { sound: "ha", hiragana: "は", katakana: "ハ", romaji: "ha" },
      { sound: "hi", hiragana: "ひ", katakana: "ヒ", romaji: "hi" },
      { sound: "fu", hiragana: "ふ", katakana: "フ", romaji: "fu" },
      { sound: "he", hiragana: "へ", katakana: "ヘ", romaji: "he" },
      { sound: "ho", hiragana: "ほ", katakana: "ホ", romaji: "ho" },
    ]
  },
  {
    name: "M",
    characters: [
      { sound: "ma", hiragana: "ま", katakana: "マ", romaji: "ma" },
      { sound: "mi", hiragana: "み", katakana: "ミ", romaji: "mi" },
      { sound: "mu", hiragana: "む", katakana: "ム", romaji: "mu" },
      { sound: "me", hiragana: "め", katakana: "メ", romaji: "me" },
      { sound: "mo", hiragana: "も", katakana: "モ", romaji: "mo" },
    ]
  },
  {
    name: "Y",
    characters: [
      { sound: "ya", hiragana: "や", katakana: "ヤ", romaji: "ya" },
      { sound: "yu", hiragana: "ゆ", katakana: "ユ", romaji: "yu" },
      { sound: "yo", hiragana: "よ", katakana: "ヨ", romaji: "yo" },
    ]
  },
  {
    name: "R",
    characters: [
      { sound: "ra", hiragana: "ら", katakana: "ラ", romaji: "ra" },
      { sound: "ri", hiragana: "り", katakana: "リ", romaji: "ri" },
      { sound: "ru", hiragana: "る", katakana: "ル", romaji: "ru" },
      { sound: "re", hiragana: "れ", katakana: "レ", romaji: "re" },
      { sound: "ro", hiragana: "ろ", katakana: "ロ", romaji: "ro" },
    ]
  },
  {
    name: "W",
    characters: [
      { sound: "wa", hiragana: "わ", katakana: "ワ", romaji: "wa" },
      { sound: "wo", hiragana: "を", katakana: "ヲ", romaji: "wo" },
    ]
  },
  {
    name: "G",
    characters: [
      { sound: "ga", hiragana: "が", katakana: "ガ", romaji: "ga" },
      { sound: "gi", hiragana: "ぎ", katakana: "ギ", romaji: "gi" },
      { sound: "gu", hiragana: "ぐ", katakana: "グ", romaji: "gu" },
      { sound: "ge", hiragana: "げ", katakana: "ゲ", romaji: "ge" },
      { sound: "go", hiragana: "ご", katakana: "ゴ", romaji: "go" },
    ]
  },
  {
    name: "Z",
    characters: [
      { sound: "za", hiragana: "ざ", katakana: "ザ", romaji: "za" },
      { sound: "ji", hiragana: "じ", katakana: "ジ", romaji: "ji" },
      { sound: "zu", hiragana: "ず", katakana: "ズ", romaji: "zu" },
      { sound: "ze", hiragana: "ぜ", katakana: "ゼ", romaji: "ze" },
      { sound: "zo", hiragana: "ぞ", katakana: "ゾ", romaji: "zo" },
    ]
  },
  {
      name: "D",
    characters: [
      { sound: "da", hiragana: "だ", katakana: "ダ", romaji: "da" },
      { sound: "ji", hiragana: "ぢ", katakana: "ヂ", romaji: "ji" },
      { sound: "zu", hiragana: "づ", katakana: "ヅ", romaji: "zu" },
      { sound: "de", hiragana: "で", katakana: "デ", romaji: "de" },
      { sound: "do", hiragana: "ど", katakana: "ド", romaji: "do" },
    ]
  },
  {
    name: "B",
    characters: [
      { sound: "ba", hiragana: "ば", katakana: "バ", romaji: "ba" },
      { sound: "bi", hiragana: "び", katakana: "ビ", romaji: "bi" },
      { sound: "bu", hiragana: "ぶ", katakana: "ブ", romaji: "bu" },
      { sound: "be", hiragana: "べ", katakana: "ベ", romaji: "be" },
      { sound: "bo", hiragana: "ぼ", katakana: "ボ", romaji: "bo" },
    ]
  },
  {
    name: "P",
    characters: [
      { sound: "pa", hiragana: "ぱ", katakana: "パ", romaji: "pa" },
      { sound: "pi", hiragana: "ぴ", katakana: "ピ", romaji: "pi" },
      { sound: "pu", hiragana: "ぷ", katakana: "プ", romaji: "pu" },
      { sound: "pe", hiragana: "ぺ", katakana: "ペ", romaji: "pe" },
      { sound: "po", hiragana: "ぽ", katakana: "ポ", romaji: "po" },
    ]
  },
  {
    name: "J",
    characters: [
      { sound: "ja", hiragana: "じゃ", katakana: "ジャ", romaji: "ja" },
      { sound: "ju", hiragana: "じゅ", katakana: "ジュ", romaji: "ju" },
      { sound: "jo", hiragana: "じょ", katakana: "ジョ", romaji: "jo" },
    ]
  },
  {
    name: "Ky",
    characters: [
      { sound: "kya", hiragana: "きゃ", katakana: "キャ", romaji: "kya" },
      { sound: "kyu", hiragana: "きゅ", katakana: "キュ", romaji: "kyu" },
      { sound: "kyo", hiragana: "きょ", katakana: "キョ", romaji: "kyo" },
    ]
  },
  {
    name: "Sh",
    characters: [
      { sound: "sha", hiragana: "しゃ", katakana: "シャ", romaji: "sha" },
      { sound: "shu", hiragana: "しゅ", katakana: "シュ", romaji: "shu" },
      { sound: "sho", hiragana: "しょ", katakana: "ショ", romaji: "sho" },
    ]
  },
  {
    name: "Ch",
    characters: [
      { sound: "cha", hiragana: "ちゃ", katakana: "チャ", romaji: "cha" },
      { sound: "chu", hiragana: "ちゅ", katakana: "チュ", romaji: "chu" },
      { sound: "cho", hiragana: "ちょ", katakana: "チョ", romaji: "cho" },
    ]
  },
  {
    name: "Ny",
    characters: [
      { sound: "nya", hiragana: "にゃ", katakana: "ニャ", romaji: "nya" },
      { sound: "nyu", hiragana: "にゅ", katakana: "ニュ", romaji: "nyu" },
      { sound: "nyo", hiragana: "にょ", katakana: "ニョ", romaji: "nyo" },
    ]
  },
  {
    name: "Hy",
    characters: [
      { sound: "hya", hiragana: "ひゃ", katakana: "ヒャ", romaji: "hya" },
      { sound: "hyu", hiragana: "ひゅ", katakana: "ヒュ", romaji: "hyu" },
      { sound: "hyo", hiragana: "ひょ", katakana: "ヒョ", romaji: "hyo" },
    ]
  },
  {
    name: "My",
    characters: [
      { sound: "mya", hiragana: "みゃ", katakana: "ミャ", romaji: "mya" },
      { sound: "myu", hiragana: "みゅ", katakana: "ミュ", romaji: "myu" },
      { sound: "myo", hiragana: "みょ", katakana: "ミョ", romaji: "myo" },
    ]
  },
  {
    name: "Ry",
    characters: [
      { sound: "rya", hiragana: "りゃ", katakana: "リャ", romaji: "rya" },
      { sound: "ryu", hiragana: "りゅ", katakana: "リュ", romaji: "ryu" },
      { sound: "ryo", hiragana: "りょ", katakana: "リョ", romaji: "ryo" },
    ]
  },
  {
    name: "Gy",
    characters: [
      { sound: "gya", hiragana: "ぎゃ", katakana: "ギャ", romaji: "gya" },
      { sound: "gyu", hiragana: "ぎゅ", katakana: "ギュ", romaji: "gyu" },
      { sound: "gyo", hiragana: "ぎょ", katakana: "ギョ", romaji: "gyo" },
    ]
  },
  {
    name: "By",
    characters: [
      { sound: "bya", hiragana: "びゃ", katakana: "ビャ", romaji: "bya" },
      { sound: "byu", hiragana: "びゅ", katakana: "ビュ", romaji: "byu" },
      { sound: "byo", hiragana: "びょ", katakana: "ビョ", romaji: "byo" },
    ]
  },
  {
    name: "Py",
    characters: [
      { sound: "pya", hiragana: "ぴゃ", katakana: "ピャ", romaji: "pya" },
      { sound: "pyu", hiragana: "ぴゅ", katakana: "ピュ", romaji: "pyu" },
      { sound: "pyo", hiragana: "ぴょ", katakana: "ピョ", romaji: "pyo" },
    ]
  }
] 