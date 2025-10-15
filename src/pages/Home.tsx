import { Hero } from "@/components/home/Hero";
import { LatestNews } from "@/components/home/LatestNews";
import { Bandeiras } from "@/components/home/Bandeiras";
import { Conquistas } from "@/components/home/Conquistas";
import { CallToAction } from "@/components/home/CallToAction";

const Home = () => {
  return (
    <>
      <Hero />
      <LatestNews />
      <Bandeiras />
      <Conquistas />
      <CallToAction />
    </>
  );
};

export default Home;
