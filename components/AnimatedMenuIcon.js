"use client";

export default function AnimatedMenuIcon({ className, toggleMenu, handler }) {

  return (
    <button
      className={`relative w-10 h-10 text-primary focus:outline-none ${className}`}
      onClick={handler}
    >
      <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span
          className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
            toggleMenu ? "rotate-45 text-accent" : "-translate-y-1.5"
          }`}
        ></span>
        <span
          className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
            toggleMenu ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
            toggleMenu ? "-rotate-45 text-accent" : "translate-y-1.5"
          }`}
        ></span>
      </div>
    </button>
  );
}