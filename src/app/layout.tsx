import type { Metadata } from "next";

// Fonts
import { tungsten } from "@/fonts";

// Styles
import StyledWrapper from "@/app/components/StyledWrapper";
import GlobalStyle from "@/app/styles/globalStyles";

export const metadata: Metadata = {
  title: "xyzphotography",
  description: "The code challenge to wild.as",
  icons:
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📸</text></svg>",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GlobalStyle />
      <body className={tungsten.className}>
        <StyledWrapper>{children}</StyledWrapper>
      </body>
    </html>
  );
}
