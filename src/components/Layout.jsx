import React, { Suspense } from 'react'

import { AppBar } from './AppBar'
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <AppBar />
            <Suspense fallback={"Loading..."}> 
                <Outlet/>
            </Suspense>
            
        </>
  )
}
