import fs from "fs";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export default async function handler(req, res) {
  const slug = req.query.slug;
  //GETのリクエストが来たら
  if (req.method === "GET") {
    const articles = fs.readFileSync("articles.json", "utf8"); //同期的に "articles.json" ファイルを読み込み、その内容を文字列として取得
    const article = JSON.parse(articles).articles.find((a) => a.slug === slug); //記事の内容のslugとリクエストのslugが一致したら返す
    if (!article) {
      res.status(404).end();
    }

    res.status(200).json(article);
  } else if (req.method === "PUT") {
    const { title, content } = req.body;
    const articles = JSON.parse(fs.readFileSync("articles.json", "utf8"));
    const article = articles.find((a) => a.slug === slug);
    if (!article) {
      res.status(404).end();
    }
    article.title = title;
    article.content = content;
    article.updatedAt = new Date();
    fs.writeFileSync("articles.json", JSON.stringify(articles));
    res.status(200).json(article);
  }
}
