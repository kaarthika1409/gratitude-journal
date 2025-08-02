"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields!");
      return;
    }
    
    // For now, just redirect to Home (in a real app, you'd handle registration here)
    router.push("/Home");
  };

  const goToLogin = () => {
    router.push("/");
  };

  return (
    <div className="login-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        <button type="button" onClick={goToLogin} className="secondary-button">
          Already have an account? Login
        </button>
      </form>
    </div>
  );
}