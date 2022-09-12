import TagInstance from "./Tag";
/**
 * @class
 */
class TodoInstance implements Todo {
  id;
  content;
  isDone;
  category;
  tags;

  constructor(todo: Todo) {
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
  static create(todo: Todo) {
    return new TodoInstance(todo);
  }
}

export default TodoInstance;
