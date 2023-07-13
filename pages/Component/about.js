// import React from 'react'

import Link from "next/link";
import { useRouter } from "next/router";

export default function about() {
  const router = useRouter();
  return (
    // Two way to redirect to one page to another page
    <div>
      <Link href="../Component/next">Home</Link>
      <button onClick={() => router.push("../Component/next")}>NextPage</button>
    </div>
  );
}
