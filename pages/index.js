import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import { getStoredPostsData } from "../lib/posts"
import utiliStyles from '../styles/utils.module.css'

export async function getStaticProps(){
    const allPostsData = getStoredPostsData()
    return {
        props: {
            allPostsData
        }
    }
}


export default function Home({allPostsData}) {
  return (
    <Layout home>
    <Head>
      <title>{siteTitle}</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <section className={utiliStyles.headingMd}>
      <p>I am a MERN Stack developer. I am learning everyday.</p>
      <p>
        This is an personal website. I will share with you what I am learning. Stay with me.
        <a href='https://unsplash.com/@a753159/' target="_blank" rel='noreferrer'>{" "}Unsplash Account</a>
      </p>
    </section>
    <section className={`${utiliStyles.headingMd} ${utiliStyles.padding1px}`}>
        <h2 className={utiliStyles.headingLg}>Blog</h2>
        <ul className={utiliStyles.list}>
            {allPostsData.map(({id,date,title}) => (
                <li className={utiliStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                    </Link>
                    <br />
                    <small className={utiliStyles.lighttext}>
                      <Date dateString={date} />
                    </small>
                </li>
            ))}
        </ul>
    </section>
    </Layout>
  )
}
