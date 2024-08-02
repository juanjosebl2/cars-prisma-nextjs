import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { ListCars } from "./components/ListCars"

export default async function PageDashboard() {

  const { userId } = auth()
  if (!userId) {
    return redirect('/')
  }

  const cars = await db.car.findMany({
    where: {
      isPublish: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Listado de coches</h2>

      </div>
      <ListCars cars={cars} />
    </div>
  )
}
