import Image from "next/image";
import Link from "next/link";

export default function AllAboutSection() {
  return (
    <main className="min-h-screen bg-[#ffffff] px-4 py-16 md:px-8 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
          {/* Left Content */}
          <section className="mb-12 max-w-xl lg:mb-0 lg:max-w-lg">
            <h2 className="mb-6 text-5xl font-bold text-[#000000]">All About ResQDexx</h2>
            <p className="mb-8 text-lg leading-relaxed text-[#000000]">
              ResQDexx is a global platform dedicated to simplifying the pet adoption journey. We connect rescue shelters and
              loving homes to provide forever families for animals in need. With tools for filtering, connecting, and learning,
              ResQDexx ensures your next best friend is just a few clicks away.
            </p>
            <Link
              href="/about"
              className="inline-block rounded-md bg-primary px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-[#f2b47b]"
            >
              Learn More
            </Link>
          </section>

          {/* Right Content with Circle Background */}
          <div className="relative">
            <div className="absolute -right-16 -top-16 -z-10 h-[600px] w-[600px] rounded-full bg-[#ecdaca]"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/about-dog.jpeg"
                  alt="Family playing with adopted golden retriever"
                  width={300}
                  height={400}
                  className="h-[300px] w-full object-cover"
                  priority
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/about-dog.jpeg"
                  alt="Volunteer walking dogs in rescue park"
                  width={300}
                  height={400}
                  className="h-[300px] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/about-dog.jpeg"
                  alt="Dalmatian standing happily at shelter"
                  width={300}
                  height={400}
                  className="h-[300px] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/about-dog.jpeg"
                  alt="Woman holding rescued kitten with smile"
                  width={300}
                  height={400}
                  className="h-[300px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
