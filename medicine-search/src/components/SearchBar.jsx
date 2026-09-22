function SearchBar({ value, onChange, onSubmit, isLoading }) {
  return (
    <form className="search-bar mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6" onSubmit={onSubmit}>
      <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="medicine-search">
        Search by brand name
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          className="min-w-0 flex-1 rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          id="medicine-search"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Try ibuprofen or aspirin"
        />
        <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300" type="submit" disabled={isLoading || !value.trim()}>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>
    </form>
  )
}

export default SearchBar
