import {addSong,listSong, removeSong} from "../controllers/song.controller.js";
import {Router} from "express";
import { upload } from "../middleware/multer.js";

const router=Router();

router.route('/add').post(upload.fields([{name:'image',maxCount:1},{name:'audio',maxCount:1}]), addSong);
router.route('/listsongs').get(listSong);
router.route('/remove').post(removeSong)

export default router;