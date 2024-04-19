// Fonts
import localFont from "next/font/local";

export const tungsten = localFont({
  src: [
    {
      path: "../fonts/Tungsten-Semibold.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/Tungsten-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
});

export const helvetica = localFont({
  src: [
    {
      path: "../fonts/Helvetica.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});