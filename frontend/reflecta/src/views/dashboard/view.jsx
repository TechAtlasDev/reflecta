import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function DashboardPage() {
  return (
    <main class='min-h-screen max-w-screen overflow-x-hidden bg-slate-950'>
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
