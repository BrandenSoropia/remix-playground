/**
 * A place to store all HTTP requests.
 */

type Post = {
  id: string;
  title: string;
  body: string;
  userId: number;
};

/**
 * Just realized TS checks only on compile not run time!
 *
 * TODO: If I want to go super ham and type check responses in runtime,
 * consider implementing "Minimal-implementation-for-basic-types"
 * in https://medium.com/@wujido20/runtime-types-in-typescript-5f74fc9dc6c4
 */
export const getAllPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts: Post[] = await response.json();

  return posts;
};

export const getPostById = async (postId: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  const post: Post = await response.json();

  return post;
};
