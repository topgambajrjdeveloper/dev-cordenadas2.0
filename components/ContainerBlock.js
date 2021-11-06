import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();
  const Year = new Date();
  const anio = Year.getFullYear();
  const meta = {
    title: "Julián Rodríguez - Full-Stack Developer Python ReactsJs",
    description: `Mi nombre es Julián Rodríguez, soy desarrollor junior de software freelance de aplicaciones y web. Madrid (España)`,
    image: "/avatar_julian.png",
    type: "website",
    date: 2020 | { anio },
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://dev-cordenadas.xyz${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://dev-cordenadas.xyz${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Julián Rodríguez" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DCordenadas" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
