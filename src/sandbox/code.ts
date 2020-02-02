import { getCurrentNode } from "./getCurrentNode";
import { highlightCurrentNode } from "./highlightCurrentNode";
import { Size, getNodeSize } from "./getNodeSize";
import { restoreStroke } from "./restoreStroke";

figma.showUI(__html__);

const currentNode = getCurrentNode();
if (!currentNode || 'FRAME' !== currentNode.type) {
    figma.closePlugin('Please select a frame')
} else {
    const previousStrokeStyle = highlightCurrentNode(currentNode);
    figma.on("close", () => {
        restoreStroke(previousStrokeStyle, currentNode)
    })

    const size: Size = getNodeSize(currentNode);
    figma.ui.resize(size.width + 500, size.height + 50)
    figma.ui.postMessage({
        type: 'currentNodeSize',
        size
    })
}
