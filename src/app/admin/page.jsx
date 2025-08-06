'use client';
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy, doc, deleteDoc } from "firebase/firestore";

const ADMIN_EMAIL = "SiumFlimcutt25@gmail.com";
const ADMIN_PASS = "@#--Flimcutt04@$--";

export default function AdminContacts() {
  // Login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [loginError, setLoginError] = useState("");

  // Table state
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState([]);
  const [deleting, setDeleting] = useState(false);

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      loginEmail.trim() === ADMIN_EMAIL &&
      loginPass === ADMIN_PASS
    ) {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Invalid email or password!");
    }
  };

  // Fetch contacts after login
  useEffect(() => {
    if (!isLoggedIn) return;
    async function fetchContacts() {
      setLoading(true);
      const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const data = [];
      querySnapshot.forEach((docu) => {
        data.push({ id: docu.id, ...docu.data() });
      });
      setContacts(data);
      setLoading(false);
    }
    fetchContacts();
  }, [isLoggedIn]);

  // Handle select all
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(contacts.map((c) => c.id));
    } else {
      setSelected([]);
    }
  };

  // Handle single select
  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  // Delete selected contacts
  const handleDelete = async () => {
    if (!selected.length) return;
    if (!window.confirm("Are you sure you want to delete selected contacts?")) return;
    setDeleting(true);
    try {
      await Promise.all(
        selected.map((id) => deleteDoc(doc(db, "contacts", id)))
      );
      setContacts((prev) => prev.filter((c) => !selected.includes(c.id)));
      setSelected([]);
    } catch (err) {
      alert("Failed to delete. Try again.");
    }
    setDeleting(false);
  };

  // Login form
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300">
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-sm flex flex-col gap-5"
          style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
        >
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-2">Admin Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={loginEmail}
            onChange={e => setLoginEmail(e.target.value)}
            required
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={loginPass}
            onChange={e => setLoginPass(e.target.value)}
            required
          />
          {loginError && (
            <div className="text-red-600 text-center text-sm">{loginError}</div>
          )}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
          >
            Enter
          </button>
        </form>
      </div>
    );
  }

  // Admin table
  return (
    <div className="min-h-screen bg-gray-100 p-4 mt-24">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 relative">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Contact Messages</h1>
        {/* Delete Button */}
        <button
          className={`absolute top-6 right-6 px-4 py-2 rounded-md font-semibold text-white transition
            ${selected.length ? "bg-red-600 hover:bg-red-700" : "bg-gray-300 cursor-not-allowed"}
          `}
          disabled={!selected.length || deleting}
          onClick={handleDelete}
        >
          {deleting ? "Deleting..." : `Delete Selected (${selected.length})`}
        </button>
        {loading ? (
          <div className="text-center py-10 text-lg">Loading...</div>
        ) : contacts.length === 0 ? (
          <div className="text-center py-10 text-gray-500">No contacts found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
              <thead>
                <tr className="bg-blue-200">
                  <th className="p-3 border-b text-black font-semibold">
                    <input
                      type="checkbox"
                      checked={selected.length === contacts.length && contacts.length > 0}
                      onChange={handleSelectAll}
                      aria-label="Select all"
                    />
                  </th>
                  <th className="p-3 border-b text-black font-semibold">Name</th>
                  <th className="p-3 border-b text-black font-semibold">Email</th>
                  <th className="p-3 border-b text-black font-semibold">Phone</th>
                  <th className="p-3 border-b text-black font-semibold">Country</th>
                  <th className="p-3 border-b text-black font-semibold">Project Type</th>
                  <th className="p-3 border-b text-black font-semibold">Message</th>
                  <th className="p-3 border-b text-black font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((c) => (
                  <tr key={c.id} className="bg-white">
                    <td className="p-3 border-b text-black text-center">
                      <input
                        type="checkbox"
                        checked={selected.includes(c.id)}
                        onChange={() => handleSelect(c.id)}
                        aria-label="Select row"
                      />
                    </td>
                    <td className="p-3 border-b text-black">{c.name}</td>
                    <td className="p-3 border-b text-black">{c.email}</td>
                    <td className="p-3 border-b text-black">{c.phone}</td>
                    <td className="p-3 border-b text-black">{c.country}</td>
                    <td className="p-3 border-b text-black">{c.projectType}</td>
                    <td className="p-3 border-b text-black">{c.message}</td>
                    <td className="p-3 border-b text-black text-xs">
                      {c.createdAt?.toDate
                        ? c.createdAt.toDate().toLocaleString()
                        : c.createdAt
                        ? new Date(c.createdAt).toLocaleString()
                        : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}