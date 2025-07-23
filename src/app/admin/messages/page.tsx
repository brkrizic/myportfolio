'use client';

import { useState } from 'react';

export default function AdminMessagesPage() {
  const [password, setPassword] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);

  const handleSubmit = async () => {
    try {
      const res = await fetch('/api/admin/messages', {
        headers: {
          'x-admin-password': password,
        },
      });

      if (!res.ok) {
        throw new Error('Unauthorized');
      }

      const data = await res.json();
      setMessages(data);
      setAccessGranted(true);
    } catch (error) {
      alert('Incorrect password or error fetching messages.');
    }
  };

  if (!accessGranted) {
    return (
      <div className="p-6 max-w-md mx-auto">
        <h1 className="text-xl font-bold mb-4">Admin Access</h1>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-2 rounded"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      <ul className="space-y-2">
        {messages.map((msg) => (
          <li key={msg._id} className="border p-2 rounded">
            <strong>{msg.email}</strong>: {msg.message}
            <p>
              {new Date(msg.createdAt).toLocaleString('en-GB', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
