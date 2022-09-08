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
  addTodo(todo) {
    if (!todo.content) {
      throw new Error("할일에 대한 내용을 입력해주세요.");
    }
    this.items = [...this.items, todo];
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
    return this.items.find((todo) => todo.id === todoId);
  },
  /**
   * ID를 제외한 모든 속성을 수정할 수 있다.
   * @param {Todo} newTodo
   * @returns {void}
   */
  updateTodo(newTodo) {
    if (!newTodo instanceof Todo)
      return new Error("Todo 객체 인자 타입이 아닙니다.");
    const todoIndex = this.items.findIndex((todo) => todo.id === newTodo.id);
    this.items[todoIndex] = { ...newTodo };
  },
  /**
   * 특정 할 일의 특정 태그를 수정할 수 있다.
   * @param {string} todoId
   * @param {Tag} newTag
   */
  updateTag(todoId, newTag) {
    const todoIndex = this.items.findIndex((todo) => todo.id === todoId);
    const prevTodo = this.items[index];
    const tagIndex = prevTodo.findIndex((tag) => tag.id === newTag.id);
    const newTags = (prevTodo.tag[tagIndex] = newTag);
    this.items[todoIndex] = { ...prevTodo, tags: newTags };
  },
  /**
   * Todo 완료 상태를 토글합니다.
   * @param {string} todoId
   */
  toggleTodoDone(todoId) {
    const todoIndex = this.items.findIndex((todo) => todo.id === todoId);
    const prevTodo = this.items[todoIndex];
    this.items[todoIndex] = { ...prevTodo, isDone: !prevTodo.isDone };
  },
  /**
   * ID를 기반으로 특정 할 일을 삭제할 수 있다.
   * @param {string} todoId
   */
  removeTodo(todoId) {
    this.items = this.items.filter((todo) => todo.id !== todoId);
  },
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
  removeTag(todoId, tagId) {
    const todoIndex = this.items.findIndex((todo) => todo.id === todoId);
    const prevTodo = this.items[todoIndex];
    const prevTags = this.items[todoIndex].tags.filter(
      (tag) => tag.id !== tagId
    );
    this.items[todoIndex] = { ...prevTodo, tags: prevTags };
  },
  /**
   * 특정 할 일의 모든 태그를 제거할 수 있다.
   * @param todoId
   */
  removeAllTags(todoId) {
    const todoIndex = this.items.findIndex((todo) => todo.id === todoId);
    const prevTodo = this.items[todoIndex];
    this.items[todoIndex] = { ...prevTodo, tags: [] };
  },
};
