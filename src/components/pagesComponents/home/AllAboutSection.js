import Image from "next/image"
import Link from "next/link"

export default function AllAboutSection() {
  return (
    <main className="min-h-screen bg-[#ffffff] px-4 py-16 md:px-8 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
          {/* Left Content */}
          <div className="mb-12 max-w-xl lg:mb-0 lg:max-w-lg">
            <h1 className="mb-6 text-5xl font-bold text-[#000000]">All About ResQDexx</h1>
            <p className="mb-8 text-lg leading-relaxed text-[#000000]">
              Lorem ipsum dolor sit amet consectetur. Sed risus lectus tempus metus. Sed sapien egestas quisque at in eu
              eu nec. Justo donec aliquet bibendum felis odio laoreet fermentum libero sed. Est pharetra eu at nibh
              adipiscing erat hac. Lorem ipsum dolor sit amet consectetur. Sed risus lectus tempus metus. Sed sapien
              egestas quisque at in eu eu nec. Justo donec aliquet bibendum felis odio laoreet fermentum libero sed. Est
              pharetra eu at nibh adipiscing erat hac.
            </p>
            <Link
              href="#"
              className="inline-block rounded-md bg-primary px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-[#f2b47b]"
            >
              Learn More
            </Link>
          </div>

          {/* Right Content with Circle Background */}
          <div className="relative">
            <div className="absolute -right-16 -top-16 -z-10 h-[600px] w-[600px] rounded-full bg-[#ecdaca]"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/about-dog.jpeg"
                  alt="People with dog in park"
                  width={300}
                  height={400}
                  className="h-full w-full object-cover"
                  style={{height:'300px'}}
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/about-dog.jpeg"
                  alt="Person with small dogs"
                  width={300}
                  height={400}
                  className="h-full w-full object-cover"
                  style={{height:'300px'}}

                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/about-dog.jpeg"
                  alt="Dalmatian standing"
                  width={300}
                  height={400}
                  className="h-full w-full object-cover"
                  style={{height:'300px'}}

                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/about-dog.jpeg"
                  alt="Person holding cat"
                  width={300}
                  height={400}
                  className="h-full w-full object-cover"
                  style={{height:'300px'}}

                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

