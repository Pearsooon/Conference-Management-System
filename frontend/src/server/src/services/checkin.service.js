import CheckinModel from "../models/checkin.model.js";

async function validateToken(token) {
    const reg = await CheckinModel.findByToken(token);
    if (!reg) throw new Error("Invalid or expired QR code");
    return reg;
}

async function confirmCheckin(regId) {
    return await CheckinModel.markCheckin(regId);
}

async function listCheckins(confId) {
    return await CheckinModel.getCheckedInList(confId);
}

export default {
    validateToken,
    confirmCheckin,
    listCheckins
};
