import "./globals.css";
import { Toaster } from "react-hot-toast";
import { title } from "@/data/names";

export const metadata = {
  title: title,
  description: "An Artfolio Website done by PC.",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7C7CC" },
    { media: "(prefers-color-scheme: dark)", color: "#5C1A72" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      suppressHydrationWarning={true}  
      className="bg-charcoal text-blush"
      >
        {children}
        <Toaster position="bottom-right" reverseOrder={false} toastOptions={{ duration: 2000 }} limit={3}/>
      </body>
    </html>
  );
}
