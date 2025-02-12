// src/components/ProjectsCarousel.jsx
import React, { useRef } from 'react';

function ProjectsCarousel() {
  const scrollContainerRef = useRef(null);

  // Smoothly scroll the container by +/- some px
  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -400, behavior: 'smooth' });
  };
  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-base-200 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>

      {/* Carousel Container */}
      <div className="relative px-8">
        {/* Left Arrow */}
        <button
          className="btn btn-circle absolute left-0 top-1/2 -translate-y-1/2"
          onClick={scrollLeft}
        >
          ❮
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollContainerRef}
          className="carousel flex gap-6 overflow-x-auto scroll-smooth"
        >
          {/* Card 1 */}
          <div className="card w-80 bg-base-100 shadow-xl flex-shrink-0">
            <figure>
              {/* Replace with your project image */}
              <img src="https://placeimg.com/400/225/tech" alt="Project 1" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Project 1</h2>
              <p>A short description of Project 1 goes here.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View More</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card w-80 bg-base-100 shadow-xl flex-shrink-0">
            <figure>
              <img src="https://placeimg.com/400/225/nature" alt="Project 2" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Project 2</h2>
              <p>Short description for Project 2.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View More</button>
              </div>
            </div>
          </div>

          {/* Add more cards as desired... */}
        </div>

        {/* Right Arrow */}
        <button
          className="btn btn-circle absolute right-0 top-1/2 -translate-y-1/2"
          onClick={scrollRight}
        >
          ❯
        </button>
      </div>
    </section>
  );
}

export default ProjectsCarousel;
