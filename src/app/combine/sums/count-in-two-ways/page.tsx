"use client";

import { useState } from "react";
import { BlockMath } from "react-katex";
import useSWR from "swr";

type ResultProps = {
  expr1: string;
  expr2: string;
};
function Result({ expr1, expr2 }: ResultProps) {
  const { data, error, isLoading } = useSWR(
    `/api/query?expr1=${encodeURIComponent(expr1)}&expr2=${encodeURIComponent(
      expr2
    )}`,
    (url) => fetch(url).then((res) => res.json())
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>;
  }

  return (
    <div>
      <div className="mockup-code">
        <pre data-prefix="$">
          <code>{JSON.stringify(data, null, "\t")}</code>
        </pre>
      </div>
    </div>
  );
}

export default function Page() {
  const [expr1, setExpr1] = useState<string>("");
  const [expr2, setExpr2] = useState<string>("");

  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl font-extrabold leading-normal text-gray-700">
        Count in <span className="text-purple-300">two</span> ways
      </h1>
      <p>
        In combinatorics, double counting, also called counting in two ways, is
        a combinatorial proof technique for showing that two expressions are
        equal by demonstrating that they are two ways of counting the size of
        one set.
      </p>
      <div className="mt-8 flex justify-between gap-4">
        <div className="flex-1">
          <div className="font-bold">First Expression</div>
          <textarea
            value={expr1}
            onChange={(e) => setExpr1(e.target.value)}
            className="h-32 w-full rounded bg-black p-1 font-mono text-white"
          />
        </div>
        <div className="flex-1">
          <div className="font-bold">Second Expression</div>
          <textarea
            value={expr2}
            onChange={(e) => setExpr2(e.target.value)}
            className="h-32 w-full rounded bg-black p-1 font-mono text-white"
          />
        </div>
      </div>
      <div>
        <div className="font-bold">Result</div>
        <BlockMath math={expr1 + " = " + expr2} />
      </div>
      <Result expr1={expr1} expr2={expr2} />
    </div>
  );
}
