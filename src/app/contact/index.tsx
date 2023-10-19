import Image from "next/image";
export function Contact() {
  return (
    <section id="contactSection" className="flex md:flex-row md:flex-wrap flex-col items-center justify-center gap-10 p-6 md:py-24 md:px-24 lg:px-32">
      <section className="grid grid-cols-2 md:grid-cols-1">
      <div>
        <div className="bg-black h-full p-2 rounded-md shadow-md shadow-black md:px-12">
          {/* One col two sections */}
          <div className="flex flex-col h-full text-white">
            <h4 className="font-bold uppercase md:text-center md:text-xl">Bistro Senna</h4>
            <ul className="grid grid-cols-1 text-white h-full md:gap-32">
              <div className="flex flex-col justify-around md:justify-between">
                <li className="flex items-center">
                  <Image src={"/images/phone.svg"} alt="Phone" width={25} height={20} className="mr-2"/>
                  <p>123.456.789</p>
                </li>
                <li className="flex items-center">
                  <Image src={"/images/location.svg"} alt="Location" width={25} height={20} className="mr-2"/>
                  <p>4211 Street McStreet, NE 0101</p>
                </li>
              </div>
              <div className="flex flex-col justify-around md:justify-between md:col-start-3 md:gap-10">
                <li className="flex items-center">
                  <Image src={"/images/email.svg"} alt="Email" width={25} height={20} className="mr-2"/>
                  <p>bsenna@mail.com</p>
                </li>
                <li className="flex items-center">
                  <Image src={"/images/pointer.svg"} alt="Directions" width={25} height={20} className="mr-2"/>
                  <p>Get directions</p>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <section className="grid grid-cols-1 gap-2 h-full px-5 py-8 text-black md:grid-cols-3 md:justify-between md:border-b border-black">
        <div className="flex flex-col gap-2 h-1/2">
          <div className="grid grid-cols-3">
            <p className="font-semibold">Mon</p>
            <p>7am</p>
            <p>8am</p>
          </div>
          <div className="grid grid-cols-3">
            <p className="font-semibold">Tue</p>
            <p>7am</p>
            <p>8am</p>
          </div>
          <div className="grid grid-cols-3">
            <p className="font-semibold">Wed</p>
            <p>7am</p>
            <p>8am</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 h-1/2 md:col-start-3">
          <div className="grid grid-cols-3 md:justify-items-end">
            <p className="font-semibold">Thu</p>
            <p>7am</p>
            <p>8am</p>
          </div>
          <div className="grid grid-cols-3 md:justify-items-end">
            <p className="font-semibold">Fri</p>
            <p>7am</p>
            <p>8am</p>
          </div>
          <div className="grid grid-cols-3 md:justify-items-end">
            <p className="font-semibold">Sun</p>
            <p>7am</p>
            <p>8am</p>
          </div>
        </div>
      </section>
      </section>

      <section className="flex flex-col justify-center items-center mt-10 md:mt-0 gap-11">
        <p className="text-center w-2/3">
          Book your table now and embark on a culinary adventure that awaits your presence!
        </p>
         <div className="flex justify-center items-center w-44 h-12 bg-black text-white font-semibold uppercase rounded-md shadow-md shadow-black md:h-24 md:w-80 md:text-xl cursor-pointer">
            Book A Table
          </div>
      </section>
    </section>
  );
}
