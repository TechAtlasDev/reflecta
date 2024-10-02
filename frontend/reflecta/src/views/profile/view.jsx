import Navbar from "../dashboard/components/navbar";
import Panel from "./components/panel";

export default function ProfilePage() {
  return (
    <main>
      <Navbar />
      <section className='flex flex-col items-center'>
        <Panel />
      </section>
    </main>
  );
}
