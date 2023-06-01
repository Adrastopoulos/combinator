import { PropsWithChildren } from "react";
import Head from "next/head";
import { BlockMath } from "react-katex";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Head>
        <title>Le Combinateur</title>
        <meta name="description" content="Do some math" />
        <link rel="icon" href="/cards.png" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          Le <span className="text-purple-300">Combinateur</span>
        </h1>
        <p className="text-2xl text-gray-700">
          Count probabilities from a standard 52 card deck... or anything,
          really
        </p>
        <div className="mt-3 grid gap-3 pt-3 text-center md:grid-cols-3">
          <TechnologyCard
            name="Combinations"
            description="How many pigeons can fit in that hole?"
          >
            <BlockMath
              math="h(x) = g(f(x)) - f(g(x)) \\
              = c(ax + b) + d - (a(cx + d) + b) \\
              = cax + cb + d - acx - ad - b \\
              = cb + d - ad - b \\
              = b(c - 1) + d(1 - a)"
            />
          </TechnologyCard>
          <TechnologyCard
            name="Sums"
            description="Are there more doors than wheels in the world?"
          >
            <BlockMath
              math="\sum_{i=1}^n \frac{1}{(3i-2)(3i+1)} = \frac{n}{3n+1}
\forall n \in \mathbb{N^{+}}"
            />
          </TechnologyCard>
          <TechnologyCard
            name="Binomial Coefficients"
            description="These words sound cool"
          >
            By the multiplication principle, there are
            <BlockMath math="\binom{13}{1}\left(\binom{51}{39} + \binom{51}{40}\right)" />
            ways to do this.
          </TechnologyCard>
        </div>
        <Link href="/combine/sums/count-in-two-ways" className='mt-5'>
          <span className="btn-primary mt-3 text-xl">Get Started</span>
        </Link>
      </main>
    </>
  );
}

type TechnologyCardProps = PropsWithChildren<{
  name: string;
  description: string;
}>;

const TechnologyCard = ({
  name,
  description,
  children,
}: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="m-auto mt-3 text-sm text-violet-500">{children}</div>
    </section>
  );
};
