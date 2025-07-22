import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const features = [
  { path: "", label: "Product Listing" },
  { path: "details", label: "Product Details" },
  { path: "variants", label: "Product Variants" },
  { path: "related", label: "Related Products" },
  { path: "recent", label: "Recently Viewed" },
];

const Placeholder = ({ label }) => (
  <div style={{ padding: 32 }}>
    <h2>{label}</h2>
    <p>This is a placeholder for the {label} feature.</p>
  </div>
);

function App() {
  return (
    <Router>
      <header style={{ background: '#388e3c', color: '#fff', padding: 16 }}>
        <h1 style={{ margin: 0 }}>Catalog Microfrontend</h1>
        <nav style={{ marginTop: 8 }}>
          {features.map((f, i) => (
            <Link key={f.label} to={`/${f.path}`} style={{ color: '#fff', marginRight: 16 }}>
              {f.label}
            </Link>
          ))}
        </nav>
      </header>
      <main style={{ padding: 24 }}>
        <Routes>
          <Route path="/" element={<Placeholder label="Product Listing" />} />
          <Route path="/details" element={<Placeholder label="Product Details" />} />
          <Route path="/variants" element={<Placeholder label="Product Variants" />} />
          <Route path="/related" element={<Placeholder label="Related Products" />} />
          <Route path="/recent" element={<Placeholder label="Recently Viewed" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App; 