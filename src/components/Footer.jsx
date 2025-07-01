import React from "react";

const Footer = () => (
  <footer className="relative w-full py-6 mt-12 bg-gray-900 text-gray-400 text-center border-t border-pink-500/20 z-10">
    <div className="container mx-auto px-6">
      <span>&copy; {new Date().getFullYear()} Suman Tachamo. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer; 