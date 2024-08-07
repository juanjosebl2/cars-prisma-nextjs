import { Navbar } from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function orderConfirmationPage() {
  return (
    <div>
        <Navbar />
        <div className="p-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center gap-4 text-center">

            <h1 className="mb-4 text-2xl">! Muchas gracias por confiar en nosotros ¡</h1>
            <p>
                En breve recibirás un correo con los detalles de tu reserva.
            </p>
            <p>
                Puedes visualizar todas tus reservas dentro de tu area de cliente
            </p>
            <Link href="/" className="mt-5">
                <Button>Volver a la pagina principal</Button>
            </Link>
            </div>
        </div>
    </div>
  )
}
