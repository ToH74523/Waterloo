import "./styles.css";

export const metadata = {
  title: "Melonen-Klanglabor — Technischer Projektplan",
  description: "Vom Klopfton zur fundierten Kaufentscheidung."
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
