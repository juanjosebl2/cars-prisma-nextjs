import { Button } from "@/components/ui/button"
import { db } from "@/lib/db"
import { auth, currentUser } from "@clerk/nextjs/server"
import Link from "next/link"
import { redirect } from "next/navigation"
import { TableReserves } from "./TableReserves"
import { isAdministrator } from "@/lib/isAdministratos"

export default async function pageReservesAdmin() {
    const {userId} = auth()
    const user = await currentUser()
    
    if (!userId || !user || !isAdministrator(userId)) {
        return redirect("/")
    }

    const orders = await db.order.findMany({
        orderBy: {
            createdAt: "desc"
        }
    }) 

    

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Todas las reservas</h1>
      {orders.length === 0 ? (
        <div className="p-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h1 className="mb-4 text-2xl">
              No se ha realizado ninguna reserva
            </h1>
            <Link href="/" className="mt-5">
              <Button>Volver a la pagina principal</Button>
            </Link>
          </div>
        </div>
      ) : (
        <TableReserves orders={orders}/>
      )}
    </div>
  )
}
