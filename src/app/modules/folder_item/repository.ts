import { asc, eq } from "drizzle-orm";
import { db } from "../../../db";
import { folderItems } from "../../../db/schema";
import { FolderItem } from "./model";

export interface IFolderItemRepository {
  getAll(): Promise<FolderItem[]>;
  create(data: Omit<FolderItem, "id">): Promise<FolderItem>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<FolderItem | undefined>;
}

export class FolderItemRepository implements IFolderItemRepository {
  async getAll(): Promise<FolderItem[]> {
    return db.select().from(folderItems).orderBy(asc(folderItems.name));
  }

  async create(data: Omit<FolderItem, "id">): Promise<FolderItem> {
    const [newFolderItem] = await db
      .insert(folderItems)
      .values(data)
      .returning();
    return newFolderItem;
  }

  async delete(id: number): Promise<void> {
    await db.delete(folderItems).where(eq(folderItems.id, id));
  }

  async findById(id: number): Promise<FolderItem | undefined> {
    const [result] = await db
      .select()
      .from(folderItems)
      .where(eq(folderItems.id, id));
    return result;
  }
}
