"use client";

import { useLayoutEffect, useState } from "react";

// The desktop designs are drawn on a 1440px canvas. Between 1024px and 1440px the page is scaled
// down to fit instead of reflowing, so every photo, collage and mosaic stays exactly as designed.
// Below 1024px the responsive tablet/phone layouts take over; above 1440px the page stays centred.
const DESIGN_WIDTH = 1440;
const MIN_WIDTH = 1024;

export function DesignScale({ children }: { children: React.ReactNode }) {
  const [zoom, setZoom] = useState(1);

  useLayoutEffect(() => {
    const update = () => {
      // clientWidth excludes the scrollbar, so the scaled page is exactly 1440 units wide.
      const width = document.documentElement.clientWidth;
      setZoom(width >= MIN_WIDTH && width < DESIGN_WIDTH ? width / DESIGN_WIDTH : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return <div style={zoom === 1 ? undefined : { zoom }}>{children}</div>;
}
