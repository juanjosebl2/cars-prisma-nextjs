"use client";

import Image from "next/image";
import { CardCarProps } from "./CardCar.types";
import { Fuel, Gauge, Gem, Trash, Upload, Users, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonEditCar } from "./ButtonEditCar";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";

export function CardCar(props: CardCarProps) {
  const { car } = props;
  const router = useRouter();

  const deleteCar = async() => {
    try {
      await axios.delete(`/api/car/${car.id}`);
      toast({
        title: "Coche eliminado correctamente",
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Error al eliminar el coche",
        variant: "destructive",
      });
    }
  };

  const handlePublishCar = async(publish:boolean) => {
    try {
      await axios.patch(`/api/car/${car.id}`, {isPublish: publish});
      if(publish){
        toast({
          title: "Coche publicado correctamente",
        });
      } else {
        toast({
          title: "Coche despublicado correctamente",
        });
      }
      router.refresh();
    } catch (error) {
      toast({
        title: "Error al publicar el coche",
        variant: "destructive",
      });
    }
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
        <div className="absolute top-0 right-0 w-full p-1 text-center text-white bg-green-700 rounded-t-lg">
          Publicado
        </div>
      ) : (
        <div className="absolute top-0 right-0 w-full p-1 text-center text-white bg-red-300 rounded-t-lg">
          No publicado
        </div>
      )}

      <div className="p-3">
        <div className="grid mb-4 md:grid-cols-2 gap-x-4">
          <p className="flex items-center text-xl min-h-16 lg:min-h-fit">{car.name}</p>
          <p className="flex justify-end text-xl min-h-16 lg:min-h-fit">{car.priceDay} $ / dia</p>
        </div>

        <div className="grid mb-8 md:grid-cols-2 gap-x-4">
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

        <div className="flex justify-between mt-3 gap-x-4 ">
          <Button 
          className="text-white bg-red-500 "
          variant="outline" onClick={deleteCar}>
            Eliminar
            <Trash className="w-4 h-4 ml-2" />
          </Button>
          <ButtonEditCar carData={car}/>
        </div>

        {car.isPublish ? (
          <Button
            className="w-full mt-3 text-white bg-slate-800"
            variant="outline"
            onClick={() => handlePublishCar(false)}
          >
            No publicado
            <Upload className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            className="w-full mt-3 text-white bg-slate-800"
            variant="outline"
            onClick={() => handlePublishCar(true)}
          >
            Publicado
            <Upload className="w-4 h-4 ml-2 " />
          </Button>
        )}
      </div>
    </div>
  );
}
