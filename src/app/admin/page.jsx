'use client';
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy, doc, deleteDoc } from "firebase/firestore";

const ADMIN_EMAIL = "SiumFlimcutt25@gmail.com";
const ADMIN_PASS = "@#--Flimcutt04@$--";

export default function AdminDashboard() {
  // --- 1. LOGIN STATE ---
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [loginError, setLoginError] = useState("");

  // --- 2. DASHBOARD UI STATE ---
  const [activeTab, setActiveTab] = useState("contact"); 

  // --- 3. CONTACTS DATA STATE ---
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState([]);
  const [deleting, setDeleting] = useState(false);

  // --- LOGIN HANDLER ---
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginEmail.trim() === ADMIN_EMAIL && loginPass === ADMIN_PASS) {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Invalid email or password!");
    }
  };

  // --- FETCH CONTACTS ---
  useEffect(() => {
    if (!isLoggedIn) return;
    
    async function fetchContacts() {
      setLoading(true);
      try {
        const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((docu) => {
          data.push({ id: docu.id, ...docu.data() });
        });
        setContacts(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
      setLoading(false);
    }
    fetchContacts();
  }, [isLoggedIn]);

  // --- CONTACTS LOGIC ---
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(contacts.map((c) => c.id));
    } else {
      setSelected([]);
    }
  };

  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

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

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginEmail("");
    setLoginPass("");
  };

  // --- RENDER CONTENT ---
  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Dashboard Overview</h2>
            <p className="text-gray-600">Welcome to the admin panel. Select a section from the left.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-700">{contacts.length}</h3>
                <p className="text-blue-600">Total Messages</p>
              </div>
            </div>
          </div>
        );

      case "services":
        return (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Manage Services</h2>
            <p className="text-gray-500 italic">Service management functionality coming soon...</p>
          </div>
        );

      case "portfolio":
        return (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Manage Portfolio</h2>
            <p className="text-gray-500 italic">Portfolio management functionality coming soon...</p>
          </div>
        );

      case "blog":
        return (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Manage Blog</h2>
            <p className="text-gray-500 italic">Blog management functionality coming soon...</p>
          </div>
        );

      case "contact":
        return (
          <div className="bg-white rounded-lg shadow-lg p-6 relative">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-blue-700">Contact Messages</h2>
              <button
                className={`px-4 py-2 rounded-md font-semibold text-white transition
                  ${selected.length ? "bg-red-600 hover:bg-red-700" : "bg-gray-300 cursor-not-allowed"}
                `}
                disabled={!selected.length || deleting}
                onClick={handleDelete}
              >
                {deleting ? "Deleting..." : `Delete Selected (${selected.length})`}
              </button>
            </div>

            {loading ? (
              <div className="text-center py-10 text-lg">Loading...</div>
            ) : contacts.length === 0 ? (
              <div className="text-center py-10 text-gray-500">No contacts found.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
                  <thead>
                    <tr className="bg-blue-200">
                      <th className="p-3 border-b text-black font-semibold text-center w-12">
                        <input
                          type="checkbox"
                          checked={selected.length === contacts.length && contacts.length > 0}
                          onChange={handleSelectAll}
                        />
                      </th>
                      <th className="p-3 border-b text-black font-semibold text-left">Name</th>
                      <th className="p-3 border-b text-black font-semibold text-left">Email</th>
                      <th className="p-3 border-b text-black font-semibold text-left">Phone</th>
                      <th className="p-3 border-b text-black font-semibold text-left">Country</th>
                      <th className="p-3 border-b text-black font-semibold text-left">Type</th>
                      <th className="p-3 border-b text-black font-semibold text-left w-1/3">Message</th>
                      <th className="p-3 border-b text-black font-semibold text-left">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((c) => (
                      <tr key={c.id} className="bg-white hover:bg-gray-50">
                        <td className="p-3 border-b text-black text-center">
                          <input
                            type="checkbox"
                            checked={selected.includes(c.id)}
                            onChange={() => handleSelect(c.id)}
                          />
                        </td>
                        <td className="p-3 border-b text-black">{c.name}</td>
                        <td className="p-3 border-b text-black">{c.email}</td>
                        <td className="p-3 border-b text-black">{c.phone}</td>
                        <td className="p-3 border-b text-black">{c.country}</td>
                        <td className="p-3 border-b text-black">{c.projectType}</td>
                        <td className="p-3 border-b text-black truncate max-w-xs" title={c.message}>
                            {c.message}
                        </td>
                        <td className="p-3 border-b text-black text-xs whitespace-nowrap">
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
        );
      
      default:
        return <div>Select a section</div>;
    }
  };

  // --- RENDER: LOGIN FORM ---
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 relative">
        {/* FIX: Login পেজেও কালো বার দরকার হতে পারে যদি Navbar এখানেও থাকে */}
        <div className="fixed top-0 left-0 w-full h-24 bg-black z-30" />
        
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-sm flex flex-col gap-5 z-40"
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

  // --- RENDER: MAIN DASHBOARD ---
  return (
    <div className="flex min-h-screen bg-gray-100 pt-24 relative">
      
      {/* --- FIX: NAVBAR BACKGROUND OVERRIDE --- */}
      {/* এই কালো ডিভটি Navbar এর নিচে বসে থাকবে, তাই ট্রান্সপারেন্ট Navbar হলেও কালো দেখাবে */}
      <div 
        className="fixed top-0 left-0 w-full h-24 z-30 pointer-events-none" 
        style={{ backgroundColor: "#181818" }}
      />

      {/* SIDEBAR */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col shrink-0">
        <div className="p-6 text-center border-b border-gray-700">
          <h1 className="text-2xl font-bold tracking-wider">ADMIN</h1>
          <p className="text-xs text-gray-400 mt-1">Control Panel</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <SidebarButton label="Home" active={activeTab === 'home'} onClick={() => setActiveTab('home')} />
          <SidebarButton label="Services" active={activeTab === 'services'} onClick={() => setActiveTab('services')} />
          <SidebarButton label="Portfolio" active={activeTab === 'portfolio'} onClick={() => setActiveTab('portfolio')} />
          <SidebarButton label="Blog" active={activeTab === 'blog'} onClick={() => setActiveTab('blog')} />
          <SidebarButton label="Contact" active={activeTab === 'contact'} onClick={() => setActiveTab('contact')} />
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button 
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-8">
        {renderContent()}
      </main>

    </div>
  );
}

// Helper Component for Sidebar Buttons
function SidebarButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded transition-colors duration-200
        ${active 
          ? "bg-blue-600 text-white shadow-lg" 
          : "text-gray-300 hover:bg-gray-800 hover:text-white"}
      `}
    >
      {label}
    </button>
  );
}