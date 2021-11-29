import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import UtilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';

const name = 'Abdur Rahim';
export const siteTitle = 'Next.js sample website'
export default function Layout ({children, home}){
    return (
        <div className={styles.container}>
            <Head>
                <link rel='icon' href='/favicon.ico' />
                <meta
                    name='description'
                    content='Learn how to build a personal website using next.js' 
                />
                <meta
                    property='og:image'
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta 
                    name='og:title' 
                    content={siteTitle} 
                />
                <meta name='twitter:card' content='summary_large_image' />
        </Head>
        <header className={styles.header}>
            {home ? (
                <>
                    <Image
                        priority
                        src='/image/profile.jpg'
                        className={UtilStyles.borderCircle}
                        height='144'
                        width='144'
                        alt={name}
                    />
                    <h1 className={UtilStyles.heading2X1}>{name}</h1>
                </>
            ):(
                <>
                    <Link href='/'>
                        <a>
                            <Image priority src='/image/profile.jpg' height='108' width='108' className={UtilStyles.borderCircle} alt={name} /> 
                        </a>
                    </Link>
                    <h2 className={UtilStyles.headingLg}>
                        <Link href='/'>
                            <a className={UtilStyles.colorInherit}>{name}</a>
                        </Link>
                    </h2>
                </>
            )}
        </header>
        <main>{children}</main>
        {!home && (
            <div className={styles.backToHome}>
                <Link href='/'>
                    <a>← Back to home</a>
                </Link>
            </div>
        )}
        </div>
    )
}