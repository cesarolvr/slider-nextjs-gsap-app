import type { Metadata } from "next";

// Fonts
import { tungsten } from "@/fonts";

// Styles
import StyledComponentsRegistry from "@/app/components/StyledComponents";
import GlobalStyle from "@/app/styles/globalStyles";

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
      <body className={`${tungsten.className}`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
