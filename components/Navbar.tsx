import * as React from 'react';
import { useState, useEffect } from 'react';

import { themeChange } from 'theme-change';

export const Navbar = () => {

  useEffect(() => {
    themeChange(false) // 👆 false parameter is required for react project
  }, [])
  
  const links:string[] = ['On Theathers','Coming Soon!','About']
  
  return (
    <>
    <div className="navbar bg-base-200 mb-5 sticky top-0 w-full">
      <div className="navbar-start">

        {/* INIT MOBILE ------------------------------------------------------------------------------ */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost sm:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {links.map((e) => 
              <li key={e}>
                <a>{e}</a>
              </li>
            )}
          </ul>
        </div>

        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>{/* END MOBILE------------------------------------------------------------------------------- */}
      
      {/* INIT DESKTOP ------------------------------------------------------------------------------------ */}
      <div className="navbar-center hidden sm:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((e) => 
            <li key={e}>
              <a>{e}</a>
            </li>
          )}
        </ul>
      </div>{/* END DESKTOP --------------------------------------------------------------------------------------------- */}

      <div className='navbar-end'>
        <div className="dropdown dropdown-end">
          <div className=''>
          {/* //TODO:  logged? this : login */}
            <label tabIndex={0} className="btn btn-primary btn-outline no-animation m-1">
              Peter
            <i className="ri-account-circle-fill ri-2x"></i>
            </label>
          </div>

          {/* //TODO:  logged? this : login */}
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32">
            <li><a>My Account</a></li>
            <li><a>Logout</a></li>
          </ul>

        </div>
        
        <div>
            <i
              data-toggle-theme="retro,synthwave" 
              data-act-class="ACTIVECLASS"
              className="ri-sun-line btn btn-outline">
            </i>
        </div>
      </div>

    </div>{/* END NAVBAR -------------------  */}
    </>
  )
}