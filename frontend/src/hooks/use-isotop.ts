import { useRef } from "react";


export function useIsotop() {
  const isotopContainer = useRef<HTMLDivElement>(null);

  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesLoaded = (await import("imagesloaded")).default;

    if (!isotopContainer.current) return;

    // Initialize Isotope
    const isotope = new Isotope(isotopContainer.current, {
      itemSelector: ".grid-item",
      percentPosition: true,
      layoutMode: "masonry",
      masonry: {
        columnWidth: ".grid-item",
      },
    });

    // Ensure images are loaded before initializing Isotope
    imagesLoaded(isotopContainer.current, () => {
      isotope.layout();
    });

    // Filter items on button click
  }

  return {
    isotopContainer,
    initIsotop,
  };
}
