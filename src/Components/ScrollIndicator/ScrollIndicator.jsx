import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const updateScrollHeight = () => {
      const scrolled = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / totalHeight) * 100;
      setScrollHeight(progress);
    };

    window.addEventListener("scroll", updateScrollHeight);
    return () => window.removeEventListener("scroll", updateScrollHeight);
  }, []);

  return (
    <div className="fixed top-0 right-0 h-screen w-2 bg-transparent z-50">
      <div
        className="bg-pink-300 w-full rounded-full transition-all duration-200 ease-out"
        style={{ height: `${scrollHeight}%` }}
      />
    </div>
  );
};

export default ScrollIndicator;