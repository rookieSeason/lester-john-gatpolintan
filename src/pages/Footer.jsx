import React from "react";

function Footer() {
  return (
    <footer className="bg-white text-gray-700 dark:bg-[#243447] dark:text-gray-300 duration-300">
      <div className="w-screen mx-auto max-w-screen-xl p-4 md:flex md:items-center justify-center">
        <span className="text-sm sm:text-lg">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Lester John Gatpolintan™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
