"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class
 */
class TodoInstance {
    constructor(todo) {
        this.id = todo.id;
        this.content = todo.content;
        this.category = todo.category;
        this.isDone = false;
        this.tags = todo.tags;
    }
    /**
     * @description Todo 객체 생성 함수
     * @param {Object} todo
     * @param {string} todo.content
     * @param {boolean} todo.isDone
     * @param {string} todo.category
     * @param {Tag[]} todo.tags
     * @returns {Todo}
     */
    static create(todo) {
        return new TodoInstance(todo);
    }
}
exports.default = TodoInstance;
