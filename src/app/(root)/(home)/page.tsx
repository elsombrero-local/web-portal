import { DevToClient } from "@/api/clients/dev-to";
import { ArticleItem } from "@/type/dev-to";
import { ArticleCard } from "./components/Card/Card";
import { ArticleFilters } from "./components/Filters/Filters";

export const revalidate = 10;

export default async function Home({searchParams: {q}}: {searchParams: {q: string}}) {
  const { data } = await DevToClient.get<ArticleItem[]>(`/articles?tag=${q || ''}`);
  
  return (
    <div className="flex flex-col gap-5">
      <ArticleFilters />
      <div className="w-full grid xl:grid-cols-3 gap-7 md:grid-cols-2 sm:grid-cols-1">
        {data.map((article) => <ArticleCard key={article.id} article={article} />)}
      </div>
    </div>
  );
}
