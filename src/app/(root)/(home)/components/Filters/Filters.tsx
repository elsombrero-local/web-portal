import { Button } from "@/ui/components/Forms/Button/Button"
import { Input } from "../../../../../ui/components/Forms/Inputs/Input/Input"

export const ArticleFilters = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3">
        <Button variant="ghost" className=" bg-zinc-700" theme="light" size="sm">Articles</Button>
        <Button variant="link" theme="light" size="sm">Videos</Button>
        <Button variant="link" theme="light" size="sm">Blogs</Button>
        <Button variant="link" theme="light" size="sm">DevOps</Button>
        <Button variant="link" theme="light" size="sm">News</Button>
        <Button variant="link" theme="light" size="sm">AI</Button>
      </div>
      <div className="flex gap-2 items-center">
        <form>
          <Input
            name="q"
            className="bg-zinc-900"
            left={<i className="lni lni-search"></i>}
            inputSize="xs"
            placeholder="Search articles"
          />
        </form>
      </div>
    </div>
  )
}