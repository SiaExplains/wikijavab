import { Post } from "./post";

type Answer = Post & {
  approved: boolean;
};

export type { Answer };
