import { Reveal } from "@/components/Shared/Reveal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function DriveToday() {
  return (
    <div className="p-6 mx-auto lg:my-32 max-w-7xl">
      <div className="rounded-xl relative bg-[url('/images/fondo.webp')] bg-center bg-no-repeat bg-cover min-h-[400px]">
        <div className="lg:flex gap-x-6">
          <div className="p-8 lg:p-14">
            <h3 className="text-4xl text-white">
              Conduce el coche de tus sueños
            </h3>
            <p className="my-5 text-xl text-white">
              Registrate y explora los mejores coches
            </p>
            <Link href="/sign-in">
              <Button size="lg" variant="outline">
                Regístrate aquí
              </Button>
            </Link>
          </div>
          <Reveal position="bottom" className="lg:flex lg:justify-end lg:items-center">
            <Image
              src="/images/fondo-trans-1.png"
              alt="Car Drive"
              width={550}
              height={250}
              className="rounded-lg"
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
