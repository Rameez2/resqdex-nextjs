import React, { useState } from 'react';
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AboutStories = () => {
  const stories = [
    {
      title: "Max's Story:",
      content:
        "Lorem ipsum dolor sit amet consectetur. Sed risus lectus tempus metus. Sed sapien egestas quisque at in eunec. Justo donec aliquet bibendum felis odio laoreet fermentum libero sed. Est pharetra eu at nibhadipiscing erat hac. Lorem ipsum dolor sit amet consectetur. Sed risus lectus tempus metus. Sed sapienegestas quisque at in eu nec.",
      image: "/about-cat-story.jpeg",
      alt: "Adopted orange cat named Max",
    },
    {
      title: "Bella's Story:",
      content:
        "Bella was rescued from an overcrowded shelter where she had spent months hoping for a home. Initially shy and hesitant, she slowly opened up after receiving gentle care and love from her new owners. Today, Bella thrives in a cozy home, going on adventures, making new friends at the park, and being the most loyal companion to her loving family. Her journey is a testament to the transformative power of adoption and patience.",
      image: "/about-dog.jpeg",
      alt: "Adopted dog named Bella with a joyful expression",
    },
    {
      title: "Luna's Journey:",
      content:
        "Luna was abandoned as a kitten. Thanks to a caring family, she now spends her days playing and lounging in the sun.",
      image: "/about-kitten.jpeg",
      alt: "Playful kitten named Luna relaxing at home",
    },
  ];

  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const nextStory = () => {
    setCurrentStoryIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length);
  };

  return (
    <section className="container mx-auto px-6 py-12" aria-labelledby="success-stories-heading">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <figure className="w-full md:w-1/2">
          <Image
            src={stories[currentStoryIndex].image}
            alt={stories[currentStoryIndex].alt}
            width={400}
            height={400}
            className="rounded-3xl object-cover w-full h-[400px]"
            priority
          />
        </figure>

        {/* Story Content */}
        <article className="w-full md:w-1/2" aria-live="polite">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 id="success-stories-heading" className="text-primary text-xl font-medium mb-2">
                Success Stories
              </h3>
              <h2 className="text-4xl font-bold">Uniting Pets</h2>
            </div>
            <div className="flex gap-2">
              <button
                className="w-10 h-10 rounded-full border border-primary flex items-center justify-center"
                aria-label="Previous story"
                onClick={prevStory}
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>
              <button
                className="w-10 h-10 rounded-full border border-primary flex items-center justify-center"
                aria-label="Next story"
                onClick={nextStory}
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">{stories[currentStoryIndex].title}</h3>
          <p className="text-gray-800 mb-6">{stories[currentStoryIndex].content}</p>

          {/* Pagination Dots */}
          <div className="relative mt-auto">
            <div
              className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex gap-2"
              role="tablist"
              aria-label="Select a story"
            >
              {stories.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentStoryIndex(index)}
                  role="tab"
                  aria-selected={currentStoryIndex === index}
                  className={`w-2 h-2 rounded-full cursor-pointer ${
                    currentStoryIndex === index ? "bg-primary" : "bg-[#d9d9d9]"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutStories;
