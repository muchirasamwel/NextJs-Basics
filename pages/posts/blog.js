import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const Blog = ({ blog }) => {
  const router = useRouter()
  return (
    <div
      className='shadow-lg m-5 rounded-lg cursor-pointer active:opacity-60 hover:opacity-70 '
      style={{ width: 250 }}
      onClick={() => router.push('/posts/' + blog.id)}
    >
      <Image
        className=' object-cover rounded-lg'
        style={{
          width: '100%',
          height: 150
        }}
        // src={'/deb.png'}
        src={blog.image}
        width={250}
        height={150}
      />
      <div className='m-3'>
        <h2 className=' font-bold'>{blog.title}</h2>
        <p className=' text-sm text-justify'>{blog.description}</p>
      </div>
    </div>
  )
}
export default Blog
