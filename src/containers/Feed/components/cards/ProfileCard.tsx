import { CONFIG } from "site.config"
import Image from "next/image"
import React from "react"

type Props = {
  className?: string
}

const splitTextByPeriod = (text: string): string => {
  return text
    .split(".")
    .map((item, index, array) => {
      if (index !== array.length - 1) {
        return item.trim() + ".\n"
      } else {
        return item.trim()
      }
    })
    .join("")
}

const ProfileCard: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="p-1 mb-3 dark:text-white">💻 Profile</div>
      <div className="rounded-2xl bg-white dark:bg-zinc-700 w-full md:p-4 lg:p-4 mb-9">
        <div className=" m-auto relative w-[94%] after:content-[''] after:block after:pb-[100%]">
          <Image src={CONFIG.profile.image} layout="fill" alt="" />
        </div>
        <div className="bg-white p-2 flex flex-col items-center dark:bg-zinc-700 dark:text-white">
          <div className=" text-xl italic font-bold">{CONFIG.profile.name}</div>
          <div className="text-sm mb-4 text-gray-500 dark:text-gray-400">
            {CONFIG.profile.role}
          </div>
          <div className="text-sm mb-2">
            {splitTextByPeriod(CONFIG.profile.bio)
              .split("\n")
              .map((item, i) => {
                return <div key={i}>{item}</div>
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
