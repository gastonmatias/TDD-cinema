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
          
          <div className="w-fit bg-base-100 shadow-xl border border-gray-500">{/* con class "card" se buguea */}
            <figure>
              <img src="https://cdn.mallmarina.cl/mallbarrio/uploads/2023/05/Spiderman-460-x-660-1.jpg" alt="miles" />
            </figure>
            <button className='btn btn-xs btn-info btn-block rounded-none'>See More</button>
          </div>
          <div className="w-fit bg-base-100 shadow-xl border border-gray-500">{/* con class "card" se buguea */}
            <figure>
              <img src="https://cdn.mallmarina.cl/mallbarrio/uploads/2023/05/Spiderman-460-x-660-1.jpg" alt="miles" />
            </figure>
            <button className='btn btn-xs btn-info btn-block rounded-none'>See More</button>
          </div>
          <div className="w-fit bg-base-100 shadow-xl border border-gray-500">{/* con class "card" se buguea */}
            <figure>
              <img src="https://cdn.mallmarina.cl/mallbarrio/uploads/2023/05/Spiderman-460-x-660-1.jpg" alt="miles" />
            </figure>
            <button className='btn btn-xs btn-info btn-block rounded-none'>See More</button>
          </div>
          <div className="w-fit bg-base-100 shadow-xl border border-gray-500">{/* con class "card" se buguea */}
            <figure>
              <img src="https://cdn.mallmarina.cl/mallbarrio/uploads/2023/05/Spiderman-460-x-660-1.jpg" alt="miles" />
            </figure>
            <button className='btn btn-xs btn-info btn-block rounded-none'>See More</button>
          </div>
          <div className="w-fit bg-base-100 shadow-xl border border-gray-500">{/* con class "card" se buguea */}
            <figure>
              <img src="https://cdn.mallmarina.cl/mallbarrio/uploads/2023/05/Spiderman-460-x-660-1.jpg" alt="miles" />
            </figure>
            <button className='btn btn-xs btn-info btn-block rounded-none'>See More</button>
          </div>
   

        </div> {/* END On Theathers -------------------------------------------- */}

        <div className="divider"></div> 

      </div>

    </Layout>
    </>
  )
  
}
