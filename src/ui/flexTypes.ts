export type Direction = "row" | "column";
export const directionArray: Direction[] = ["row", "column"];

export type JusitfyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "start"
  | "end"
  | "left"
  | "right";

export const justifyContentArray: JusitfyContent[] = [
  "flex-start",
  "flex-end",
  "center",
  "space-between",
  "space-around",
  "space-evenly",
  "start",
  "end",
  "left",
  "right"
];

export type AlignItems =
  | "stretch"
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "first baseline"
  | "last baseline"
  | "start"
  | "end"
  | "self-start"
  | "self-end";

export const alignItemArray: AlignItems[] = [
  "stretch",
  "flex-start",
  "flex-end",
  "center",
  "baseline",
  "first baseline",
  "last baseline",
  "start",
  "end",
  "self-start",
  "self-end"
];


export interface FlexProperties {
  flexDirection: Direction;
  justifyContent: JusitfyContent;
  alignItems: AlignItems
}
