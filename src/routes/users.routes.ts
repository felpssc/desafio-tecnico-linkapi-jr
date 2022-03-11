import { Router } from "express";
import { ListUsersController } from "../modules/users/useCases/ListUsersController";

const routes = Router();

const listUsersController = new ListUsersController();

routes.get("/", listUsersController.handle);

export { routes as UserRoutes };