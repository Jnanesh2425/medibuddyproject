import { useEffect, useRef, useState } from "react";
import SearchBar from "../components/SearchBar";
import MedicineList from "../components/MedicineList";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { searchMedicines } from "../services/medicineApi";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const cache = useRef(new Map());
  const abortController = useRef(null);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const searchQuery = query.trim().toLowerCase();

      if (!searchQuery) {
        setMedicines([]);
        setError("");
        setLoading(false);
        return;
      }

      // Check cache first
      if (cache.current.has(searchQuery)) {
        setMedicines(cache.current.get(searchQuery));
        return;
      }

      // Cancel previous request
      if (abortController.current) {
        abortController.current.abort();
      }

      const controller = new AbortController();
      abortController.current = controller;

      setLoading(true);
      setError("");

      try {
        const results = await searchMedicines(
          searchQuery,
          controller.signal
        );

        cache.current.set(searchQuery, results);
        setMedicines(results);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Something went wrong. Please try again.");
          setMedicines([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSearch = () => {
    setQuery((currentQuery) => currentQuery.trim());
  };

  return (
    <div className="search-page min-h-screen bg-slate-50 px-4 py-10 text-left text-slate-900 sm:px-6">
      <div className="mx-auto max-w-5xl">
      <header className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
          Medicine reference
        </p>
        <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Medicine Search
        </h1>
        <p className="max-w-2xl text-slate-600">
          Search medicine labels by brand name using the FDA database.
        </p>
      </header>

      <SearchBar
        value={query}
        onChange={setQuery}
        onSubmit={handleSearch}
        isLoading={loading}
      />

      {loading && <Loading />}

      {error && <ErrorMessage message={error} />}

      {!loading && !error && <MedicineList medicines={medicines} />}
      </div>
    </div>
  );
}

export default SearchPage;