/**
 * @class
 */
class TagInstance implements Tag {
  id;
  content;
  constructor(tag: Tag) {
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
  static create(tag: Tag) {
    return new TagInstance(tag);
  }
}

export default TagInstance;
