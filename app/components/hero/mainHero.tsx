import { PortableText } from "@portabletext/react";
import Blobs from "../fields/blobs";
import Button from "../fields/button";
import "../../../styles/sass/components/hero.scss";

export default function MainHero({ hero }) {
  return (
    <section id="mainHero" className="min-h-screen relative overflow-hidden flex items-center">
      {hero.blobs && <Blobs />}

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div
            className="font-bold leading-tight mt-6 mb-4 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            {hero.advancedText?.content && (
              <PortableText value={hero.advancedText.content} />
            )}
          </div>

          <p
            className="text-2xl md:text-3xl text-muted-foreground mb-6 font-handwritten animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            {hero.subheading}
          </p>

          <div
            className="flex flex-wrap justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {hero.buttons?.map((btn) => (
              <Button key={btn._key} button={btn} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
