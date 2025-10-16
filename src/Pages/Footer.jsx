import React from "react";

export default function Footer() {
  return (
    <footer className="fixed bottom-12 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="my-3 flex items-center justify-center">
          <div className="glass-card w-full sm:w-auto rounded-full py-2 px-4 text-center text-xs sm:text-sm text-gray-100">
            <span className="opacity-90">Made by </span>
            <a
              href="https://shavuparmar.vercel.app"
              target="_blank"
              rel="noreferrer noopener"
              className="font-semibold text-yellow-300 hover:text-yellow-200 underline underline-offset-4"
            >
              Shavu Parmar
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


