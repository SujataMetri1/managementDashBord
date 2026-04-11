import { useEffect, useRef, useState } from "react";

export default function SearchBar({ onResults }) {
  const inputRef = useRef();
  const [query, setQuery] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const fetchSearch = async () => {
      if (!query) {
        onResults(null); 
        return;
      }

      const res = await fetch(
        `https://dummyjson.com/products/search?q=${query}`
      );
      const data = await res.json();
      onResults(data.products);
    };

    fetchSearch();
  }, [query]);

  return (
    <input
      ref={inputRef}
      placeholder="Search products..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}