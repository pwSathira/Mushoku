export type JapaneseChar = {
  sound: string
  hiragana: string
  katakana: string
  romaji: string
  fileNumber: string
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
      { sound: "a", hiragana: "あ", katakana: "ア", romaji: "a", fileNumber: "1" },
      { sound: "i", hiragana: "い", katakana: "イ", romaji: "i", fileNumber: "2" },
      { sound: "u", hiragana: "う", katakana: "ウ", romaji: "u", fileNumber: "3" },
      { sound: "e", hiragana: "え", katakana: "エ", romaji: "e", fileNumber: "4" },
      { sound: "o", hiragana: "お", katakana: "オ", romaji: "o", fileNumber: "5" },
    ]
  },
  {
    name: "K",
    characters: [
      { sound: "ka", hiragana: "か", katakana: "カ", romaji: "ka", fileNumber: "6" },
      { sound: "ki", hiragana: "き", katakana: "キ", romaji: "ki", fileNumber: "7" },
      { sound: "ku", hiragana: "く", katakana: "ク", romaji: "ku", fileNumber: "8" },
      { sound: "ke", hiragana: "け", katakana: "ケ", romaji: "ke", fileNumber: "9" },
      { sound: "ko", hiragana: "こ", katakana: "コ", romaji: "ko", fileNumber: "10" },
    ]
  },
  {
    name: "S",
    characters: [
      { sound: "sa", hiragana: "さ", katakana: "サ", romaji: "sa", fileNumber: "11" },
      { sound: "shi", hiragana: "し", katakana: "シ", romaji: "shi", fileNumber: "12" },
      { sound: "su", hiragana: "す", katakana: "ス", romaji: "su", fileNumber: "13" },
      { sound: "se", hiragana: "せ", katakana: "セ", romaji: "se", fileNumber: "14" },
      { sound: "so", hiragana: "そ", katakana: "ソ", romaji: "so", fileNumber: "15" },
    ]
  },
  {
    name: "T",
    characters: [
      { sound: "ta", hiragana: "た", katakana: "タ", romaji: "ta", fileNumber: "16" },
      { sound: "chi", hiragana: "ち", katakana: "チ", romaji: "chi", fileNumber: "17" },
      { sound: "tsu", hiragana: "つ", katakana: "ツ", romaji: "tsu", fileNumber: "18" },
      { sound: "te", hiragana: "て", katakana: "テ", romaji: "te", fileNumber: "19" },
      { sound: "to", hiragana: "と", katakana: "ト", romaji: "to", fileNumber: "20" },
    ]
  },
  {
    name: "N",
    characters: [
      { sound: "na", hiragana: "な", katakana: "ナ", romaji: "na", fileNumber: "21" },
      { sound: "ni", hiragana: "に", katakana: "ニ", romaji: "ni", fileNumber: "22" },
      { sound: "nu", hiragana: "ぬ", katakana: "ヌ", romaji: "nu", fileNumber: "23" },
      { sound: "ne", hiragana: "ね", katakana: "ネ", romaji: "ne", fileNumber: "24" },
      { sound: "no", hiragana: "の", katakana: "ノ", romaji: "no", fileNumber: "25" },
      { sound: "n", hiragana: "ん", katakana: "ン", romaji: "n", fileNumber: "46" },
    ]
  },
  {
    name: "H",
    characters: [
      { sound: "ha", hiragana: "は", katakana: "ハ", romaji: "ha", fileNumber: "26" },
      { sound: "hi", hiragana: "ひ", katakana: "ヒ", romaji: "hi", fileNumber: "27" },
      { sound: "fu", hiragana: "ふ", katakana: "フ", romaji: "fu", fileNumber: "28" },
      { sound: "he", hiragana: "へ", katakana: "ヘ", romaji: "he", fileNumber: "29" },
      { sound: "ho", hiragana: "ほ", katakana: "ホ", romaji: "ho", fileNumber: "30" },
    ]
  },
  {
    name: "M",
    characters: [
      { sound: "ma", hiragana: "ま", katakana: "マ", romaji: "ma", fileNumber: "31" },
      { sound: "mi", hiragana: "み", katakana: "ミ", romaji: "mi", fileNumber: "32" },
      { sound: "mu", hiragana: "む", katakana: "ム", romaji: "mu", fileNumber: "33" },
      { sound: "me", hiragana: "め", katakana: "メ", romaji: "me", fileNumber: "34" },
      { sound: "mo", hiragana: "も", katakana: "モ", romaji: "mo", fileNumber: "35" },
    ]
  },
  {
    name: "Y",
    characters: [
      { sound: "ya", hiragana: "や", katakana: "ヤ", romaji: "ya", fileNumber: "36" },
      { sound: "yu", hiragana: "ゆ", katakana: "ユ", romaji: "yu", fileNumber: "37" },
      { sound: "yo", hiragana: "よ", katakana: "ヨ", romaji: "yo", fileNumber: "38" },
    ]
  },
  {
    name: "R",
    characters: [
      { sound: "ra", hiragana: "ら", katakana: "ラ", romaji: "ra", fileNumber: "39" },
      { sound: "ri", hiragana: "り", katakana: "リ", romaji: "ri", fileNumber: "40" },
      { sound: "ru", hiragana: "る", katakana: "ル", romaji: "ru", fileNumber: "41" },
      { sound: "re", hiragana: "れ", katakana: "レ", romaji: "re", fileNumber: "42" },
      { sound: "ro", hiragana: "ろ", katakana: "ロ", romaji: "ro", fileNumber: "43" },
    ]
  },
  {
    name: "W",
    characters: [
      { sound: "wa", hiragana: "わ", katakana: "ワ", romaji: "wa", fileNumber: "44" },
      { sound: "wo", hiragana: "を", katakana: "ヲ", romaji: "wo", fileNumber: "45" },
    ]
  },
  {
    name: "G",
    characters: [
      { sound: "ga", hiragana: "が", katakana: "ガ", romaji: "ga", fileNumber: "d1" },
      { sound: "gi", hiragana: "ぎ", katakana: "ギ", romaji: "gi", fileNumber: "d2" },
      { sound: "gu", hiragana: "ぐ", katakana: "グ", romaji: "gu", fileNumber: "d3" },
      { sound: "ge", hiragana: "げ", katakana: "ゲ", romaji: "ge", fileNumber: "d4" },
      { sound: "go", hiragana: "ご", katakana: "ゴ", romaji: "go", fileNumber: "d5" },
    ]
  },
  {
    name: "Z",
    characters: [
      { sound: "za", hiragana: "ざ", katakana: "ザ", romaji: "za", fileNumber: "d6" },
      { sound: "ji", hiragana: "じ", katakana: "ジ", romaji: "ji", fileNumber: "d7" },
      { sound: "zu", hiragana: "ず", katakana: "ズ", romaji: "zu", fileNumber: "d8" },
      { sound: "ze", hiragana: "ぜ", katakana: "ゼ", romaji: "ze", fileNumber: "d9" },
      { sound: "zo", hiragana: "ぞ", katakana: "ゾ", romaji: "zo", fileNumber: "d10" },
    ]
  },
  {
    name: "D",
    characters: [
      { sound: "da", hiragana: "だ", katakana: "ダ", romaji: "da", fileNumber: "d11" },
      { sound: "ji", hiragana: "ぢ", katakana: "ヂ", romaji: "ji", fileNumber: "d7" },
      { sound: "zu", hiragana: "づ", katakana: "ヅ", romaji: "zu", fileNumber: "d8" },
      { sound: "de", hiragana: "で", katakana: "デ", romaji: "de", fileNumber: "d14" },
      { sound: "do", hiragana: "ど", katakana: "ド", romaji: "do", fileNumber: "d15" },
    ]
  },
  {
    name: "B",
    characters: [
      { sound: "ba", hiragana: "ば", katakana: "バ", romaji: "ba", fileNumber: "d16" },
      { sound: "bi", hiragana: "び", katakana: "ビ", romaji: "bi", fileNumber: "d17" },
      { sound: "bu", hiragana: "ぶ", katakana: "ブ", romaji: "bu", fileNumber: "d18" },
      { sound: "be", hiragana: "べ", katakana: "ベ", romaji: "be", fileNumber: "d19" },
      { sound: "bo", hiragana: "ぼ", katakana: "ボ", romaji: "bo", fileNumber: "d20" },
    ]
  },
  {
    name: "P",
    characters: [
      { sound: "pa", hiragana: "ぱ", katakana: "パ", romaji: "pa", fileNumber: "d21" },
      { sound: "pi", hiragana: "ぴ", katakana: "ピ", romaji: "pi", fileNumber: "d22" },
      { sound: "pu", hiragana: "ぷ", katakana: "プ", romaji: "pu", fileNumber: "d23" },
      { sound: "pe", hiragana: "ぺ", katakana: "ペ", romaji: "pe", fileNumber: "d24" },
      { sound: "po", hiragana: "ぽ", katakana: "ポ", romaji: "po", fileNumber: "d25" },
    ]
  },
  {
    name: "J",
    characters: [
      { sound: "ja", hiragana: "じゃ", katakana: "ジャ", romaji: "ja", fileNumber: "c10" },
      { sound: "ju", hiragana: "じゅ", katakana: "ジュ", romaji: "ju", fileNumber: "c11" },
      { sound: "jo", hiragana: "じょ", katakana: "ジョ", romaji: "jo", fileNumber: "c12" },
    ]
  },
  {
    name: "Ky",
    characters: [
      { sound: "kya", hiragana: "きゃ", katakana: "キャ", romaji: "kya", fileNumber: "c1" },
      { sound: "kyu", hiragana: "きゅ", katakana: "キュ", romaji: "kyu", fileNumber: "c2" },
      { sound: "kyo", hiragana: "きょ", katakana: "キョ", romaji: "kyo", fileNumber: "c3" },
    ]
  },
  {
    name: "Sh",
    characters: [
      { sound: "sha", hiragana: "しゃ", katakana: "シャ", romaji: "sha", fileNumber: "c7" },
      { sound: "shu", hiragana: "しゅ", katakana: "シュ", romaji: "shu", fileNumber: "c8" },
      { sound: "sho", hiragana: "しょ", katakana: "ショ", romaji: "sho", fileNumber: "c9" },
    ]
  },
  {
    name: "Ch",
    characters: [
      { sound: "cha", hiragana: "ちゃ", katakana: "チャ", romaji: "cha", fileNumber: "c13" },
      { sound: "chu", hiragana: "ちゅ", katakana: "チュ", romaji: "chu", fileNumber: "c14" },
      { sound: "cho", hiragana: "ちょ", katakana: "チョ", romaji: "cho", fileNumber: "c15" },
    ]
  },
  {
    name: "Ny",
    characters: [
      { sound: "nya", hiragana: "にゃ", katakana: "ニャ", romaji: "nya", fileNumber: "c16" },
      { sound: "nyu", hiragana: "にゅ", katakana: "ニュ", romaji: "nyu", fileNumber: "c17" },
      { sound: "nyo", hiragana: "にょ", katakana: "ニョ", romaji: "nyo", fileNumber: "c18" },
    ]
  },
  {
    name: "Hy",
    characters: [
      { sound: "hya", hiragana: "ひゃ", katakana: "ヒャ", romaji: "hya", fileNumber: "c19" },
      { sound: "hyu", hiragana: "ひゅ", katakana: "ヒュ", romaji: "hyu", fileNumber: "c20" },
      { sound: "hyo", hiragana: "ひょ", katakana: "ヒョ", romaji: "hyo", fileNumber: "c21" },
    ]
  },
  {
    name: "My",
    characters: [
      { sound: "mya", hiragana: "みゃ", katakana: "ミャ", romaji: "mya", fileNumber: "c28" },
      { sound: "myu", hiragana: "みゅ", katakana: "ミュ", romaji: "myu", fileNumber: "c29" },
      { sound: "myo", hiragana: "みょ", katakana: "ミョ", romaji: "myo", fileNumber: "c30" },
    ]
  },
  {
    name: "Ry",
    characters: [
      { sound: "rya", hiragana: "りゃ", katakana: "リャ", romaji: "rya", fileNumber: "c31" },
      { sound: "ryu", hiragana: "りゅ", katakana: "リュ", romaji: "ryu", fileNumber: "c32" },
      { sound: "ryo", hiragana: "りょ", katakana: "リョ", romaji: "ryo", fileNumber: "c33" },
    ]
  },
  {
    name: "Gy",
    characters: [
      { sound: "gya", hiragana: "ぎゃ", katakana: "ギャ", romaji: "gya", fileNumber: "c4" },
      { sound: "gyu", hiragana: "ぎゅ", katakana: "ギュ", romaji: "gyu", fileNumber: "c5" },
      { sound: "gyo", hiragana: "ぎょ", katakana: "ギョ", romaji: "gyo", fileNumber: "c6" },
    ]
  },
  {
    name: "By",
    characters: [
      { sound: "bya", hiragana: "びゃ", katakana: "ビャ", romaji: "bya", fileNumber: "c22" },
      { sound: "byu", hiragana: "びゅ", katakana: "ビュ", romaji: "byu", fileNumber: "c23" },
      { sound: "byo", hiragana: "びょ", katakana: "ビョ", romaji: "byo", fileNumber: "c24" },
    ]
  },
  {
    name: "Py",
    characters: [
      { sound: "pya", hiragana: "ぴゃ", katakana: "ピャ", romaji: "pya", fileNumber: "c25" },
      { sound: "pyu", hiragana: "ぴゅ", katakana: "ピュ", romaji: "pyu", fileNumber: "c26" },
      { sound: "pyo", hiragana: "ぴょ", katakana: "ピョ", romaji: "pyo", fileNumber: "c27" },
    ]
  }
] 