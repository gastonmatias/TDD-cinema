import { Layout } from '@/components/layouts/Layout'
import { moviesOnTheathers } from '@/data/movies'

export default function Home() {

  return (
    <>
    <Layout content={'cinema'}>

    <div className="grid grid-cols-1 sm:grid-cols-1 gap-3">
        
        <div className='text-center'>
          <h1 className='text-3xl bg-neutral py-2 font-bold shadow-lg'>On Theathers</h1>
        </div>
  
        <div data-testid='onTheathers' className='grid grid-cols-2 sm:grid-cols-5 gap-2'>
          {
            moviesOnTheathers.map(e => (
              <div key={e.id} className="w-fit bg-base-100 shadow-xl border border-gray-500">{/* con class "card" se buguea */}
                <figure>
                  <img src={e.poster1} alt={e.title} />
                </figure>
                <button className='btn btn-xs btn-info btn-block rounded-none'>
                  See More
                </button>
              </div>
            ))
          }
        </div> {/* END On Theathers -------------------------------------------- */}

        <div className="divider"></div> 

        <div className='text-center'>
          <h1 className='text-3xl bg-neutral py-2 font-bold shadow-lg'>Coming Soon!</h1>
        </div>
      </div>

    </Layout>
    </>
  )
  
}
