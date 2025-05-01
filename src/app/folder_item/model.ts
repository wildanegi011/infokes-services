export type FolderItem = {
  id: number;
  name: string;
  type: string;
  parentId: number | null;
};

export type FolderTreeNode = {
  name: string;
  type: string;
  children?: FolderTreeNode[];
};
