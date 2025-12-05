import PaperModel from "../models/paper.model.js";

const submissionService = {
  async getReviewDecisionsSummary(confId, statusFilter) {
    return await PaperModel.getReviewSummary(confId, statusFilter);
  },

  async finalizePaperDecision(paperId, newStatus) {
    await PaperModel.updateDecision(paperId, newStatus);

    return await PaperModel.getById(paperId);
  },
};

export default submissionService;
