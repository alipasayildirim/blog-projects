import React, { useState } from 'react'
import { useToast } from "@/hooks/use-toast"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const AddBlogItem = ({setPosts}) => {
   
    const [open,setOpen] = useState(false)
    const {toast} = useToast();

    const [post,setPost] = useState({
        
        title:"",
        description:"",
        author:"",
        date:"",
        image:"",
    })

  const handleChange = (e)=> {
    const {id,value} = e.target;
    setPost((prev)=> ({
        ...prev,
        [id]:value,
    }))
  }

  const handleClick = ()=> {

    if (
    !post.title.trim() ||
    !post.description.trim() ||
    !post.author.trim() ||
    !post.date.trim() ||
    !post.image.trim()
  ) {
    toast({
      title: "Eksik bilgi!",
      description: "Lütfen tüm alanları doldurunuz.",
      variant: "destructive", 
    });
    return; 
  }


    const newPost = {
        ...post,
        id: Date.now(),
    }
    
    setPosts((prev)=> [newPost,...prev])

    setOpen(false);
     setPost({
      title: "",
      description: "",
      author: "",
      date: "",
      image: "",
    });
    toast({
    title: "Post başarıyla eklendi!",
    description: `Eklenme zamanı: ${new Date().toLocaleString()}`,
    className:"bg-green-500 text-white"
  });
    
  }

  return (
      <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Post Ekle</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Post Ekle</DialogTitle>
          <DialogDescription>
           Tüm alanları doldurunuz
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">
              Başlık
            </Label>
            <Input
              id="title"
              placeholder = "Başlık giriniz"
              className="col-span-3"
              onChange = {handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">
              Açıklama
            </Label>
            <Input
              id="description"
              placeholder="Açıklama giriniz"
              className="col-span-3"
              onChange = {handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">
              Görsel URL
            </Label>
            <Input
              id="image"
              placeholder="Görsel linki giriniz"
              className="col-span-3"
              onChange = {handleChange}
            />
          </div>
           <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">
             Yazar
            </Label>
            <Input
              id="author"
              placeholder="Yazar ismi giriniz"
              className="col-span-3"
              onChange = {handleChange}
            />
          </div>
           <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">
             Tarih
            </Label>
            <Input
              id="date"
              placeholder="2000-05-11"
              className="col-span-3"
              onChange = {handleChange}
            />
          </div>
          
        </div>
        <DialogFooter>
          <Button onClick={handleClick} >Ekle</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddBlogItem