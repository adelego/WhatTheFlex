import { StrokeStyle } from "./highlightCurrentNode";

export const restoreStroke = (strokeStyle: StrokeStyle, node: FrameNode): void => {
    node.strokes = strokeStyle.strokes;
    node.strokeWeight = strokeStyle.strokeWeight;
    node.strokeCap = strokeStyle.strokeCap;
}
 