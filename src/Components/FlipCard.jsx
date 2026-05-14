import { useState } from "react";

export function FlipCard({
  frontContent,
  backContent,
  width = 300,
  height = 200,
  borderRadius = 20,
  perspective = 1200,
  flipDuration = 600,
  style = {},
}) {
  const [flipped, setFlipped] = useState(false);

  const containerStyle = {
    width,
    height,
    perspective,
    cursor: "pointer",
    position: "relative",
    overflow: "visible",
    backgroundColor: "transparent",
    ...style,
  };

  const innerStyle = {
    width: "100%",
    height: "100%",
    position: "relative",
    WebkitTransformStyle: "preserve-3d",
    transition: `transform ${flipDuration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
    transform: flipped
      ? "translateZ(0) rotateY(180deg)"
      : "translateZ(0) rotateY(0deg)",    
    willChange: "transform",
  };

  const sideStyle = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    transformStyle: "preserve-3d",
    WebkitTransformStyle: "preserve-3d",
    outline: "1px solid transparent",
    borderRadius,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
  };

  const frontStyle = {
    ...sideStyle,
    transform: "rotateY(0deg) translateZ(0.1px)",
    background: "#ffffff",
    color: "#111",
    border: "1px solid rgba(0,0,0,0.08)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
  };

  const backStyle = {
    ...sideStyle,
    transform: "rotateY(180deg) translateZ(0.1px)",
    background: "#111827",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
    
    color: '#fff',

    background: 'rgba(20, 20, 20, 0.55)',
    WebkitBackdropFilter: blur('14px'),
    backdropFilter: blur('14px'),

    border: "1px solid rgba(255, 255, 255, 0.12)",

    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.0)",

    minHeight: '100%',
    cursor: 'pointer',
  };

  return (
    <div
      style={containerStyle}
      onClick={() => setFlipped((v) => !v)}
    >
      <div style={innerStyle}>
        <div style={frontStyle}>{frontContent}</div>
        <div style={backStyle}>{backContent}</div>
      </div>
    </div>
  );
}