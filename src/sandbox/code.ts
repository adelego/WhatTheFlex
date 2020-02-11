import { getCurrentNode } from './getCurrentNode';
import { highlightCurrentNode } from './highlightCurrentNode';
import { Size, getNodeSize } from './getNodeSize';
import { restoreStroke } from './restoreStroke';
import { onSaveNodeProperties, getSavedNodeProperties } from './saveNodeProperties';

figma.showUI(__html__);

const UI_MIN_HEIGHT = 260;
const UI_ADDITIONAL_HEIGHT = 24;
const UI_ADDITIONAL_WIDTH = 300;

const currentNode = getCurrentNode();
if (!currentNode || 'FRAME' !== currentNode.type) {
	figma.closePlugin('Please select a frame');
} else {
	const properties = getSavedNodeProperties(currentNode);
	figma.ui.postMessage({
		type: 'savedNodeProperties',
		properties
	});

	const previousStrokeStyle = highlightCurrentNode(currentNode);
	figma.on('close', () => {
		restoreStroke(previousStrokeStyle, currentNode);
	});

	const size: Size = getNodeSize(currentNode);

	figma.ui.resize(size.width + UI_ADDITIONAL_WIDTH, Math.max(UI_MIN_HEIGHT, size.height + UI_ADDITIONAL_HEIGHT));
	figma.ui.postMessage({
		type: 'currentNodeSize',
		size
	});

	figma.ui.onmessage = (message) => {
		if ('saveNodeProperties' === message.type) {
			onSaveNodeProperties(message.properties, currentNode);
		}
	};
}
