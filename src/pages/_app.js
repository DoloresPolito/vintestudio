import { AnimatePresence } from "framer-motion";

import { Inter, Montserrat } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "VINTE STUDIO",
  description: "Web development",
};

function MyApp({ Component, pageProps, router }) {
  return (
    <div>
      <AnimatePresence mode="wait">
        <Component
          key={router.route}
          {...pageProps}
          className={` ${inter.variable} ${montserrat.variable} font-sans`}
        />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
