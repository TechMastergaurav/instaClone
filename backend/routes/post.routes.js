import express from "express"

import isAuthenticated from "../middlewares/isAuthenticated.js"
import upload from "../middlewares/multer.js"
import { addComment, addNewPost, bookMarkPost, deletePost, dislikePost, getAllPost, getCommentOfPosts, getUserPost, likePost, getUserPostsById } from "../controllers/post.controller.js"
const router = express.Router()
router.route("/addpost").post(isAuthenticated,upload.single('image'),addNewPost)
router.route("/all").get(isAuthenticated,getAllPost)
router.route("/userpost/all").get(isAuthenticated,getUserPost)
router.route('/:id/like').get(isAuthenticated,likePost)
router.route('/:id/dislike').get(isAuthenticated,dislikePost)
router.route('/:id/comment').post(isAuthenticated,addComment)
router.route('/:id/comment/all').get(isAuthenticated,getCommentOfPosts)
router.route("/delete/:id").delete(isAuthenticated,deletePost)
router.route("/:id/bookmark").post(isAuthenticated,bookMarkPost)
router.route('/user/:id').get(isAuthenticated, getUserPostsById);

export default router;