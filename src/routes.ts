import { Router } from "express";
import OrphanegesController from "./controllers/AbrigosController";
import multer from "multer";
import uploadConfig from "./config/upload";

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/orphanages", OrphanegesController.index);
routes.get("/orphanages/:id", OrphanegesController.show);
routes.post("/orphanages", upload.array("images"), OrphanegesController.create);

export default routes;
