const MAX_HEIGHT = 200
export interface Size {
    width: number,
    height: number
}
export const getNodeSize = (node: FrameNode) => {
    const { width, height } = node
    if (height > MAX_HEIGHT) {
        return {
            width: Math.floor(MAX_HEIGHT * width / height),
            height: MAX_HEIGHT
        }
    } 
    return (
    {
        width,
        height
    })}

