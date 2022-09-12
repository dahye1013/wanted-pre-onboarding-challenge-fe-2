import TodoInstance from "../models/Todo";
import TagInstance from "../models/Tag";

export const isTodo = (todo: any): todo is Todo => {
  return todo instanceof TodoInstance && todo != undefined && todo != null;
};

export const isTodoId = (todoId: any): todoId is "string" => {
  return typeof todoId === "string" && todoId !== undefined;
};
