import { NextPage } from "next"


const GridPage:NextPage = () => {
  return (
    <>
    <div className="container mx-auto mt-5 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-2"> 
            <div className="bg-blue-400"> 1</div>
            <div className="bg-blue-400"> 2</div>
            <div className="bg-blue-400"> 3</div>
            <div className="bg-blue-400"> 4</div>
        </div>
        
        <div className="grid grid-cols-4 gap-4 my-2"> 
            <div className="bg-pink-400 col-span-2"> col-span-2</div>
            <div className="bg-pink-400"> 2</div>
            <div className="bg-pink-400"> 3</div>
            <div className="bg-pink-400 col-span-4"> 4</div>
        </div>
        
        <div className="grid grid-cols-4 gap-4 my-2"> 
            <div className="bg-cyan-400 col-start-2"> col-start-2</div>
            <div className="bg-cyan-400"> 2</div>
            <div className="bg-cyan-400"> 3</div>
            <div className="bg-cyan-400"> 4</div>
        </div>
    </div>
    </>    
  )
}
export default GridPage