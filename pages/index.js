// import React from 'react'

import Link from "next/link";

export default function index() {
  return (
    <div>
      <h1>Home page</h1>
      <div>
        <Link href="/Component/about">ABOUT PAGE</Link>
      </div>
    </div>
  );
}
