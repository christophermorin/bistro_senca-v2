import Image from "next/image"
export function Footer () {
  return (
    <footer className="bg-black p-6 grid grid-cols-2 md:px-8 lg:px-36">
      <div className="flex items-center text-white font-semibold">
        <ul className="flex flex-col gap-4 lg:flex-row md:gap-12">
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reviews</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="grid grid-cols-1 gap-4 text-white justify-items-end">
        <div className="flex items-start gap-4">
          <Image src={"/images/instagram.svg"} alt="" width={25} height={25} />
          <Image src={"/images/facebook.svg"} alt="" width={25} height={25} />
          <Image src={"/images/x.png"} alt="" width={25} height={25} />
        </div>
        <p className="self-end text-xs italic">&copy; 2023 Bistro Sena</p>
      </div>
    </footer>
  )
}