import React from 'react'
import { ListLovedCars } from './components/ListLovedCars'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default function pageLovedCars() {
  const { userId } = auth()
  if (!userId) {
    return redirect('/')
  } 

  return (
    <div>
        <h1 className='mb-4 text-2xl font-bold'>Coches que te gustan</h1>
        <ListLovedCars />
    </div>
  )
}
