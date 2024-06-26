import "bootstrap/dist/css/bootstrap.css";
import "@styles/normalize.css";
import "@styles/global.css";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

/**export const metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
} */
