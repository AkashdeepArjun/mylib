"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takelog = void 0;
const takelog = (msg) => {
    let d = new Date();
    const message = `MESSAGE RECIEVED AT ${d}\n from `;
    return message;
};
exports.takelog = takelog;
