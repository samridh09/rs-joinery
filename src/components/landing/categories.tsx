import React from 'react';

const categories = [
  {
    title: 'Bathroom',
    items: '6 ITEMS',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80',
  },
  {
    title: 'Chair',
    items: '7 ITEMS',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80',
  },
  {
    title: 'Decor',
    items: '17 ITEMS',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80',
  },
  {
    title: 'Lamp',
    items: '5 ITEMS',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80',
  },
];

const Categories = () => {
  return (
    <section id="categories" className="section-padding w-full bg-muted/40">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group relative w-full aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={category.image}
              alt={category.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

            {/* Content Content text overlay at bottom left */}
            <div className="absolute bottom-6 left-6 flex flex-col items-start z-10">
              <h3 className="text-background text-xl font-medium tracking-wide">
                {category.title}
              </h3>
              <p className="text-white/80 text-xs font-semibold tracking-widest mt-1 uppercase">
                {category.items}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
