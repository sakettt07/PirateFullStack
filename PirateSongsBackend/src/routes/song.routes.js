import {addSong,listSong} from "../controllers/song.controller.js";
import {Router} from "express";

const router=Router();

router.route('/add').post(addSong);
router.route('/listsongs').get(listSong);

export default router;