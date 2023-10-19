export function Hero() {
  return (
    <main id="homeSection" className="bg-hero h-full bg-no-repeat bg-cover bg-center pt-[42px] relative">
      <div className="bg-black/60 absolute h-full blur-3xl w-full z-10"></div>
      {/* <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-6 z-20"> */}
      <div className="grid grid-cols-1 h-full items-center z-20 md:grid-cols-6">
        <section className="grid grid-cols-1 p-9 justify-items-center z-20 md:col-start-2 md:col-end-5 md:p-0 md:justify-items-start">
          <div className="w-80 h-14 bg-black rounded-md md:w-96 md:h-32 md:bg-transparent">
            <h1 className="flex justify-center items-center h-full text-white text-3xl font-medium uppercase md:text-5xl md:justify-start">
              Bistro Sena
            </h1>
          </div>
          <div className="self-end md:w-3/4 md:mt-10">
            <p className="text-white italic font-thin text-center mt-12 md:text-4xl md:text-start md:font-extralight md:mt-0">
              Embrace the essence of life at Bistro Senna, where global flavors
              unite in culinary perfection. Come, relax, and let the magic of
              food and friendship ignite your happiness. Taste the world.
            </p>
          </div>
        </section>
        <section className="grid grid-cols-1 grid-rows-4 gap-5 justify-items-center z-20 md:col-start-5">
          <div className="flex justify-center items-center w-24 h-12 bg-black text-white font-semibold uppercase rounded-md shadow-md shadow-black ring-1 ring-white md:h-24 md:w-64 md:text-xl md:row-start-3 cursor-pointer">
            Menu
          </div>
          <div className="flex justify-center items-center w-44 h-12 bg-black text-white font-semibold uppercase rounded-md shadow-md shadow-black ring-1 ring-white md:h-24 md:w-80 md:text-xl md:row-start-4 cursor-pointer">
            Book a Table
          </div>
        </section>
      </div>
    </main>
  );
}
