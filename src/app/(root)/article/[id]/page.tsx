import Markdown from "react-markdown";
import { DevToClient } from "../../../../api/clients/dev-to";
import { Button } from "../../../../ui/components/Forms/Button/Button";
import { Card } from "../../../../ui/components/Cards/Card/Card";
import { DateTime } from "luxon";
import Image from "next/image";
import styles from "./Article.module.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ArticleMarkdown } from "./components/Markdown/Markdown";
import { UserInfo } from "./components/UserInfo/UserInfo";
import { Extra } from "./components/Extra/Extra";

export const revalidate = 20;

export default async function ArticlePage({params: {id}}: {params: {id: string}}) {
  
  const article = (await DevToClient.get(`/articles/${id}`)).data

  return (
    <div className="flex justify-center gap-5">
      <div className={styles.article}>
       <Card className="max-w-[1000px] shadow-none bg-zinc-900 py-1">
        {article.cover_image && <Image
          className="max-w-[100%] w-[100%]"
          src={article.cover_image}
          width={0}
          height={0}
          sizes="100%"
          alt="Image"
        />}
        <ArticleMarkdown markdown={article.body_markdown} />
      </Card>
      </div>
      <div className="w-[350px]">
        <Card className="shadow-none bg-zinc-900 absolute w-[350px] h-fit flex flex-col gap-6">
          <UserInfo user={article.user} publishedAt={article.published_at} />
          <div>
            <strong className="text-lg">{article.title}</strong>
          </div>
          <div>
            {article.tags.map((tag: string) => (
              <strong className="text-yellow-500" key={tag}>
                {`#${tag} `}
              </strong>
            ))}
          </div>
          <p>{article.description}</p>
          <Extra
            reactions={article.positive_reactions_count}
            comments={article.comments_count}
          />
        </Card>
      </div>
    </div>
  )
}