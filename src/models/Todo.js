/**
 * @class
 */
class Todo {
  id;
  content = "";
  isDone = false;
  category = "";
  tags = [];
  constructor(todo) {}
  /**
   * @description Todo 객체 생성 함수
   * @param {Object} todo
   * @param {string} todo.content
   * @param {boolean} todo.isDone
   * @param {string} todo.category
   * @param {Tag[]} todo.tags
   * @returns {Todo}
   */
  static create(todo) {}
}

export default Todo;
