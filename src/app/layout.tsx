import Head from "next/head";
import "../styles/globals.css";
import "katex/dist/katex.min.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Le Combinateur</title>
        <meta name="description" content="Do some math" />
        <link rel="icon" href="/cards.png" />
      </Head>
      <body>
        <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
