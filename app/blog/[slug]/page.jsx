import { fetchPosts } from "../getPostsTitles";

const getArticle = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/articles/${slug}`);

  const data = await res.json();
  console.log(data);
  return data;
};

export default async function Article({ params }) {
  const posts = await getArticle(params.slug);
  return (
    <div className="text-white">
      <p>記事のTitle: {posts.title}</p>
      <p>{posts.content}</p>
    </div>
  );
}
