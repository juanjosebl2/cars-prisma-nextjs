"use client";
import { Button } from "@/components/ui/button";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Heart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const { userId } = useAuth();
  return (
    <div className="py-5 mx-auto max-w-7xl">
      <div className="justify-between lg:flex">
        <Link href="/" className="flex items-center justify-center mb-4 gap-x-2 lg:mb-0">
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
          <span className="text-xl font-bold">DriveX</span>
        </Link>

        <div className="flex items-center justify-center gap-x-7">
          <Link href="/dashboard">Listado de coches</Link>
          {userId ? (
            <>
              <Link href="/loved-cars">
                <Heart strokeWidth={1} className="cursor-pointer hover:fill-red-500" />
              </Link>
              <UserButton />
            </>
          ) : (
            <Link href="/sign-in" className="flex gap-x-3">
              <Button>
                Iniciar sesión
                <User className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
