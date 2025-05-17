
import './App.css'
import { Toaster } from "@/components/ui/toaster"
import BlogList from './components/blog/BlogList'


function App() {

  return (
    <>
     <div className="container mx-auto px-4 py-8 ">  
    
    <BlogList/>
    <Toaster/>
    </div> 
    
      
  

    </>
  )
}

export default App
