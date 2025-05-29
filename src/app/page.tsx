import Hero from "@/components/home/hero";
import Menu from "@/components/home/menu/pizza-menu";




export default function HomePage() {
  return (
    <section className="p-8 text-center">
      <Hero/>
        <div className="px-6">
          <Menu/>
      </div>
    </section>
  );
}
