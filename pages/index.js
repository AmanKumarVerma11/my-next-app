import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Aman. 
          Currently pursuing <strong>BTech in Information technology from Inderprastha Engineering College, Ghaziabad</strong>.
            Technology and how it works have always intrigued me.
            I am keen on grabbing opportunities to learn new things and gain experience from my work.
            My current skills are <strong>front-end web development(HTML, CSS, Javascript), C language, Python</strong>, and I am learning more.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.listItem}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title}) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br/>
                <small className={utilStyles.lightText}>
                  <Date dateString={date}/>
                </small>
              </li>
            ))}
          </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}