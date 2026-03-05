import MainHero from "./mainHero"; 
import SubPageHero from "./subPageHero";

export default function Hero({ hero }: { hero: any }) {


  if (!hero) return null;

  switch (hero.heroStyle) {
    case "main-hero":
      return <MainHero hero={hero} />;
    case "sub-page-hero":
      return <SubPageHero hero={hero} />;
    default:
      return <MainHero hero={hero} />; // Default fallback
  }
}
