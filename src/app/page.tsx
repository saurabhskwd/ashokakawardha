import Navbar from "../components/navbar"
import CustomCarousel from "../components/carousel"
import Socialbar from "@/components/socialbar";
export default function Home() {
  return (
    <div className="bg-gray-400">
    <Navbar></Navbar>
    <CustomCarousel />
    <Socialbar/>
    </div>
  );
}
