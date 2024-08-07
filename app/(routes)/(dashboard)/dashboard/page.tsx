import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { PageDashboardClient } from "./components/PageMainDashboard"

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

  return <PageDashboardClient cars={cars} />
}
