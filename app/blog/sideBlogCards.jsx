import { LinkCard } from "../linkCard";
import Image from "next/image";
import { fetchPosts } from "./getPostsTitles";

export async function SideCards() {
  const posts = await fetchPosts();
  return (
    <div className="flex lg:flex-col flex-initial lg:justify-normal justify-center lg:max-w-[50vw] max-w-[95vw] mt-8 mx-auto mb-4 text-white">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 break-words">
        {posts.map((post) => (
          <div key={post.id}>
            <LinkCard
              title={`${post.title}`}
              date={post}
              description={""}
              href={`/blog/${post.slug}`}
            ></LinkCard>
          </div>
        ))}
      </div>
    </div>
  );
}
