import { Router } from "express";

import { UserRoutes } from "./users.routes";

const router = Router();

router.use("/users", UserRoutes);

export { router };