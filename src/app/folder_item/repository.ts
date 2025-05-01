import { asc } from "drizzle-orm";
import { db } from "../../db";
import { folderItems } from "../../db/schema";
import { FolderItem } from "./model";

export async function getAllFolderItems(): Promise<FolderItem[]> {
  return await db.select().from(folderItems).orderBy(asc(folderItems.name));
}
