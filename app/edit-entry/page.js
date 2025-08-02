'use client';

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function EditEntryClient() {
  const searchParams = useSearchParams();
  const index = parseInt(searchParams.get("index"));
  const router = useRouter();

  const [text, setText] = useState("");

  useEffect(() => {
    const entries = JSON.parse(localStorage.getItem("gratitudeEntries")) || [];
    if (entries[index]) {
      setText(entries[index].text);
    }
  }, [index]);

  const handleUpdate = () => {
    const entries = JSON.parse(localStorage.getItem("gratitudeEntries")) || [];
    if (entries[index]) {
      entries[index].text = text;
      localStorage.setItem("gratitudeEntries", JSON.stringify(entries));
    }
    router.push("/Home");
  };

  return (
    <div className="edit-container">
      <h1>Edit Your Gratitude</h1>
      <textarea
        className="edit-textarea"
        rows="5"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={handleUpdate}>Update Entry</button>
    </div>
  );
}

export default function EditEntryPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditEntryClient />
    </Suspense>
  );
}
