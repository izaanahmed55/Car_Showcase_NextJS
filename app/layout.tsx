import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
    title: "Car Hub | Discover the Best Cars",
    description: "Discover the Best Cars in the World",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="relative">
              <Navbar/>
              {children}
              <Footer/>
            </body>
        </html>
    );
}
