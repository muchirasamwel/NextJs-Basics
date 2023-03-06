import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import data from '../../mockdata/posts.json'

const PostPage = props => {
  const { postData } = props
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className='flex justify-center'>
        <div className='' style={{ width: '70%' }}>
          <Image
            className='shadow-lg m-5 rounded-lg object-cover'
            style={{
              width: '100%',
              height: 250
            }}
            // src={'/deb.png'}
            src={postData.image}
            width={500}
            height={500}
          />
          <div className='m-5 text-center'>
            <h2 className=' font-bold text-lg'>{postData.title}</h2>
            <p className=' text-sm text-center'>{postData.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostPage

export const getStaticPaths = () => {
  const paths = data.map(d => ({ params: { id: d.id.toString() } }))
  // console.log({ paths })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = ({ params }) => {
  const post = data.find(d => d.id == params.id)
  return {
    props: {
      postData: post
    }
  }
}
