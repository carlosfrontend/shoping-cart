import { Link } from "react-router";
import heroVideo from "../assets/hero.mp4";
import { Button } from "./ui/button";

export const HeroVideo = ({
  title,
  subtitle,
  buttonText,
}: {
  title: string;
  subtitle: string;
  buttonText: string;
}) => {
  return (
    <section className="relative inset-0 h-[82.8dvh] flex items-center justify-center">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full   object-center object-cover aspect-video  h-[82.8dvh]"
      >
        <source src={heroVideo}></source>
      </video>
      <div className="absolute inset-0 bg-black/30 bg-opacity-50">
        <div className="absolute top-0 inset-0 flex flex-col justify-center gap-4 items-center bg-red-950/30 max-h[82.8dvh] ">
          <h1 className="text-5xl md:text-8xl font-black text-center text-accent/90 dark:text-foreground/90">
            <span className="text-primary/85">{title}</span>
          </h1>
          <h2 className="text-xl md:text-3xl text-accent/80 text-center font-semibold dark:text-foreground/80">
            {subtitle}
          </h2>
          <Link to="shop">
            <Button className="font-bold text-lg">{buttonText}</Button>
          </Link>
          <a
            href="https://www.pexels.com/es-es/video/soleado-moda-gafas-de-sol-mujer-6118572/"
            target="_blank"
            rel="noreferer noopener"
          >
            <Button
              variant={"link"}
              className="absolute bottom-1 right-2 text-muted-foreground/80 hover:text-muted-foreground/100 transform hover:scale-105 hover:underline"
            >
              Vídeo from cottonbro studio
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
