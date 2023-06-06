import { Layout } from '@/components/layouts/Layout'

export default function Home() {
  
  return (
    <>
    <Layout content={'cinema'}>

    <div className="grid grid-cols-1 sm:grid-cols-1 gap-3">
        
        <div className='text-center'>
          <h1 className='text-3xl bg-neutral font-bold shadow-lg'>On Theathers!</h1>
        </div>
  
        <div id='onTheathers' className='grid grid-cols-2 sm:grid-cols-5 gap-2'>
          

   

        </div> {/* END On Theathers -------------------------------------------- */}

        <div className="divider"></div> 

      </div>

    </Layout>
    </>
  )
  
}
