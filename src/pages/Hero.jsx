import "./Hero.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  useGSAP(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "+=200%",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        }
      });

      tl.fromTo(
        ".mask",
        { scale: 80 },
        { scale: 1, ease: "power1.inOut" }
      );
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero">
      <div className="media">
        <video
          src="assets/videos/HeroVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="mask">
          <img src="assets/images/HeroImage.png" />
        </div>
      </div>
      <div className="hero-content">
        <div className="wrapper">
          <div className="width-adjust" />
        </div>
      </div>
    </section>
  );
};