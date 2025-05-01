import { Elysia } from "elysia";
import { folderItemRoutes } from "./app/folder_item/handler";
import cors from "@elysiajs/cors";

new Elysia().use(cors()).use(folderItemRoutes).listen(3000);
