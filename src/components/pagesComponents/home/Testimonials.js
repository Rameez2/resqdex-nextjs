"use client"
import Image from "next/image";
import { useState } from "react";

const testimonialsData = [
    {
        "name": "Arnold",
        "image": "/Testimonials.jpeg",
        "text": "Lorem ipsum dolor sit amet consectetur. Sed risus lectus tempus metus. Sed sapien egestas quisque at in eu eu nec."
    },
    {
        "name": "Harry",
        "image": "/Testimonials.jpeg",
        "text": "Lorem ipsum dolor sit amet consectetur. Sed risus lectus tempus metus. Sed sapien egestas quisque at in eu eu nec."
    },
    {
        "name": "Alex",
        "image": "/Testimonials.jpeg",
        "text": "Lorem ipsum dolor sit amet consectetur. Sed risus lectus tempus metus. Sed sapien egestas quisque at in eu eu nec."
    },
    {
        "name": "Emma",
        "image": "/Testimonials.jpeg",
        "text": "Lorem ipsum dolor sit amet consectetur. Sed risus lectus tempus metus. Sed sapien egestas quisque at in eu eu nec."
    },
    {
        "name": "Oliver",
        "image": "/Testimonials.jpeg",
        "text": "Lorem ipsum dolor sit amet consectetur. Sed risus lectus tempus metus. Sed sapien egestas quisque at in eu eu nec."
    },
    {
        "name": "Sophia",
        "image": "/Testimonials.jpeg",
        "text": "Lorem ipsum dolor sit amet consectetur. Sed risus lectus tempus metus. Sed sapien egestas quisque at in eu eu nec."
    },
    {
        "name": "Liam",
        "image": "/Testimonials.jpeg",
        "text": "Lorem ipsum dolor sit amet consectetur. Sed risus lectus tempus metus. Sed sapien egestas quisque at in eu eu nec."
    },
    {
        "name": "Mia",
        "image": "/Testimonials.jpeg",
        "text": "Lorem ipsum dolor sit amet consectetur. Sed risus lectus tempus metus. Sed sapien egestas quisque at in eu eu nec."
    },
    {
        "name": "Ethan",
        "image": "/Testimonials.jpeg",
        "text": "Lorem ipsum dolor sit amet consectetur. Sed risus lectus tempus metus. Sed sapien egestas quisque at in eu eu nec."
    },
    {
        "name": "Ava",
        "image": "/Testimonials.jpeg",
        "text": "Lorem ipsum dolor sit amet consectetur. Sed risus lectus tempus metus. Sed sapien egestas quisque at in eu eu nec."
    },
    {
        "name": "Noah",
        "image": "/Testimonials.jpeg",
        "text": "Lorem ipsum dolor sit amet consectetur. Sed risus lectus tempus metus. Sed sapien egestas quisque at in eu eu nec."
    },
    {
        "name": "Isabella",
        "image": "/Testimonials.jpeg",
        "text": "Lorem ipsum dolor sit amet consectetur. Sed risus lectus tempus metus. Sed sapien egestas quisque at in eu eu nec."
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(testimonialsData.length / itemsPerPage);

    const handleDotClick = (index) => {
        setCurrentIndex(index * itemsPerPage);
    };

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-center text-[#e17716] text-5xl font-bold mb-16">Testimonials</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonialsData.slice(currentIndex, currentIndex + itemsPerPage).map((testimonial, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="relative -mb-16 z-10">
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                width={120}
                                height={120}
                                className="rounded-full w-30 h-30 border-2 border-white shadow-sm object-cover"
                            />
                        </div>
                        <div className="bg-[#fff6f1] rounded-lg p-8 pt-20 text-center">
                            <p className="text-[#000000] mb-6">
                                {testimonial.text}
                            </p>
                            <p className="text-[#a8a8a8] text-xl">{testimonial.name}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 gap-2">
                {Array.from({ length: totalPages }, (_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${currentIndex / itemsPerPage === index ? 'bg-[#e17716] scale-110' : 'bg-[#d9d9d9]'}`}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
}