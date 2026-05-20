import { useState } from "react";
import { ExternalButton } from "./ExternalButton";
import { LANG_COLS } from "../Constants";

export function FlipCard({ repo, width = 300, height = 300 }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(v => !v)}
      style={{
        width,
        height,
        perspective: 1200,
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 600ms cubic-bezier(0.22, 1, 0.36, 1)",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >

        <div
          className="
          absolute inset-0
          border border-white/10
          rounded-[20px]
          overflow-hidden
          [backface-visibility:hidden]
          bg-cover bg-center
          text-white p-5
          flex flex-col justify-between
          bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),var(--bg)]
          dark:bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.85)),var(--bg)]
          will-change-transform
        "
        style={{
          "--bg": `url(${repo.image})`,
        }}
        >
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{ position: "absolute", top: 16, right: 16 }}
          >
            <ExternalButton size={28} />
          </a>

          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <h2 className="m-0 text-xl font-bold">
              {repo.name}
            </h2>

            <div className="mt-3 flex flex-wrap justify-center gap-[6px]">
              {repo.languages.slice(0, 5).map((lang) => (
                <span
                  key={lang}
                  style={{
                    fontSize: 12,
                    padding: "2px 6px",
                    borderRadius: 4,
                    background: LANG_COLS[lang] || "#000",
                  }}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute inset-0
          border border-white/10
          rounded-[20px]
          overflow-hidden
          [backface-visibility:hidden]
          [transform:rotateY(180deg)]
          bg-zinc-600
          dark:bg-zinc-900
          text-white
          p-5 flex flex-col justify-between text-center
          will-change-transform">
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute top-4 right-4"
          >
            <ExternalButton size={28} />
          </a>

          <div>
            <h2 className="font-semibold mt-3">{repo.name}</h2>
            <p className='mt-12 leading-[1.6]'>
              {repo.description}
            </p>
          </div>

          <div className="mb-3">
            ★ {repo.stars} &nbsp; 👁 {repo.watchers} &nbsp; ⚠ {repo.issues}
          </div>
        </div>

      </div>
    </div>
  );
}