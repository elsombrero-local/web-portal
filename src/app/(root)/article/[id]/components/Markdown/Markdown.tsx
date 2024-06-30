import Markdown from "react-markdown"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs"

export const ArticleMarkdown = ({ markdown }: {markdown: string}) => {
  return (
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
      {markdown}
    </Markdown>
  )
}