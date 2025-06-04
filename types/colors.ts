import { ColorValue } from "react-native";

export const BackgroundGradients = {
  primary: {
    colors: ["#666E94", "#5E356A"] as [ColorValue, ColorValue],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 }
  }
};

export const ButtonGradients = {
  primary: {
    colors: ["#FE8C17", "#FED106"] as [ColorValue, ColorValue],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 }
  }
};

export const Progressbar = {
  primary: "#4BB04F",
  background: "#DCF0DD"
};
