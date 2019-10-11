const router = require("express").Router();
const postController = require("../../controller/postController");
const multer = require("multer");
const multerOptions = {
  storage: multer.memoryStorage(),
  limits: {
    // storing images files up to 1mb
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: (req, file, next) => {
    if (file.mimetype.startsWith("image/")) {
      next(null, true);
    } else {
      next(null, false);
    }
  }
};

// Technique #1
router.get("/fetchPosts/:period?", postController.getPosts);
router.get("/fetchPost/:postId", postController.getPost);
router.post(
  "/create",
  multer(multerOptions).single("image"),
  postController.submitPost
);

// Technique #2
// router.route('/getPosts/:period?').get(postController.getPosts);
// router.route('/getPost/:postId').get(postController.getPost);
// router.route('/submitPost').post(postController.submitPost);

module.exports = router;
