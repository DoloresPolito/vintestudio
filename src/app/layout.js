import { Fira_Sans, Josefin_Sans } from "next/font/google";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import "./globals.scss";

// const fira = Fira_Sans({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-fira",
// });
const josefina = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jose",
});

export const metadata = {
  title: "VINTE STUDIO",
  description: "Web development",
};
export default function RootLayout({ children }) {
  // <meta
  //   name="viewport"
  //   content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
  // ></meta>;

  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`${josefina.variable} font-sans`}>{children}</body>
      </ThemeProvider>
    </html>


  );
}
