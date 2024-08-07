"use client";

import { Car } from "@prisma/client";
import { ListCarsProps } from "./ListCars.types";
import Image from "next/image";
import { Fuel, Gauge, Gem, Heart, Users, Wrench } from "lucide-react";
import { ModalAddReservation } from "@/components/Shared/ModalAddReservation";
import { useLovedCars } from "@/hooks/use-loved-cars";

export function ListCars(props: ListCarsProps) {
  const { cars } = props;
  const { addLoveItem, lovedItems, removeLovedItem } = useLovedCars();


  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      {cars?.map((car: Car) => {
        const {
          priceDay,
          photo,
          cv,
          engine,
          id,
          people,
          name,
          transmission,
          type,
        } = car;

        const likedCar = lovedItems.find((item) => item.id === id)

        return (
          <div key={id} className="p-1 rounded-lg shadow-md hover:shadow-lg">
            <Image
              src={photo}
              alt={name}
              width={400}
              height={600}
              className="rounded-lg"
            />
            <div className="p-3">
              <div className="grid mb-4 md:grid-cols-2 gap-x-4">
                <p className="flex items-center text-xl min-h-16 lg:min-h-fit">
                  {name}
                </p>
                <p className="flex justify-end text-xl min-h-16 lg:min-h-fit">
                  {priceDay} $ / dia
                </p>
              </div>
              <p className="flex items-center">
                <Gem className="w-4 h-4 mr-2" strokeWidth={1} />
                {type}
              </p>
              <p className="flex items-center">
                <Wrench className="w-4 h-4 mr-2" strokeWidth={1} />
                {transmission}
              </p>
              <p className="flex items-center">
                <Users className="w-4 h-4 mr-2" strokeWidth={1} />
                {people}
              </p>
              <p className="flex items-center">
                <Fuel className="w-4 h-4 mr-2" strokeWidth={1} />
                {engine}
              </p>
              <p className="flex items-center">
                <Gauge className="w-4 h-4 mr-2" strokeWidth={1} />
                {cv} CV
              </p>

              <div className="flex items-center justify-center mt-4 gap-x-3">
                <ModalAddReservation car={car} />
                <Heart
                  className={`mt-2 cursor-pointer size-8 ${likedCar && "fill-red-500"}`}
                  onClick={likedCar ? () => removeLovedItem(id) : () => addLoveItem(car)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
