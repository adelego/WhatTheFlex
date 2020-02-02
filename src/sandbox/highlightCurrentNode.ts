export interface StrokeStyle {
  strokes: Readonly<Paint[]>,
  strokeWeight: number,
  strokeCap: "NONE" | "ROUND" | "SQUARE" | "ARROW_LINES" | "ARROW_EQUILATERAL" | PluginAPI["mixed"]
}

export const highlightCurrentNode = (node: SceneNode): StrokeStyle|null => {
  if (node.type === 'FRAME') {
    const previousStrokeStyle: StrokeStyle = {
      strokes: node.strokes,
      strokeWeight: node.strokeWeight,
      strokeCap: node.strokeCap
    }
    const newStroke: Paint = {
      type: 'SOLID',
      color: {r: .92, g: .34, b: .34},
      opacity: .5
    }
    const strokes = node.strokes.slice(0)
    strokes.push(newStroke)
    node.strokes = strokes;
    node.strokeWeight = 5;
    node.strokeCap = 'ROUND'

    return previousStrokeStyle
  }
  return null
};
