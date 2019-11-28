// Brand

const primary = {
  one: "#19216C",
  two: "#2D3A8C",
  three: "#35469C",
  four: "#4055A8",
  five: "#4C63B6",
  six: "#647ACB",
  seven: "#7B93DB",
  eight: "#98AEEB",
  nine: "#BED0F7",
  ten: "#E0E8F9",
  eleven: "#D9DBE3"
};

const neutral = {
  one: "#102A43",
  two: "#243B53",
  three: "#334E68",
  four: "#486581",
  five: "#627D98",
  six: "#829AB1",
  seven: "#9FB3C8",
  eight: "#BCCCDC",
  nine: "#D9E2EC",
  ten: "#F0F4F8"
};

const error = {
  one: "#610404",
  two: "#780A0A",
  three: "#911111",
  four: "#A61B1B",
  five: "#BA2525",
  six: "#D64545",
  seven: "#E66A6A",
  eight: "#F29B9B",
  nine: "#FACDCD",
  ten: "#FFEEEE"
};

const success = {
  one: "#05400A",
  two: "#0E5814",
  three: "#207227",
  four: "#2F8132",
  five: "#3F9142",
  six: "#57AE5B",
  seven: "#7BC47F",
  eight: "#A3D9A5",
  nine: "#C1EAC5",
  ten: "#E3F9E5"
};

const warn = {
  one: "#513C06",
  two: "#7C5E10",
  three: "#A27C1A",
  four: "#C99A2E",
  five: "#E9B949",
  six: "#F7D070",
  seven: "#F9DA8B",
  eight: "#F8E3A3",
  nine: "#FCEFC7",
  ten: "#FFFAEB"
};

export const theme = {
  primary,
  neutral,
  brand: {
    default: primary.six,
    text: primary.one,
    wash: primary.ten,
    border: primary.nine
  },
  text: {
    primary: neutral.one,
    secondary: neutral.two,
    tertiary: neutral.three
  },
  ui: {
    wash: neutral.ten,
    cardWash: neutral.five,
    border: neutral.three
  },
  accent: {
    error: {
      ...error,
      default: error.three,
      text: error.one,
      wash: error.ten,
      border: error.eight
    },
    success: {
      ...success,
      default: success.three,
      text: success.one,
      wash: success.ten,
      border: success.eight
    },
    warn: {
      ...warn,
      default: warn.three,
      text: warn.one,
      wash: warn.ten,
      border: warn.eight
    }
  },
  shadow: {
    small: "0px 1px 2px rgba(0, 0, 0, 0.02)",
    medium: "0px 1px 4px rgba(0, 0, 0, 0.04)",
    large: "0px 1px 8px rgba(0, 0, 0, 0.08)"
  },
  animation: {
    in: "0.2s ease-in",
    out: "0.2s ease-out"
  },
  fonts: {
    header: "aktiv-grotesk, sans-serif",
    body: "'Avenir Next'"
  }
};
