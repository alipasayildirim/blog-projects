import React, { useState } from 'react'
import { blogData } from '@/data/blogData'
import BlogItem from './BlogItem';
import AddBlogItem from './AddBlogItem';
const BlogList = () => {
    const [posts,setPosts] = useState(blogData);
  return (
    
    <div>
      <div className="flex justify-end my-10"><AddBlogItem setPosts = {setPosts}/></div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">       
        {posts.map((post)=> {
            return <BlogItem
            key={post.id}
            title = {post.title}
            description = {post.description}
            author = {post.author}
            date = {post.date}
            image = {post.image}
            
                      
            />
        })}
    </div>
    </div>
  )
}

export default BlogList