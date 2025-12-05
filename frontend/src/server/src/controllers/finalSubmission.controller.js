import finalSubmissionService from "../services/finalSubmission.service.js";
import catchAsync from "../utils/catchAsync.js";

const controller = {
  uploadVersion: catchAsync(async (req, res) => {
    const { paperId } = req.params;
    const filePath = req.file.path;

    const version = await finalSubmissionService.createVersion(paperId, filePath);

    res.status(200).json({
      success: true,
      message: "Uploaded new version",
      version,
    });
  }),

  confirmFinalVersion: catchAsync(async (req, res) => {
    const { versionId } = req.params;

    await finalSubmissionService.confirmVersion(versionId);

    res.status(200).json({
      success: true,
      message: "Final version confirmed",
    });
  }),
};

export default controller;
