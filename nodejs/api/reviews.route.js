import express from "express";
import ReviewsCtrl from ".reviews.controller.js";
const router = express.Router();

router.route("/movie/:id").get(ReviewsCtrl.apiGetReviews); // get reviews for a movie by id
router.route("/new").post(ReviewsCtrl.apiPostReview); // add a new review
router.route("/:id") // update a review by id
    .get(ReviewsCtrl.apiGetReviewById)
    .put(ReviewsCtrl.apiUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReview);

export default router;
