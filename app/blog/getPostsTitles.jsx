export async function fetchPosts(slug) {
  const res = await fetch(`/api/articles/`, {
    cache: "no-store",
  });
  const posts = await res.json();
  return posts.articles;
}
