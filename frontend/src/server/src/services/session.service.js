import SessionModel from "../models/session.model.js";
import db from "../config/database.js";

function simulateAIClustering(papers) {
    const groups = {
        "Machine Learning": [],
        "Computer Vision": [],
        "Natural Language Processing": [],
        "Data Mining": []
    };

    papers.forEach(p => {
        const title = p.title.toLowerCase();

        if (title.includes("vision") || title.includes("image"))
            groups["Computer Vision"].push(p);
        else if (title.includes("nlp") || title.includes("language"))
            groups["Natural Language Processing"].push(p);
        else if (title.includes("mining"))
            groups["Data Mining"].push(p);
        else
            groups["Machine Learning"].push(p);
    });

    return groups;
}

async function runAIPropose(confId) {
    // Lấy danh sách bài báo
    const papersQ = `
        SELECT paper_id, title
        FROM papers 
        WHERE conference_id = $1;
    `;
    const papers = (await db.query(papersQ, [confId])).rows;

    if (papers.length == 0) throw new Error("No papers found for this conference");

    // AI phân nhóm
    const clusters = simulateAIClustering(papers);

    let sessionResults = [];

    for (const [sessionName, papersInGroup] of Object.entries(clusters)) {

        if (papersInGroup.length === 0) continue;

        // tạo session
        const session = await SessionModel.createSession(
            confId,
            sessionName,
            `Auto-generated session for ${sessionName}`,
            true
        );

        // gán papers vào session
        for (let i = 0; i < papersInGroup.length; i++) {
            await SessionModel.attachPaper(session.session_id, papersInGroup[i].paper_id, i+1);
        }

        sessionResults.push({
            session,
            papers: papersInGroup
        });
    }

    return sessionResults;
}

async function listSessions(confId) {
    return await SessionModel.getSessions(confId);
}

async function confirmSession(sessionId, body) {
    const { name, description } = body;
    return await SessionModel.confirmSession(sessionId, name, description);
}

export default {
    runAIPropose,
    listSessions,
    confirmSession
};
