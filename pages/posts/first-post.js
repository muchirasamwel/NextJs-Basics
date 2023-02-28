import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import React from 'react'
import pageStyles from '../../styles/first-post.module.css'

const FirstPost = () => {
  return (
    <div className={pageStyles.container}>
      <div>
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
        <main>
          <Image
            className={pageStyles.image}
            src={'/deb.png'}
            // src={'https://random.imagecdn.app/500/500'}
            width={200}
            height={50}
          />
          <div className={pageStyles.heading}>First Post</div>
          <div className={pageStyles.body}>
            <Link href={'/'}>Back to home</Link>
          </div>
        </main>
      </div>
    </div>
  )
}

export default FirstPost
