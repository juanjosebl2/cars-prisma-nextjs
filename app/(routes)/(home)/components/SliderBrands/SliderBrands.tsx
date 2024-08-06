"use client";

import { Reveal } from "@/components/Shared/Reveal";
import { delay } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { dataBrands } from "./SliderBrands.data";
import Image from "next/image";

export function SliderBrands() {
  return (
    <Reveal
      position="bottom"
      className="flex justify-center mt-5 mb-10 gap-x-20 lg:pb-20"
    >
      <Carousel
        className="w-full max-w-6xl mx-auto"
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent>
          {dataBrands.map(({ url }) => (
            <CarouselItem
              key={url}
              className="flex items-center justify-center basis-1/6"
            >
              <Image
                src={`/images/brands/${url}`}
                alt="Brand"
                width={90}
                height={90}
                className="object-contain w-[90px] h-[90px]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Reveal>
  );
}
