import { Roboto, Michroma } from "@next/font/google";
import { ThemeProvider } from "../context/Themecontext";
import "./globals.scss";

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michroma",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "VINTE STUDIO",
  description: "Web development",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Michroma&display=swap"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <ThemeProvider>
        <body className={`${michroma.variable} ${roboto.variable}`}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
