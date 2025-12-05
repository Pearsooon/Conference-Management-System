import cmsService from "../services/cms.service.js";

export async function create(req, res) {
    try {
        const content = await cmsService.createContent(req.body);
        res.status(201).json({ success: true, content });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
}

export async function publish(req, res) {
    try {
        const item = await cmsService.publishContent(req.params.contentId);
        res.json({ success: true, content: item });
    } catch (err) {
        res.status(404).json({ success: false, error: err.message });
    }
}

export async function list(req, res) {
    try {
        const items = await cmsService.listContents(req.params.confId);
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
