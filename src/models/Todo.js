/**
 * @class
 */
class Todo {
  id;
  content = "";
  isDone = false;
  category = "";
  tags = [];
  constructor(todo) {
    this.id = Date.now();
    this.content = todo.content;
    this.category = todo.category;
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
    return new Todo(todo);
  }
}

export default Todo;
