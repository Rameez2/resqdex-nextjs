import Image from "next/image"

export default function Testimonials() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-center text-[#e17716] text-5xl font-bold mb-16">Testimonials</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div className="flex flex-col items-center">
                    <div className="relative -mb-16 z-10">
                        <Image
                            src="/Testimonials.jpeg"
                            alt="Alex"
                            width={120}
                            height={120}
                            style={{
                                borderRadius: '50%',
                                border: '4px solid white',
                                objectFit: 'cover',
                                height: '120px',
                                width: '120px'
                            }}
                        />
                    </div>
                    <div className="bg-[#fff6f1] rounded-lg p-8 pt-20 text-center">
                        <p className="text-[#000000] mb-6">
                            Lorem ipsum dolor sit amet consectetur. Sed risus lectus tempus metus. Sed sapien egestas quisque at in eu
                            eu nec.
                        </p>
                        <p className="text-[#a8a8a8] text-xl">Arnold</p>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="flex flex-col items-center">
                    <div className="relative -mb-16 z-10">
                    <Image
                            src="/Testimonials.jpeg"
                            alt="Harry"
                            width={120}
                            height={120}
                            style={{
                                borderRadius: '50%',
                                border: '4px solid white',
                                objectFit: 'cover',
                                height: '120px',
                                width: '120px'
                            }}
                        />
                    </div>
                    <div className="bg-[#fff6f1] rounded-lg p-8 pt-20 text-center">
                        <p className="text-[#000000] mb-6">
                            Lorem ipsum dolor sit amet consectetur. Sed risus lectus tempus metus. Sed sapien egestas quisque at in eu
                            eu nec.
                        </p>
                        <p className="text-[#a8a8a8] text-xl">Harry</p>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className="flex flex-col items-center">
                    <div className="relative -mb-16 z-10">
                    <Image
                            src="/Testimonials.jpeg"
                            alt="Alex"
                            width={120}
                            height={120}
                            style={{
                                borderRadius: '50%',
                                border: '4px solid white',
                                objectFit: 'cover',
                                height: '120px',
                                width: '120px'
                            }}
                        />
                    </div>
                    <div className="bg-[#fff6f1] rounded-lg p-8 pt-20 text-center">
                        <p className="text-[#000000] mb-6">
                            Lorem ipsum dolor sit amet consectetur. Sed risus lectus tempus metus. Sed sapien egestas quisque at in eu
                            eu nec.
                        </p>
                        <p className="text-[#a8a8a8] text-xl">Alex</p>
                    </div>
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 gap-2">
                <div className="w-2 h-2 rounded-full bg-[#e17716] cursor-pointer"></div>
                <div className="w-2 h-2 rounded-full bg-[#d9d9d9] cursor-pointer"></div>
                <div className="w-2 h-2 rounded-full bg-[#d9d9d9] cursor-pointer"></div>
                <div className="w-2 h-2 rounded-full bg-[#d9d9d9] cursor-pointer"></div>
                <div className="w-2 h-2 rounded-full bg-[#d9d9d9] cursor-pointer"></div>
            </div>
        </div>
    )
}
