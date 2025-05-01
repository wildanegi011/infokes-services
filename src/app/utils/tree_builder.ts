import { FolderItem, FolderTreeNode } from "../folder_item/model";

type TreeNode = FolderItem & { children: TreeNode[] };

export function buildFolderTree(items: FolderItem[]): FolderTreeNode[] {
  const map = new Map<number, TreeNode>();
  const roots: TreeNode[] = [];

  for (const item of items) {
    map.set(item.id, { ...item, children: [] });
  }

  for (const item of map.values()) {
    if (item.parentId === null || !map.has(item.parentId)) {
      roots.push(item);
    } else {
      map.get(item.parentId)!.children.push(item);
    }
  }

  return transformToTreeNode(roots);
}

function transformToTreeNode(nodes: TreeNode[]): FolderTreeNode[] {
  return nodes.map(({ id, name, type, children }) => ({
    id,
    name,
    type,
    children: transformToTreeNode(children),
  }));
}
