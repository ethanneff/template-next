export type Comment = {
  id: number;
  postId: string;
  name: string;
  email: string;
  body: string;
};

export type Comments = Comment[];
