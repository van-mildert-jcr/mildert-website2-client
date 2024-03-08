import Image from "next/image";

export function WelcomeCarousel() {
  return (
    <div className="bg-white">
      <div className="flex">
        <div className="w-1/2">
          <div className="w-full h-full relative">
            <Image src="/next.svg" alt="College Building" fill style={{objectFit: "contain"}}/>
          </div>

        </div>
        <div className="w-1/2 bg-green-700 text-white p-16">
          <h1 className="text-5xl font-bold mb-4">Welcome to the home of Van Mildert JCR.</h1>
          <div className="w-24 h-1 bg-yellow-400"/>
        </div>
      </div>
    </div>
  )
}
