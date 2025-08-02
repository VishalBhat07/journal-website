import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = ["/vol1issue1.png", "/vol1issue2.png"]

export default function CarouselDemo() {
  return (
    <Carousel className="w-[90%] max-w-xl min-w-[250px] sm:min-w-[300px]">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center">
                    <img src={image} alt={index+1}  className="w-full h-full object-contain rounded-lg" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
