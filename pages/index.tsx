import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <Layout title="NextJS Sample" home={true}>
            <section className={utilStyles.headingMd}>
                <p>Web developer, coder, asspiring surfer.</p>
                <p>
                    (This is a sample website - you’ll be building a site like
                    this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>
                    .)
                </p>
                <Link href="/posts/first-post">First Post Page</Link>
            </section>
        </Layout>
    )
}
