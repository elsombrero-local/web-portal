'use client';
import { ArticleItem } from "@/type/dev-to"
import { DateTime } from "luxon"
import Image from "next/image"

export const ArticleCard = ({article}: {article: ArticleItem}) => {
  return (
    <div
      onClick={() => location.assign(`/article/${article.id}`)}
      className="flex flex-col gap-4 rounded-xl p-3 transition-all duration-200 hover:bg-zinc-800 cursor-pointer active:bg-zinc-900"
    >
      <div className="flex flex-col gap-2">
        <Image
          className="w-full h-[300px] rounded-xl object-cover object-center"
          src={article.cover_image || "/default.jpg"}
          width={0}
          height={0}
          sizes="100%"
          alt="553"
        />
        <div className="flex gap-2 items-center text-zinc-400">
          <small>{DateTime.fromISO(article.published_at).toFormat('dd MMM yyyy')}</small>
          <strong>-</strong>
          <small>{article.reading_time_minutes} mins read</small>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-xl">{article.title}</p>
        <small className="text-zinc-400">{article.description}</small>
      </div>
      <div className="flex items-center gap-2">
        <Image
          className="w-[30px] h-[30px] rounded-full object-cover object-center border-zinc-50 border"
          src={article.user.profile_image || "/default.jpg"}
          width={0}
          height={0}
          sizes="100%"
          alt="553"
        />
        <strong>{article.user.name}</strong>
      </div>
    </div>
  )
}