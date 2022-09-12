"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Todo_1 = __importDefault(require("./models/Todo"));
const validator_1 = require("./util/validator");
/** @namespace */
const TodosContext = {
    items: [],
    /**
     * 할 일을 추가할 수 있다.
     * 내용 없이 추가할 수 없다.
     * @param {Todo} todo
     */
    addTodo(todo) {
        const newTodo = Todo_1.default.create(todo);
        if (!todo.content) {
            throw new Error("할일에 대한 내용을 입력해주세요.");
        }
        this.items = [...this.items, newTodo];
        return newTodo;
    },
    /**
     * 모든 할 일을 조회할 수 있다.
     * @returns {Todo[]}
     */
    getAllTodos() {
        return this.items;
    },
    /**
     * ID를 기반으로 특정 할 일을 조회할 수 있다.
     * @returns {Todo}
     */
    getTodo(todoId) {
        const todo = this.items.find((todo) => todo.id == todoId);
        if (!(0, validator_1.isTodo)(todo)) {
            new Error("Todo id가 없습니다.");
        }
        return todo;
    },
    /**
     * ID를 제외한 모든 속성을 수정할 수 있다.
     * @param {Todo} newTodo
     * @returns {void}
     */
    updateTodo(newTodo) {
        if (!validator_1.isTodo)
            new Error("Todo 객체 인자 타입이 아닙니다.");
        const todoIndex = this.items.findIndex((todo) => todo.id === newTodo.id);
        this.items[todoIndex] = Object.assign({}, newTodo);
        return this.items[todoIndex];
    },
    /**
     * 특정 할 일의 특정 태그를 수정할 수 있다.
     * @param {string} todoId
     * @param {Tag} newTag
     */
    updateTag(todoId, newTag) {
        const todoIndex = this.items.findIndex((todo) => todo.id === todoId);
        const prevTodo = this.items[todoIndex];
        const newTags = prevTodo.tags
            .filter((tag) => tag.id === newTag.id)
            .concat(newTag);
        this.items[todoIndex] = Object.assign(Object.assign({}, prevTodo), { tags: newTags });
        return this.items[todoIndex];
    },
    /**
     * Todo 완료 상태를 토글합니다.
     * @param {string} todoId
     */
    toggleTodoDone(todoId) {
        const todoIndex = this.items.findIndex((todo) => todo.id === todoId);
        const prevTodo = this.items[todoIndex];
        this.items[todoIndex] = Object.assign(Object.assign({}, prevTodo), { isDone: !prevTodo.isDone });
        return this.items[todoIndex];
    },
    /**
     * ID를 기반으로 특정 할 일을 삭제할 수 있다.
     * @param {string} todoId
     */
    removeTodo(todoId) {
        this.items = this.items.filter((todo) => todo.id !== todoId);
        return this.items;
    },
    /**
     * 모든 할 일을 제거할 수 있다.
     */
    removeAllTodos() {
        this.items = [];
        return this.items;
    },
    /**
     * 특정 할 일의 특정 태그를 삭제할 수 있다.
     * @param {string} todoId
     * @param {string} tagId
     */
    removeTag(todoId, tagId) {
        const todoIndex = this.items.findIndex((todo) => todo.id === todoId);
        const prevTodo = this.items[todoIndex];
        const prevTags = this.items[todoIndex].tags.filter((tag) => tag.id !== tagId);
        this.items[todoIndex] = Object.assign(Object.assign({}, prevTodo), { tags: prevTags });
        return this.items[todoIndex];
    },
    /**
     * 특정 할 일의 모든 태그를 제거할 수 있다.
     * @param todoId
     */
    removeAllTags(todoId) {
        const todoIndex = this.items.findIndex((todo) => todo.id === todoId);
        const prevTodo = this.items[todoIndex];
        this.items[todoIndex] = Object.assign(Object.assign({}, prevTodo), { tags: [] });
        return this.items[todoIndex];
    },
};
