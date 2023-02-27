import Link from 'next/link'
import React from 'react'

const FirstPost = () => {
  return (
    <div>
      <div>First Post</div>
      <div>
        <Link href={'/'}>Back to home</Link>
      </div>
    </div>
  )
}

export default FirstPost
