import { MetaFunction, json } from "@remix-run/node";
import { NavLink, useLoaderData } from "@remix-run/react";
import { getAllPosts } from "~/common/data";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const posts = await getAllPosts();

  return json({ posts });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>JSON Placeholder: List of Posts</h1>
      <ul>
        {data.posts.map((post) => {
          return (
            <li key={post.id}>
              <NavLink to={`post/${post.id}`}>{post.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
