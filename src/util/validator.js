"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTodoId = exports.isTodo = void 0;
const Todo_1 = __importDefault(require("../models/Todo"));
const isTodo = (todo) => {
    return todo instanceof Todo_1.default && todo != undefined && todo != null;
};
exports.isTodo = isTodo;
const isTodoId = (todoId) => {
    return typeof todoId === "string" && todoId !== undefined;
};
exports.isTodoId = isTodoId;
