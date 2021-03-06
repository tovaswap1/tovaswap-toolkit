import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#fdb913",
  primaryBright: "#ffcb4c",
  primaryDark: "#c38e0c",
  secondary: "#414042",
  success: "#9ff0ae",
  warning: "#f69737",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#414042",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  backgroundAlt2: "rgba(255, 255, 255)",
  cardBorder: "#d1d1d1",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#d8d7da",
  inputSecondary: "#e7e7e7",
  tertiary: "#EFF4F5",
  text: "#414042",
  textDisabled: "#BDC2C4",
  textSubtle: "#414042",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #fbe9c5 0%, #fbfbe0 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #fbfbe0 0%, #fbe9c5 100%)",
    cardHeader: "linear-gradient(111.68deg, #f5e0cd 0%, #fff6d5 100%)",
    blue: "linear-gradient(180deg, #faf6d5 0%, #f6de9e 100%)",
    violet: "linear-gradient(180deg, #faf6d5 0%, #f6de9e 100%)",
    violetAlt: "linear-gradient(180deg, #faf6d5 0%, #f6de9e 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#ffa300",
  background: "#08060B",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#27262c",
  backgroundAlt2: "rgba(39, 38, 44, 0.7)",
  cardBorder: "#383241",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#372F47",
  inputSecondary: "#262130",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#F4EEFF",
  textDisabled: "#666171",
  textSubtle: "#B8ADD2",
  disabled: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};
