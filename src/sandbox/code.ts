import { getCurrentNode } from "./getCurrentNode";
import { highlightCurrentNode } from "./highlightCurrentNode";

figma.showUI(__html__);

const currentNode = getCurrentNode();
const previousStrokeStyle = highlightCurrentNode(currentNode);

