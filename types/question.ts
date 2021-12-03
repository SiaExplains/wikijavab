import { Post } from "./post";

type Question = Post & {
  title: string;
};

export type { Question };
