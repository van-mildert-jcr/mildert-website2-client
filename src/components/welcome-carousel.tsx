import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

export function WelcomeCarousel() {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Image src="/photos/college-feather.png" alt="Photo of the feather sculpture at Van Mildert College" width={1200} height={800}/>
            </CarouselItem>
            <CarouselItem>
              <Image src="/photos/college-feather.png" alt="Photo of the feather sculpture at Van Mildert College" width={1200} height={800}/>
            </CarouselItem>
            <CarouselItem>
              <Image src="/photos/college-feather.png" alt="Photo of the feather sculpture at Van Mildert College" width={1200} height={800}/>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious/>
          <CarouselNext/>
          <CarouselDots/>
        </Carousel>
      </div>
      <section className="bg-yellow-accent pl-4">
        <div className="h-full flex flex-col items-center justify-center ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-accent-foreground">Welcome to the home of Van Mildert JCR.</h1>
        </div>
      </section>
    </article>
  )
}
