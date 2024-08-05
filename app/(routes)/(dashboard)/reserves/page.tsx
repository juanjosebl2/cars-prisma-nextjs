import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { TableReserves } from "./TableReserves";

export default async function page() {
  const { userId } = auth();
  if (!userId) {
    return redirect("/");
  }

  const orders = await db.order.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Reservas</h1>
      {orders.length === 0 ? (
        <div className="p-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h1 className="mb-4 text-2xl">
              No tienes ningun pedido
            </h1>
            <p>Haz tu pedidos a traves de la pagina listado de coches</p>
            <Link href="/" className="mt-5">
              <Button>Volver a la pagina principal</Button>
            </Link>
          </div>
        </div>
      ) : (
        <TableReserves orders={orders}/>
      )}
    </div>
  );
}
