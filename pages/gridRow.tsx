import { NextPage } from "next"


const GridPage:NextPage = () => {
  return (
    <>
    <div className="container mx-auto sm:px-0 px-2 mt-5 text-center">
        
      {/* <div className="grid grid-rows-4 gap-4"> 
          <div className="bg-blue-400 row-span-2"> 1</div>
          <div className="bg-blue-400"> 2</div>
          <div className="bg-blue-400"> 3</div>
          <div className="bg-blue-400"> 4</div>
      </div> */}

      <div 
      className="
        grid grid-cols-1 grid-rows-5
        sm:grid-cols-4 sm:grid-rows-2 gap-4"
      >
        <div className="bg-orange-500">1</div>
        <div className="bg-orange-500">1</div>
        <div className="bg-orange-500 col-span-1 row-span-2 sm:row-span-2 sm:col-span-2">3</div>
        <div className="bg-orange-500">1</div>
        <div className="bg-orange-500">2</div>
        <div className="bg-gray-200">2</div>
        <div className="bg-red-500">2</div>
        <div className="bg-danger">2</div>
        <div className="bg-info-100 text-white">info</div>
        <div className="bg-info-200 text-white">info</div>
        <div className="bg-info-300 text-white">info</div>
        <div className="bg-info-400 font-rale text-white">info</div>
      </div>

      <button className="btn btn-blue mt-2">
        Submit
      </button>

    </div>
    </>
  )
}
export default GridPage