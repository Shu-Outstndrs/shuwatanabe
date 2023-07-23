export async function fetchPosts(slug) {
  const res = await fetch(`http://localhost:3000/api/articles/`, {
    cache: "no-store",
  });
  const posts = await res.json();
  return posts.articles;
}
