import { Router } from "express";

import UserController from "./controllers/userController";

const routes = Router();

routes.get("/users", UserController.index);
routes.post("/create", UserController.store);

export default routes;
