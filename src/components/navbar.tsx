
export default function Navbar() {
  return (
    <nav className=" h-20 absolute z-10 flex justify-between items-center p-4 bg-zinc-500 w-full text-white">
      <div className="">
        <h1 className="text-3xl font-black">ASHOKA PUBLIC SCHOOL</h1>
      </div>
      <div className="">
        <ul className="flex space-x-4 justify-between">
          <li className="text-md"><a href="#">HOME</a></li>
          <li className="text-md"><a href="#">MENDATORY DOCUMENTS</a></li>
          <li className="text-md"><a href="#">ABOUT US</a></li>
          <li className="text-md"><a href="#">MESSAGE FROM PRINCIPAL</a></li>
          <li className="text-md"><a href="#">FACILITIES</a></li>
          <li ><a href="#" className="text-md">GALLERY</a></li>
        </ul>
      </div>
    </nav>
  );
}
