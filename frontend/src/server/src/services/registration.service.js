import Registration from "../models/registration.model.js";
import crypto from "crypto";

async function createRegistration(data) {
    return await Registration.create(data);
}

async function approveRegistration(regId) {
    const updated = await Registration.approve(regId);
    if (!updated) throw new Error("Registration not found");
    return updated;
}

async function rejectRegistration(regId) {
    const updated = await Registration.reject(regId);
    if (!updated) throw new Error("Registration not found");
    return updated;
}

async function generateQR(regId) {
    const token = crypto.randomUUID();   // QR token
    return await Registration.generateQR(regId, token);
}

async function listRegistrations(confId) {
    return await Registration.getAllByConference(confId);
}

export default {
    createRegistration,
    approveRegistration,
    rejectRegistration,
    generateQR,
    listRegistrations
};
