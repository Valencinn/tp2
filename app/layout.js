import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Recetas | Tu página n1 de cocina",
  description: "Explora los mejores sabores del mundo con nuestras recetas fáciles de seguir.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
