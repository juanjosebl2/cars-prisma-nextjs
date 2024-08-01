"use client";

import Image from "next/image";
import { CardCarProps } from "./CardCar.types";
import { Fuel, Gauge, Gem, Trash, Upload, Users, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonEditCar } from "./ButtonEditCar";

export function CardCar(props: CardCarProps) {
  const { car } = props;

  const handleDelete = () => {
    console.log("Eliminar");
  };

  return (
    <div className="relative bg-white rounded-lg shadow-md hover:shadow-lg">
      <Image
        src={car.photo}
        alt={car.name}
        width={400}
        height={600}
        className="rounded-t-lg"
      />
      {car.isPublish ? (
        <div className="absolute top-0 right-0 w-full p-1 text-center text-white bg-green-700">
          Publicado
        </div>
      ) : (
        <div className="absolute top-0 right-0 w-full p-1 text-center text-white bg-red-300">
          No publicado
        </div>
      )}

      <div className="p-3">
        <div className="flex flex-col mb-3 gap-x-4">
          <p className="text-xl min-h-16 lg:min-h-fit">{car.name}</p>
          <p>{car.priceDay} $</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-4">
          <p className="flex items-center">
            <Gem className="w-4 h-4 mr-2" strokeWidth={1} />
            {car.type}
          </p>
          <p className="flex items-center">
            <Wrench className="w-4 h-4 mr-2" strokeWidth={1} />
            {car.transmission}
          </p>
          <p className="flex items-center">
            <Users className="w-4 h-4 mr-2" strokeWidth={1} />
            {car.people}
          </p>
          <p className="flex items-center">
            <Fuel className="w-4 h-4 mr-2" strokeWidth={1} />
            {car.engine}
          </p>
          <p className="flex items-center">
            <Gauge className="w-4 h-4 mr-2" strokeWidth={1} />
            {car.cv} CV
          </p>
        </div>

        <div className="flex justify-between mt-3 gap-x-4">
          <Button variant="outline" onClick={handleDelete}>
            Eliminar
            <Trash className="w-4 h-4 ml-2" />
          </Button>
          <ButtonEditCar carData={car}/>
        </div>

        {car.isPublish ? (
          <Button
            className="w-full mt-3"
            variant="outline"
            onClick={() => console.log("Unpublish")}
          >
            No publicado
            <Upload className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            className="w-full mt-3"
            variant="outline"
            onClick={() => console.log("Publish")}
          >
            Publicado
            <Upload className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}
