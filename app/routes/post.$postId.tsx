import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getPostById } from "~/common/data";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.postId, "Post Id is required.");

  const post = await getPostById(params.postId);

  return json({ post });
};

export default function Post() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h2>{data.post.title}</h2>
      <p>{data.post.body}</p>
    </div>
  );
}
