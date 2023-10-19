export function About() {
  return (
    <div id="aboutSection" className="grid grid-cols-1 bg-about bg-no-repeat bg-cover bg-center md:bg-aboutLg md:grid-cols-6">
      {/* <div className="md:flex flex-wrap md:justify-around md:col-span-6"> */}
        <section className="md:col-span-2 md:col-start-2  md:py-32">
      <div className="grid justify-center mt-11 lg:mt-0 md:col-span-3 md:col-start-2 md:justify-start">
        <div className="w-80 h-14 bg-black rounded-md shadow-md shadow-black  md:w-full md:h-24 md:px-20">
          <h1 className="flex justify-center items-center h-full text-white uppercase text-xl font-medium md:text-4xl">
            About Bistro Sena
          </h1>
        </div>
      </div>
          <div className="grid grid-cols-1 bg-black/80 text-white italic font-thin gap-4 px-9 py-11 mt-28 mb-11 shadow-lg shadow-black md:mb-0 md:col-span-2  md:text-2xl">
            <p>
              Welcome to Bistro Senna, a place dedicated to the pure joy of life. Our culinary inspiration knows no borders, bringing together global flavors in perfect harmony. 
            </p>
            <p>
            Whether you're gathering with friends or seeking a serene escape, Bistro Senna invites you to unwind and experience the essence of happiness.
            </p>
            <p>
              Join us in celebrating the magic of food and the embrace of companionship. Taste the world. Be at Bistro Senna.
            </p>
          </div>
        </section>
        <section className="grid grid-cols-1 justify-items-center items-end px-20 py-7 bg-white md:bg-white md:items-center md:col-start-5 md:col-span-1 md:p-0">
          <div className="grid grid-cols-1 justify-items-center gap-5 md:gap-0 ">
            <p className="text-center md:text-2xl md:row-start-2 md:text-black md:p-4">
              Bistro Senna boasts a rich heritage of culinary excellence that spans decades.
            </p>
            <div className="flex justify-center items-center w-44 h-12 bg-black text-white font-semibold uppercase rounded-md shadow-md shadow-black ring-1 ring-white md:mt-10 md:h-16 md:w-2/3 md:text-xl md:row-start-3 cursor-pointer">
              Read More
            </div>
          </div>
        </section>
      {/* </div> */}
    </div>
  );
}
