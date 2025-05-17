import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import AddBlogItem from './AddBlogItem'


const BlogItem = ( {title,description,author,date,image}) => {
    
  return (
    
  
   <Card>
  {image && (
    <div className="w-full overflow-hidden rounded-t-lg">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
    </div>
  )}
  <CardHeader>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{author}</CardDescription>
  </CardHeader>
  <CardContent>
    <p>{description}</p>
  </CardContent>
  <CardFooter>
    <p>{date}</p>
  </CardFooter>
</Card>
    
  )
}

export default BlogItem