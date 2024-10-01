import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-white text-black sticky">
      <Navbar />
      Hello World
    </div>
  );
}
