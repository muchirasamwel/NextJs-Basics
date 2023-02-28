import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import React from 'react'
import pageStyles from '../../styles/first-post.module.css'

const FirstPost = () => {
  return (
    <div>
      <div className='flex justify-center align-middle w-screen'>
        <Head>
          <title>Posts head</title>
        </Head>
        <Script
          src='https://connect.facebook.net/en_US/sdk.js'
          strategy='lazyOnload'
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
        <main className='p-5 bg-white-500'>
          <Image
            className='rounded-lg shadow-lg object-cover'
            style={{
              width: 300,
              height: 200
            }}
            src={'/deb.png'}
            // src={'https://random.imagecdn.app/500/500'}
            width={300}
            height={200}
          />
          <div className={pageStyles.heading}>First Post</div>
          <div className='bg-white hover:bg-blue-600 hover:text-white hover:cursor-pointer hover:border-opacity-0 flex justify-center py-2 rounded-lg border-2 border-blue-700'>
            <Link href={'/'}>Back to home</Link>
          </div>
        </main>
      </div>
      <div className=' w-full h-full flex flex-wrap justify-center'>
        <Image
          className='rounded-lg shadow-lg object-cover m-5'
          style={{
            width: 300,
            height: 200
          }}
          // src={'/deb.png'}
          src={'https://random.imagecdn.app/500/500'}
          width={300}
          height={200}
        />
        <Image
          className='rounded-lg shadow-lg object-cover m-5'
          style={{
            width: 300,
            height: 200
          }}
          // src={'/deb.png'}
          src={'https://random.imagecdn.app/500/500'}
          width={300}
          height={200}
        />
        <Image
          className='rounded-lg shadow-lg object-cover m-5'
          style={{
            width: 300,
            height: 200
          }}
          // src={'/deb.png'}
          src={'https://random.imagecdn.app/500/500'}
          width={300}
          height={200}
        />
        <Image
          className='rounded-lg shadow-lg object-cover m-5'
          style={{
            width: 300,
            height: 200
          }}
          // src={'/deb.png'}
          src={'https://random.imagecdn.app/500/500'}
          width={300}
          height={200}
        />
      </div>
    </div>
  )
}

export default FirstPost
