export const getCurrentNode = (): SceneNode | null => {
  const selection = figma.currentPage.selection;
  if (selection.length === 0) {
    return null;
  }
  // If more then one node is selected, we just return the
  // first one
  return selection[0];
};
