import {addAlbum,deleteAlbum,listAlbum} from "../controllers/album.controller.js";
import {Router} from "express";
import { upload } from "../middleware/multer.js";

const router=Router();

router.route('/add').post(upload.single("image"), addAlbum);
router.route('/listalbums').get(listAlbum);
router.route('/remove').post(deleteAlbum)

export default router;