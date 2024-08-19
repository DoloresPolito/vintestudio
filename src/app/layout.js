import { Roboto, Michroma } from "@next/font/google";
import { ThemeProvider } from "../context/Themecontext";
import "./globals.scss";
import "../styles/fonts.css";

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
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#ffffff"/>
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
        <body className={`${michroma.variable} ${roboto.variable}`}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
