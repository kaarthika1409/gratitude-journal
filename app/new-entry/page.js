"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewEntryPage() {
  const [text, setText] = useState("");
  const router = useRouter();

  const handleSave = () => {
    const date = new Date().toLocaleDateString();
    const existing = JSON.parse(localStorage.getItem("gratitudeEntries")) || [];
    existing.push({ date, text });
    localStorage.setItem("gratitudeEntries", JSON.stringify(existing));
    router.push("/Home");
  };

  return (
    <div className="new-entry-container">
      <h1>Write Your Gratitude</h1>
      <textarea
        className="entry-textarea"
        rows="5"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Today I'm grateful for..."
      />
      <br />
      <button onClick={handleSave}>Save Entry</button>
    </div>
  );
}
