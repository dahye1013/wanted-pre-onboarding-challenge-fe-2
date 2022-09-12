declare type Todo = {
  id: string;
  content: string;
  isDone: boolean;
  category: string;
  tags: Tag[];
};

declare type Tag = {
  id: string;
  content: string;
};
