export type DividerProps = JSX.IntrinsicElements["div"] & {
  orientation?: "vertical" | "horizontal";
  type?: "dashed" | "dotted" | "solid";
  size?: string;
  label?: string | JSX.Element;
  color?: string;
  labelColor?: string;
  labelBackground?: string;
  labelPosition?: "start" | "end" | "center";
  minHeight?: string;
  minWidth?: string;
};

export type DividerTheme = [
  string,
  {
    dividerColor: string;
    labelColor: string;
    labelBackground: string;
    dividerSize: string;
    dividerStyleMinHeight: string;
    dividerStyleMinWidth: string;
  }
];
