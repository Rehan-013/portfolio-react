import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeMap } from '../utils/constants'

export const AppRoutes = () => {
  return (
    <>
        <Routes>
            {
            routeMap?.map(route, index)=>(
                <route  />
            ))
            }
        </Routes>
    </>
  )
}
