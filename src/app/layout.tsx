import type { Metadata } from "next";

// Fonts
import { Inter } from "next/font/google";

// Styles
import StyledComponentsRegistry from "@/components/StyledComponents";
import GlobalStyle from "@/styles/globalStyles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "xyzphotography",
  description: "The code challenge to wild.as",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GlobalStyle />
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
