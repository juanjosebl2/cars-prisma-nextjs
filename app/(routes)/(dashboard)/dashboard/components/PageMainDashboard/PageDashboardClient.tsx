"use client"

import { Car } from "@prisma/client"
import { ListCars } from "../ListCars"
import { useEffect, useState } from "react"
import { PageMainDashboardProps } from "./PageMainDashboard.types"
import { FiltersCars } from "../FiltersCars"

export function PageDashboardClient({ cars }: PageMainDashboardProps) {

  const [filteredCars, setFilteredCars] = useState<Car[]>()
  const [filters, setFilters] = useState({
    type: '',
    transmission: '',
    engine: '',
    people: ''
  })

  useEffect(() => {
    let filtered = cars
  
    if (filters.type) {
      filtered = filtered.filter((car) => 
        car.type.toLowerCase().includes(filters.type.toLowerCase()
      ))
    }

    console.log(filters.transmission)
    if (filters.transmission) {
      filtered = filtered.filter((car) => 
        car.transmission.toLowerCase().includes(filters.transmission.toLowerCase()
      ))
    }

    if (filters.engine) {
      filtered = filtered.filter((car) => 
        car.engine.toLowerCase().includes(filters.engine.toLowerCase()
      ))
    }

    if (filters.people) {
      filtered = filtered.filter((car) => 
        car.people.toLowerCase().includes(filters.people.toLowerCase()
      ))
    }

    setFilteredCars(filtered)

   }, [filters, cars])
  
  const handleFilterChange = (filterName: string, filterValue: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue
    }))
  }

  const clearFilters = () => {
    setFilters({
      type: '',
      transmission: '',
      engine: '',
      people: ''
    })
  }
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="mb-4 text-2xl font-bold">Listado de coches</h2>
      </div>
      <FiltersCars setFilters={handleFilterChange} filters={filters} clearFilters={clearFilters}/>
      <ListCars cars={filteredCars} />
    </div>
  )
}
