import { Navbar } from '@/components/Shared/Navbar'
import React from 'react'
import { FirstBlock } from './components/FirstBlock'
import { SliderBrands } from './components/SliderBrands'
import { Features } from './components/Features'
import { OurFleet } from './components/OurFleet/OurFleet'
import { DriveToday } from './components/DriveToday'

export default function page() {
  return (
    <div>
      <Navbar />
      <FirstBlock />
      <SliderBrands />
      <Features />
      <OurFleet />
      <DriveToday />
    </div>
  )
}
