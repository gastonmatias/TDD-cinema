
import styles from '@/pages/index.module.css'

export default function Home() {
  return (
    <div className='container mx-auto mt-5'> {/* container mx-auto: para container centrado */}

      <button 
        className='
          bg-blue-600 p-2 rounded m-5 hover:bg-blue-800 text-white font-bold px-4
            //w-full
          sm:bg-orange-600
        '
      >
        Submit
      </button>

      <h1 className='mt-5 text-green-700 text-5xl text-center'>H3llo fri3nd!</h1>
      <h1 className='mt-5 text-green-600 text-4xl text-right capitalize'>H3llo fri3nd!</h1>
      <h1 className='mt-5 text-green-500 text-3xl uppercase'>H3llo fri3nd!</h1>
      <h1 className='mt-5 text-white py-2 mx-10 text-3xl rounded-full bg-cyan-800 text-center'>
        Cyan-800
      </h1>
      
      <h1 className='mt-5 text-white text-3xl bg-pink-500 p-2 text-center rounded-lg mx-10 shadow-md shadow-indigo-500'>
        pink-500
      </h1>
      
      <h1 className='w-1/4 mt-5 text-white text-3xl bg-blue-500 p-2 text-center rounded-lg'>
        blue-500
      </h1>

      <div className='m-5 mt-10 border border-red-800 p-3 box-border'>
        <p className='italic text-2xl sm:text-xl'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero consequatur aliquam quos temporibus? Inventore, nisi distinctio veritatis beatae nobis ab.
        </p>
      </div>

    </div>
  )
  
}
