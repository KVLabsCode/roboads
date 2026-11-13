"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getRevealText } from "@/lib/countdown";

export default function AnnouncementBar({ initialText }: { initialText: string }) {
  const [text, setText] = useState(initialText);

  useEffect(() => {
    const update = () => setText(getRevealText());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="kv-announce">
      <span>Full reveal January 5, 2027.</span> <span className="kv-announce-count">{text}</span>
      <Link href="/reserve">Reserve</Link>
    </div>
  );
}
