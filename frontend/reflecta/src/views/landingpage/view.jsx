import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function LandingPage() {
  return (
    <main className="max-w-full overflow-x-hidden">
      <Navbar />
      <Hero />
    </main>
  )
}