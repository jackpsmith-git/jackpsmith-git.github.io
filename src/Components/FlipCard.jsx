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
          className="border border-white/10"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 20,
            overflow: "hidden",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",

            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),
              url(${repo.image})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",

            color: "white",
            padding: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
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

          <div className="grid h-screen place-items-center">
            <h2 className="m-0 justify-center text-center position-middle text-xl font-bold">{repo.name}</h2>
            <div className="flex flex-wrap position-middle gap-[6px] mb-[10px]">
              {repo.languages.slice(0, 5).map(lang => (
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

        <div
          className="border border-white/10"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 20,
            overflow: "hidden",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",

            background: "rgb(20, 20, 20)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",

            color: "white",
            padding: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
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

          <div>
            <h2 style={{ margin: 0 }}>{repo.name}</h2>
            <p style={{ marginTop: 12, lineHeight: 1.6 }}>
              {repo.description}
            </p>
          </div>

          <div>
            ★ {repo.stars} &nbsp; 👁 {repo.watchers} &nbsp; ⚠ {repo.issues}
          </div>
        </div>

      </div>
    </div>
  );
}