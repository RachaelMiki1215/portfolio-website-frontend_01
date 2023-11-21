// TODO: Finish up this page.

"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, []);

  return (
    <div>
      <h1>Uh-Oh...</h1>
      <p>{error.stack}</p>
    </div>
  );
}
