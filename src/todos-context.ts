import TodoInstance from "./models/Todo";
import { isTodo, isTodoId } from "./util/validator";

interface TodosContext {
  items: Todo[];
  addTodo: (todo: Todo) => Todo;
  getAllTodos: () => Todo[];
  getTodo: (todoId: string) => Todo;
  updateTodo: (newTodo: Todo) => Todo;
  updateTag: (todoId: string, newTag: Tag) => Todo;
  toggleTodoDone: (todoId: string) => Todo;
  removeTodo: (todoId: string) => Todo[];
  removeAllTodos: () => Todo[];
  removeTag: (todoId: string, tagId: string) => Todo;
  removeAllTags: (todoId: string) => Todo;
}

/** @namespace */
const TodosContext: TodosContext = {
  items: [],
  /**
   * 할 일을 추가할 수 있다.
   * 내용 없이 추가할 수 없다.
   * @param {Todo} todo
   */
  addTodo(todo: Todo) {
    const newTodo = TodoInstance.create(todo);

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
  getTodo(todoId: string): Todo {
    const todo = this.items.find((todo) => todo.id == todoId) as Todo;

    if (!isTodo(todo)) {
      new Error("Todo id가 없습니다.");
    }

    return todo;
  },
  /**
   * ID를 제외한 모든 속성을 수정할 수 있다.
   * @param {Todo} newTodo
   * @returns {void}
   */
  updateTodo(newTodo: Todo) {
    if (!isTodo) new Error("Todo 객체 인자 타입이 아닙니다.");

    const todoIndex = this.items.findIndex((todo) => todo.id === newTodo.id);
    this.items[todoIndex] = { ...newTodo };
    return this.items[todoIndex];
  },
  /**
   * 특정 할 일의 특정 태그를 수정할 수 있다.
   * @param {string} todoId
   * @param {Tag} newTag
   */
  updateTag(todoId: string, newTag: Tag) {
    const todoIndex = this.items.findIndex((todo) => todo.id === todoId);
    const prevTodo = this.items[todoIndex] as Todo;
    const newTags = prevTodo.tags
      .filter((tag) => tag.id === newTag.id)
      .concat(newTag);
    this.items[todoIndex] = { ...prevTodo, tags: newTags };
    return this.items[todoIndex];
  },
  /**
   * Todo 완료 상태를 토글합니다.
   * @param {string} todoId
   */
  toggleTodoDone(todoId: string) {
    const todoIndex = this.items.findIndex((todo) => todo.id === todoId);
    const prevTodo = this.items[todoIndex];
    this.items[todoIndex] = { ...prevTodo, isDone: !prevTodo.isDone };
    return this.items[todoIndex];
  },
  /**
   * ID를 기반으로 특정 할 일을 삭제할 수 있다.
   * @param {string} todoId
   */
  removeTodo(todoId: string) {
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
  removeTag(todoId: string, tagId: string) {
    const todoIndex = this.items.findIndex((todo) => todo.id === todoId);
    const prevTodo = this.items[todoIndex];
    const prevTags = this.items[todoIndex].tags.filter(
      (tag) => tag.id !== tagId
    );
    this.items[todoIndex] = { ...prevTodo, tags: prevTags };
    return this.items[todoIndex];
  },
  /**
   * 특정 할 일의 모든 태그를 제거할 수 있다.
   * @param todoId
   */
  removeAllTags(todoId: string) {
    const todoIndex = this.items.findIndex((todo) => todo.id === todoId);
    const prevTodo = this.items[todoIndex];
    this.items[todoIndex] = { ...prevTodo, tags: [] };
    return this.items[todoIndex];
  },
};
