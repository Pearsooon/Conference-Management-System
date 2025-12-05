// frontend/src/server/src/utils/catchAsync.js

// Hàm này bao quanh một hàm async (Controller) và bắt lỗi.
const catchAsync = (fn) => (req, res, next) => {
    // Gọi hàm Controller (fn) và bắt lỗi nếu promise bị reject
    Promise.resolve(fn(req, res, next)).catch(next);
};

export default catchAsync;