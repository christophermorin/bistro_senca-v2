type Special = {
  id: number;
  day: string;
  content: string;
};

type Review = {
  id: number;
  title: string;
  content: string;
  author: string;
};

export const specials: Special[] = [
  {
    id: 1,
    day: "Monday",
    content:
      "The gateway to the Mediterranean. We invite you to savor the inspirations of this sun-kissed region, where fresh ingredients and aromatic herbs come together to create a delightful culinary experience.",
  },
  {
    id: 2,
    day: "Tuesday",
    content:
      "Bring a symphony of pasta to your table. Our pasta specials vary each week, promising you a delightful surprise as our chefs explore various pasta traditions and flavors.",
  },
  {
    id: 3,
    day: "Wednesday",
    content:
      "Join us for a seafood discovery where our chefs craft a unique seafood special, ensuring that each meal is an exciting journey into the world of maritime tastes.",
  },
  {
    id: 4,
    day: "Thursday",
    content:
      "A global expedition for your taste buds. We draw inspiration from a different corner of the world each week, offering a diverse culinary experience that takes you on a voyage of flavors.",
  },
  {
    id: 5,
    day: "Friday",
    content:
      "Fridays are a canvas for our chef's creativity. Expect an exhilarating surprise as our chef crafts a unique dish, showcasing their talent and passion for culinary innovation.",
  },
  {
    id: 6,
    day: "Saturday",
    content:
      "Our rotating special ensures that every Saturday is an opportunity to savor a rich and fulfilling dish, perfect for your weekend dining pleasure.",
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    title: "Hidden Gems...",
    content:
      "A hidden gem in the heart of the city, Bistro Senca exceeded all my expectations. The food was a culinary journey around the world, and every dish we ordered was a delight to the senses.",
    author: "Aziz Light",
  },
  {
    id: 2,
    title: "Old friends...",
    content:
      "What a delightful find! Bistro Senca felt like a warm hug in the form of a restaurant. The staff here are like old friends, always ready with a smile and a recommendation. I can&apos;t wait to make Bistro Senca my regular spot for special nights out.",
    author: "Nuaght Marvin",
  },
  {
    id: 3,
    title: "Home away from home...",
    content:
      "After a long day of sightseeing, I stumbled upon this charming gem. The cozy ambiance and inviting staff instantly put me at ease, making me feel like I had found a home away from home.",
    author: "Itsa Itsa",
  },
];
