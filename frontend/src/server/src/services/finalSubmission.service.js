import PaperVersion from "../models/paperVersion.model.js";

async function createVersion(paperId, filePath, uploadBy) {
    // Lấy version_number tiếp theo
    const versionNumber = await PaperVersion.getNextVersionNumber(paperId);

    const q = `
        INSERT INTO paper_versions (paper_id, file_path, version_number, upload_by)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
    `;
    
    const r = await PaperVersion.db.query(q, [
        paperId,
        filePath,
        versionNumber,
        uploadBy
    ]);

    return r.rows[0];
}

async function confirmVersion(versionId) {
    // Lấy thông tin version
    const version = await PaperVersion.getVersionById(versionId);
    if (!version) throw new Error("Version not found");

    // Bỏ trạng thái final của các version khác thuộc bài này
    await PaperVersion.unsetOtherFinals(version.paper_id);

    // Đánh dấu version này là final
    return await PaperVersion.markAsFinal(versionId);
}

async function getVersionById(id) {
    return await PaperVersion.getVersionById(id);
}

export default {
    createVersion,
    confirmVersion,
    getVersionById,
};
