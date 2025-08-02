import "../styles/global.css"; 
export const metadata = {
  title: "Gratitude Journal",
  description: "Track your gratitude entries",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
