import CMS from "../models/cms.model.js";

async function createContent(data) {
    return await CMS.create(data);
}

async function publishContent(id) {
    const item = await CMS.publish(id);
    if (!item) throw new Error("Content not found");
    return item;
}

async function listContents(confId) {
    return await CMS.getContents(confId);
}

export default {
    createContent,
    publishContent,
    listContents
};
