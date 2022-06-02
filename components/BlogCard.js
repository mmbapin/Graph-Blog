import React from 'react'
import Link from "next/link"
import styles from "../styles/BlogCard.module.css"

export default function BlogCard({title, author, coverPhoto, datePublished, slug}) {
  return (
    <div className={styles.card}>
      <Link href={"/posts/" + slug}>
        <div className={styles.imgContainer}>
          <img src={coverPhoto.url} alt="" />
          {title}
        </div>
      </Link>
    </div>
  )
}
