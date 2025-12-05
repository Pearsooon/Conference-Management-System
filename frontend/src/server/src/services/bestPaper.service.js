import BestPaper from "../models/bestPaper.model.js";

function simulateAIDepthScore(reviews) {
    // số token càng lớn → depth score càng cao
    let total = 0;
    let metrics = [];

    reviews.forEach(cmt => {
        const length = cmt.length;
        const score = Math.min(100, Math.floor(length / 10 + Math.random() * 20));
        total += score;
        metrics.push({ comment: cmt, score });
    });

    const avg = metrics.length ? Math.round(total / metrics.length) : 0;
    return { avg, metrics };
}

async function runAIDepth(paperId) {
    const reviews = await BestPaper.getReviewsOfPaper(paperId);

    if (reviews.length === 0) throw new Error("No reviews for this paper");

    const { avg, metrics } = simulateAIDepthScore(reviews);

    const saved = await BestPaper.saveAIMetrics(paperId, avg, metrics);

    return {
        avgDepthScore: avg,
        metrics,
        saved
    };
}

async function getBestCandidates(confId) {
    return await BestPaper.getBestCandidates(confId);
}

async function finalizeAward(paperId) {
    return await BestPaper.setBestPaper(paperId);
}

export default {
    runAIDepth,
    getBestCandidates,
    finalizeAward
};
