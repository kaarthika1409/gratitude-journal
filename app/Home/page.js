"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [entries, setEntries] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const loadEntries = () => {
      const stored = JSON.parse(localStorage.getItem("gratitudeEntries")) || [];
      setEntries(stored);
    };

    loadEntries();
    window.addEventListener("focus", loadEntries);

    return () => window.removeEventListener("focus", loadEntries);
  }, []);

  const handleDelete = (index) => {
    const updated = [...entries];
    updated.splice(index, 1);
    localStorage.setItem("gratitudeEntries", JSON.stringify(updated));
    setEntries(updated);
  };

  const handleEdit = (index) => {
    router.push(`/edit-entry?index=${index}`);
  };

  return (
    <main className="home-container">
      <h1>Welcome to Gratitude Journal 🌻</h1>
      <button onClick={() => router.push("/new-entry")}>✍️ Write Now</button>
      <ul className="entry-list">
        {entries.map((entry, index) => (
          <li key={index} className="entry-item">
            <strong>{entry.date}</strong>: {entry.text}
            <br />
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
