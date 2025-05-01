import { buildFolderTree } from "../utils/tree_builder";
import { FolderTreeNode } from "./model";
import { getAllFolderItems } from "./repository";

export async function getFolderTree(): Promise<FolderTreeNode[]> {
  const query = await getAllFolderItems();
  return buildFolderTree(query);
}
