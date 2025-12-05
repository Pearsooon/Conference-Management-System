import EmailModel from "../models/email.model.js";

function formatDecisionEmail(authorName, paperTitle, decision) {
    return `
Dear ${authorName},

Your paper "${paperTitle}" has received the decision:

👉 **${decision}**

Please log in to the system for more details.

Best regards,
Conference Secretariat
    `;
}

function formatThankYouEmail(fullName) {
    return `
Dear ${fullName},

Thank you for attending our conference!
We appreciate your contribution and participation.

Warm regards,
Conference Secretariat
    `;
}

async function sendDecisionEmail(data) {
    const content = formatDecisionEmail(
        data.authorName,
        data.paperTitle,
        data.decision
    );

    console.log("📧 Sending DECISION email to:", data.emailTo);
    console.log("Content:", content);

    return await EmailModel.saveLog({
        conferenceId: data.conferenceId,
        emailTo: data.emailTo,
        subject: `Decision Notification: ${data.decision}`,
        content,
        relatedPaperId: data.paperId,
    });
}

async function sendThankYouEmail(data) {
    const content = formatThankYouEmail(data.fullName);

    console.log("📧 Sending THANK-YOU email to:", data.emailTo);
    console.log("Content:", content);

    return await EmailModel.saveLog({
        conferenceId: data.conferenceId,
        emailTo: data.emailTo,
        subject: "Thank you for attending!",
        content,
        relatedRegId: data.regId,
    });
}

async function getLogs(confId) {
    return await EmailModel.getLogs(confId);
}

export default {
    sendDecisionEmail,
    sendThankYouEmail,
    getLogs
};
