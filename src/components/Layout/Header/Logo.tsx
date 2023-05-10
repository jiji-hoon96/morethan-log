import React from "react"
import Link from "next/link"
import { CONFIG } from "site.config"

type Props = {}

const Logo: React.FC<Props> = () => {
  return (
    <Link href="/">
      <div className=" flex">
        <div className="mr-2">🐷</div>
        <a aria-label={CONFIG.blog.title}>
          <div className="flex items-center">
            <div className="ml-2 text-black dark:text-white header-name">
              {CONFIG.blog.title}
            </div>
          </div>
        </a>
      </div>
    </Link>
  )
}

export default Logo
