import MedicineCard from "./MedicineCard";

function MedicineList({ medicines }) {
  if (medicines.length === 0) {
    return <p className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">No medicines found.</p>;
  }

  return (
    <div className="medicine-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {medicines.map((medicine, index) => (
        <MedicineCard
          key={index}
          medicine={medicine}
          index={index}
        />
      ))}
    </div>
  );
}

export default MedicineList;