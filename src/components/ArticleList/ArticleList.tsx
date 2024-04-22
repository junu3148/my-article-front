import { Article } from "@/types";
import ArticleItem from "../Common/Articleitem/Articleitem";

function ArticleList() {
  const articles: Article[] = [];
  return (
    <div className="px-4">
      {articles.map((article, index) => (
        <ArticleItem key={index} article={article} />
      ))}
    </div>
  );
}

export default ArticleList;
