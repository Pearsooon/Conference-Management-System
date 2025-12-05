import catchAsync from "../utils/catchAsync.js";
import submissionService from "../services/submission.service.js";

const submissionController = {
  getReviewDecisionsSummary: catchAsync(async (req, res) => {
    const { confId } = req.params;
    const { statusFilter } = req.query;

    const summary = await submissionService.getReviewDecisionsSummary(confId, statusFilter);

    res.status(200).json({
      success: true,
      conferenceId: confId,
      count: summary.length,
      data: summary,
    });
  }),

  updateFinalDecision: catchAsync(async (req, res) => {
    const { paperId } = req.params;
    const { newStatus } = req.body;

    const validStatuses = ["ACCEPTED", "REJECTED", "MINOR_REVISION", "MAJOR_REVISION"];
    if (!validStatuses.includes(newStatus)) {
      return res.status(400).json({ message: "Invalid newStatus" });
    }

    const updated = await submissionService.finalizePaperDecision(paperId, newStatus);

    res.status(200).json({
      success: true,
      message: "Decision updated",
      paperId,
      newStatus,
      updated,
    });
  }),
};

export default submissionController;
