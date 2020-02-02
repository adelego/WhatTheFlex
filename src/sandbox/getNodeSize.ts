export interface Size {
    width: number,
    height: number
}
export const getNodeSize = (node: FrameNode) => ({
        width: node.width,
        height: node.height
    })

