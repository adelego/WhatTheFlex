import { getCurrentNode } from "./getCurrentNode";
import { highlightCurrentNode } from "./highlightCurrentNode";
import { Size, getNodeSize } from "./getNodeSize";

figma.showUI(__html__);

const currentNode = getCurrentNode();
if (!currentNode || 'FRAME' !== currentNode.type) {
    figma.closePlugin('Please select a frame')
} else {
    const previousStrokeStyle = highlightCurrentNode(currentNode);
    const size: Size = getNodeSize(currentNode);
}


