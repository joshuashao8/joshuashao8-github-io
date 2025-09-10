import ReviewsDAO from "../dao/reviewsDAO.js";

export default class ReviewsController {
    static async apiPostReview(req, res, next) {
        try {
            const movieId = req.body.movie_id;
            const review = req.body.review;
            const user = req.body.user;

            const reviewResponse = await ReviewsDAO.addReview(
                movieId,
                user,
                review
            );
            res.json({ status: "success"});

        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}

