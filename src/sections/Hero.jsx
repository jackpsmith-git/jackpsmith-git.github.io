import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = useRef(null);
  const maskRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width:0px)", () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "+=200%",
              scrub: 1.2,
              pin: true,
              anticipatePin: 1,
            },
          });

          tl.fromTo(
            maskRef.current,
            { scale: 100 },
            { scale: 1, ease: "power1.inOut" }
          );

          return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
          };
        });

        // mm.add("(max-width: 1000px)", () => {
        //   gsap.set(maskRef.current, { scale: 1 });
        // });

        ScrollTrigger.refresh();
      }, heroRef);

      return () => ctx.revert();
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative overflow-hidden w-screen h-dvh lg:scale-y-[1.02]"
    >
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-screen h-dvh object-cover object-center"
          src="assets/videos/HeroVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div
          ref={maskRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
        >
          <img
            className="w-screen h-dvh object-cover block invert dark:invert-0 transition-all duration-700"
            src="assets/images/HeroImage.svg"
            alt="hero mask"
          />
        </div>
      </div>

      <div className="relative z-30 opacity-0">
        <div className="width-adjust" />
      </div>
    </section>
  );
};