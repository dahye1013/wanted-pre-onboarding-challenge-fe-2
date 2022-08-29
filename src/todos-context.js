import Todo from "./models/Todo.js";
import Tag from "./models/Tag.js";

/** @namespace */
const TodosContext = {
  items: [],
  /**
   * 할 일을 추가할 수 있다.
   * 내용 없이 추가할 수 없다.
   * @param {Todo} todo
   */
  addTodo(todo) {},
  /**
   * 모든 할 일을 조회할 수 있다.
   * @returns {Todo[]}
   */
  getAllTodos() {},
  /**
   * ID를 기반으로 특정 할 일을 조회할 수 있다.
   * @returns {Todo}
   */
  getTodo(todoId) {},
  /**
   * ID를 제외한 모든 속성을 수정할 수 있다.
   * @param {Todo} newTodo
   * @returns {void}
   */
  updateTodo(newTodo) {},
  /**
   * 특정 할 일의 특정 태그를 수정할 수 있다.
   * @param {string} todoId
   * @param {Tag} newTag
   */
  updateTag(todoId, newTag) {},
  /**
   * Todo 완료 상태를 토글합니다.
   * @param {string} todoId
   */
  toggleTodoDone(todoId) {},
  /**
   * ID를 기반으로 특정 할 일을 삭제할 수 있다.
   * @param {string} todoId
   */
  removeTodo(todoId) {},
  /**
   * 모든 할 일을 제거할 수 있다.
   */
  removeAllTodos() {
    this.items = [];
  },
  /**
   * 특정 할 일의 특정 태그를 삭제할 수 있다.
   * @param {string} todoId
   * @param {string} tagId
   */
  removeTag(todoId, tagId) {},
  /**
   * 특정 할 일의 모든 태그를 제거할 수 있다.
   * @param todoId
   */
  removeAllTags(todoId) {},
};
