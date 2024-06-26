import Markdown from "react-markdown";
import { DevToClient } from "../../../../api/clients/dev-to";
import { Button } from "../../../../ui/components/Forms/Button/Button";
import { Card } from "../../../../ui/components/Cards/Card/Card";
import { DateTime } from "luxon";
import Image from "next/image";
import styles from "./Article.module.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
        <Markdown
          className="max-w-full prose-pre:w-full"
          components={{
            code(props) {
              const {children, className, node, ...rest} = props
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <SyntaxHighlighter
                  PreTag="div"
                  language={match[1]}
                  style={monokai}
                  customStyle={{background: 'transparent'}}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              )
            }
          }}>
          {article.body_markdown}
        </Markdown>
      </Card>
      </div>
      <div className="w-[350px]">
        <Card className="shadow-none bg-zinc-900 absolute w-[350px] h-fit flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <Image
                className="rounded-full"
                alt="profile"
                src={article.user.profile_image}
                width={50}
                height={50}
              />
              <div className="flex flex-col gap-1">
                <strong>{article.user.name}</strong>
                <div className="flex gap-1 opacity-60 items-center">
                  {article.user.github_username && <small className="flex gap-1 items-center">
                    <i className="lni lni-github-original"></i>
                    {`${article.user.github_username} - `}
                  </small>}
                  <small>{DateTime.fromISO(article.published_at).toFormat('MMM dd')}</small>
                </div>
              </div>
            </div>
            <Button size="md" theme="light" variant="ghost">
              Follow
            </Button>
          </div>
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
          <div className="flex gap-4">
            <p className="flex gap-2 items-center">
              <i className="lni lni-heart-fill"></i>
              {article.positive_reactions_count}
            </p>
            <p className="flex gap-2 items-center">
              <i className="lni lni-comments-alt-2"></i>
              {article.comments_count}
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}