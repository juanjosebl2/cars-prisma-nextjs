import { Navbar } from '@/components/Shared/Navbar'
import React from 'react'
import { FirstBlock } from './components/FirstBlock'
import { SliderBrands } from './components/SliderBrands'
import { Features } from './components/Features'

export default function page() {
  return (
    <div>
      <Navbar />
      <FirstBlock />
      <SliderBrands />
      <Features />
    </div>
  )
}
