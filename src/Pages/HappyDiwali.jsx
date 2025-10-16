import React, { useEffect, useState } from "react";
import Footer from "./Footer";

export default function HappyDiwali() {
  const [name, setName] = useState("");
  const [showContent, setShowContent] = useState(false);
  const wishes = [
    "May your home be filled with light, laughter, and love.",
    "Wishing you prosperity, peace, and endless happiness.",
    "May new opportunities sparkle in your life this year.",
    "Let every diya you light guide you to success.",
    "May your family be blessed with health and harmony.",
    "Wishing you boundless joy and sweet moments.",
    "May your dreams glow brighter than fireworks.",
    "Sending you wealth, wisdom, and wonder.",
    "May your path be illuminated with good fortune.",
    "Wishing you wins, wellness, and warm memories.",
    "May love and kindness surround you always.",
    "Let this festival bring new beginnings your way.",
    "Wishing you success in all your endeavors.",
    "May your heart be full and your days be bright.",
    "Hoping every spark leads to something beautiful.",
    "May peace and positivity light up your life.",
    "Wishing you celebrations as radiant as your smile.",
    "May your efforts bloom like flowers in spring.",
    "Let gratitude and grace guide your journey.",
    "May every wish you make find its way to you.",
    "Wishing you festive vibes and flourishing days.",
    "May you rise, shine, and inspire this season.",
    "Let joy burst into your life like a flower of light.",
    "Wishing you golden moments and gentle blessings.",
  ];
  const [wishIndex, setWishIndex] = useState(0);

  useEffect(() => {
    // Prevent double-prompt across fast refresh / strict mode
    const stored = sessionStorage.getItem("diwali-user-name");
    if (stored && stored.trim() !== "") {
      setName(stored);
    } else {
      const userName = prompt("🎆 Enter your name to receive a Diwali wish 🪔");
      const finalName = userName && userName.trim() !== "" ? userName.trim() : "Friend";
      setName(finalName);
      try { sessionStorage.setItem("diwali-user-name", finalName); } catch {}
    }
    // Small delay for entrance animation
    const t = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWishIndex((idx) => (idx + 1) % wishes.length);
    }, 5000); // ~12 seconds
    return () => clearInterval(interval);
  }, [wishes.length]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[#0b0a1c] via-[#241f4a] to-[#17162b] gradient-animate text-white">
      {/* Festive readability overlay */}
      <div className="absolute inset-0 diwali-overlay pointer-events-none"></div>
      {/* Background Ambient Glows */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-yellow-400/40 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 -right-16 w-96 h-96 bg-orange-500/50 rounded-full blur-3xl opacity-25 animate-breathe"></div>

      {/* Starfield */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 90 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute rounded-full bg-white/90 animate-twinkle"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${(Math.random() * 3).toFixed(2)}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Fireworks Animation (multiple colors) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => {
          const hue = Math.floor(Math.random() * 360);
          const size = Math.random() * 6 + 2; // 2px - 8px
          return (
            <div
              key={`fw-${i}`}
              className="absolute rounded-full animate-firework shadow-[0_0_12px_2px_rgba(255,255,255,0.25)]"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: `hsl(${hue} 90% 60%)`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${(i * 0.25).toFixed(2)}s`,
              }}
            ></div>
          );
        })}
      </div>

      {/* Ground Bombs with Flower/Rose Bursts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => {
          const left = `${Math.random() * 80 + 10}%`;
          const delay = `${(Math.random() * 4 + i * 0.45).toFixed(2)}s`;
          const duration = `${(1.4 + Math.random() * 0.9).toFixed(2)}s`;
          const hue = Math.floor(Math.random() * 360);
          const burstHeight = `${Math.random() * 30 + 28}vh`;
          return (
            <div key={`bomb-${i}`} className="absolute bottom-4" style={{ left }}>
              {/* Bomb body rising */}
              <div
                className="relative w-3 h-3 bg-neutral-200/90 rounded-full shadow-[0_0_12px_rgba(255,255,255,0.25)] animate-bomb-rise"
                style={{ ['--bomb-duration']: duration, animationDelay: delay }}
              >
                {/* fuse */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-yellow-200/80"></div>
                {/* fuse spark */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-yellow-300/90 fuse-spark"></div>
              </div>
              {/* Sparkle burst only */}
              <div className="absolute left-1/2 -translate-x-1/2 w-0 h-0" style={{ bottom: burstHeight, animationDelay: delay }}>
                {Array.from({ length: 20 }).map((_, s) => (
                  <span
                    key={`petal-spark-${i}-${s}`}
                    className="absolute w-1 h-1 rounded-full bg-yellow-200/90 petal-spark"
                    style={{
                      left: `${Math.random() * 46 - 23}px`,
                      top: `${Math.random() * 20 - 10}px`,
                      ['--dx']: `${(Math.random() * 22 - 11).toFixed(1)}px`,
                      ['--dy']: `${(Math.random() * 26 + 10).toFixed(1)}px`,
                      ['--petal-duration']: `${(1.3 + Math.random()).toFixed(2)}s`,
                    }}
                  ></span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Lanterns removed as requested */}

      {/* Confetti Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`confetti-${i}`}
            className="absolute w-1.5 h-1.5 rounded-sm animate-confetti"
            style={{
              backgroundColor: ["#FFD166", "#06D6A0", "#EF476F", "#118AB2"][i % 4],
              left: `${Math.random() * 100}%`,
              animationDelay: `${(Math.random() * 5).toFixed(2)}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Greeting Section */}
      <div className={`z-10 px-6 sm:px-8 ${showContent ? "animate-rise" : "opacity-0"}`}>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.85)] animate-glow mb-3">
          🪔 Happy Diwali 🪔
        </h1>

        <div className="relative inline-block">
          <span className="absolute inset-0 rounded-lg"></span>
          <h2 className="relative px-4 sm:px-6 py-1 text-4xl sm:text-5xl md:text-6xl font-black tracking-wide name-shine">
            {name}
          </h2>
        </div>

        <div className="mt-6 max-w-3xl mx-auto glass-card rounded-xl p-5 sm:p-7 text-gray-100">
          <p className="text-base sm:text-lg md:text-xl text-yellow-200/90 uppercase tracking-wider mb-1">Dear {name}</p>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
            {wishes[wishIndex]}
          </p>
          <p className="mt-3 text-sm sm:text-base text-gray-200/90">New wish every few seconds to keep the spirit glowing ✨</p>
        </div>
      </div>

      {/* Decorative bottom rangoli pattern (responsive) */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 opacity-90">
        <div className="grid grid-cols-7 gap-2 sm:gap-3 items-end">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={`rangoli-${i}`} className="flex items-end justify-center">
              <div
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full"
                style={{ backgroundColor: ["#FFD166", "#06D6A0", "#EF476F", "#F78C6B", "#118AB2", "#8338EC", "#FFBE0B"][i % 7] }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      

      <Footer />
    </div>
  );
}
