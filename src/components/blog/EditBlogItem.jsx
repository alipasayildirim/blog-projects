// import React, { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// const EditBlogItem = () => {

//     const [open,setOpen]= useState(false);

//   return (
//         <Dialog open={open} onOpenChange={setOpen}>
//         <DialogTrigger asChild>
//           <Button variant="outline">Post Ekle</Button>
//         </DialogTrigger>
//         <DialogContent className="sm:max-w-[425px]">
//           <DialogHeader>
//             <DialogTitle>Post Ekle</DialogTitle>
//             <DialogDescription>
//              Tüm alanları doldurunuz
//             </DialogDescription>
//           </DialogHeader>
//           <div className="grid gap-4 py-4">
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label className="text-right">
//                 Başlık
//               </Label>
//               <Input
//                 id="title"
//                 placeholder = "Başlık giriniz"
//                 className="col-span-3"
//                 onChange = {handleChange}
//               />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label className="text-right">
//                 Açıklama
//               </Label>
//               <Input
//                 id="description"
//                 placeholder="Açıklama giriniz"
//                 className="col-span-3"
//                 onChange = {handleChange}
//               />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label className="text-right">
//                 Görsel URL
//               </Label>
//               <Input
//                 id="image"
//                 placeholder="Görsel linki giriniz"
//                 className="col-span-3"
//                 onChange = {handleChange}
//               />
//             </div>
//              <div className="grid grid-cols-4 items-center gap-4">
//               <Label className="text-right">
//                Yazar
//               </Label>
//               <Input
//                 id="author"
//                 placeholder="Yazar ismi giriniz"
//                 className="col-span-3"
//                 onChange = {handleChange}
//               />
//             </div>
//              <div className="grid grid-cols-4 items-center gap-4">
//               <Label className="text-right">
//                Tarih
//               </Label>
//               <Input
//                 id="date"
//                 placeholder="2000-05-11"
//                 className="col-span-3"
//                 onChange = {handleChange}
//               />
//             </div>
            
//           </div>
//           <DialogFooter>
//             <Button onClick={handleClick} >Ekle</Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     )
// }

// export default EditBlogItem