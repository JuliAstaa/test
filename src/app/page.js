"use client";

import { FetchingData } from "@/libs/api";

export default async function Home() {
  const results = await FetchingData("top/anime");

  return (
    <div>
      <ul>
        {results.data.map((nimek) => {
          return <li>{nimek.title}</li>;
        })}
      </ul>
    </div>
  );
}
