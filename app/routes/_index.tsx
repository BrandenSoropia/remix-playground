import { MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getAllBlogPosts } from "~/common/data";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const blogPosts = await getAllBlogPosts();

  return json({ blogPosts });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        {data.blogPosts.map((blogPost) => {
          return (
            <li key={blogPost.id}>
              <a>{blogPost.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
