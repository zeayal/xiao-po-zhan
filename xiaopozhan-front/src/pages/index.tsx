import { Footer, HeroBanner, Navbar } from '@/components'
import PostList, { PostCardProps } from '@/components/PostList'
import { DEFAULE_TITLE } from '@/constants'
import { getPostList } from '@/utils'
import Head from 'next/head'
import Image from 'next/image'

type HomeProps = {
  posts: PostCardProps[]
}

export default function Home(props: HomeProps) {

  return (
    <>
      <Head>
        <title>{DEFAULE_TITLE}</title>
        <meta name="description" content={DEFAULE_TITLE} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full px-4'>
        <Navbar />
        <HeroBanner/>
        <PostList posts={props.posts}/>
        <Footer />
      </main>
    </>
  )
}


export async function getStaticProps() {
  const posts = await getPostList()
  return {
    props: {
      posts
    },
  }
}
