"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class
 */
class TagInstance {
    constructor(tag) {
        this.id = tag.id;
        this.content = tag.content;
    }
    /**
     * @description Tag 객체 생성 함수
     * @param {Object} tag
     * @param {string} todo.id
     * @param {string} todo.content
     * @returns {Tag}
     */
    static create(tag) {
        return new TagInstance(tag);
    }
}
exports.default = TagInstance;
