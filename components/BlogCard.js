import React from 'react'
import Link from "next/link"
import styles from "../styles/BlogCard.module.css"

export default function BlogCard({title, author, coverPhoto, datePublished, slug}) {
  return (
    <div className={styles.card}>
      <Link href={"/posts/" + slug}>
        <div className={styles.imgContainer}>
          <img className={styles.coverImg} src={coverPhoto.url} alt="cover Image" />
        </div>
      </Link>
      <div className={styles.textCont}>
        <h2>{title}</h2>
        <div className={styles.details}>
          <div className={styles.author}>
            <img className={styles.authorImg} src={author.avater.url} alt="author"/>
            <h3>{author.name}</h3>
          </div>
          <div className={styles.date}>
            <h3>{datePublished}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
