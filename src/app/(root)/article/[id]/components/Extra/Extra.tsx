
export const Extra = ({reactions, comments}: {reactions: number, comments: number}) => {
  return (
    <div className="flex gap-4">
      <p className="flex gap-2 items-center">
        <i className="lni lni-heart-fill"></i>
        {reactions}
      </p>
      <p className="flex gap-2 items-center">
        <i className="lni lni-comments-alt-2"></i>
        {comments}
      </p>
    </div>
  )
}