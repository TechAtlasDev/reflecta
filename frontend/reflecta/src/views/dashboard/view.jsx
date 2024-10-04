import Navbar from "./components/navbar";
import Hero from "./components/Hero";

export default function DashboardPage() {
  return (
    <main class='relative min-h-screen max-w-screen overflow-x-hidden bg-slate-950'>
      <div class='absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div>
      <div class='absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div>
      <Navbar />
      <Hero />
    </main>
  );
}
