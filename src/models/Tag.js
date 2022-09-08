/**
 * @class
 */
class Tag {
  id;
  content;
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
  static create({ id, content }) {
    return new Tag({ id, content });
  }
}

export default Tag;
