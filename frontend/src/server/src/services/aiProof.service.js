import AICheck from "../models/aiProof.model.js";

function simulateAIFormatCheck() {
    const issues = [];

    if (Math.random() > 0.7) issues.push("Font size incorrect");
    if (Math.random() > 0.8) issues.push("Margins not IEEE standard");
    if (Math.random() > 0.9) issues.push("Citation style invalid");

    return {
        ok: issues.length === 0,
        issues
    };
}

function simulatePlagiarismCheck() {
    const similarity = Math.floor(Math.random() * 30); // 0–30%

    return {
        ok: similarity < 20,
        similarity
    };
}

async function runAnalysis(versionId) {
    // 1. Run simulated AI checks
    const formatResult = simulateAIFormatCheck();
    const plagiarismResult = simulatePlagiarismCheck();

    const passed = formatResult.ok && plagiarismResult.ok;

    // 2. Create JSON report
    const report = {
        format: formatResult,
        plagiarism: plagiarismResult,
        finalDecision: passed ? "PASSED" : "FAILED"
    };

    // 3. Save log into DB
    const log = await AICheck.saveLog(versionId, passed, report);

    // 4. Update version flags
    const updatedVersion = await AICheck.updateVersionFlags(
        versionId,
        formatResult.ok,
        plagiarismResult.ok
    );

    return {
        passed,
        log,
        updatedVersion
    };
}

async function getLogs(versionId) {
    return await AICheck.getLogsByVersion(versionId);
}

export default {
    runAnalysis,
    getLogs
};
