const MAX_SIZE = 300;
export interface Size {
	width: number;
	height: number;
}
export const getNodeSize = (node: FrameNode) => {
	const { width, height } = node;
	if (height > width) {
		if (height > MAX_SIZE) {
			return {
				width: Math.floor(MAX_SIZE * width / height),
				height: MAX_SIZE
			};
		}
	}
	if (width > MAX_SIZE) {
		return {
			width: MAX_SIZE,
			height: Math.floor(MAX_SIZE * height / width)
		};
	}

	return {
		width,
		height
	};
};
