import { buildFolderTree } from "../../utils/tree_builder";
import { CreateFolderItemDto, CreateFolderItemInput } from "./dto";
import { FolderItem, FolderTreeNode } from "./model";
import { FolderItemRepository, IFolderItemRepository } from "./repository";

export class FolderItemUsecase {
  constructor(private repo: IFolderItemRepository) {}

  async getAllFolderItems(): Promise<FolderTreeNode[]> {
    return buildFolderTree(await this.repo.getAll());
  }

  async createFolderItem(data: Omit<FolderItem, "id">): Promise<FolderItem> {
    return await this.repo.create(data);
  }

  async deleteFolderItem(id: number): Promise<void> {
    const dataExist = await this.repo.findById(id);
    if (!dataExist) {
      throw new Error(`FolderItem with id ${id} not found`);
    }

    return this.repo.delete(id);
  }
}
