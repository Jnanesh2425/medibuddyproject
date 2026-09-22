import { useNavigate } from "react-router-dom";

function MedicineCard({ medicine, index }) {
  const navigate = useNavigate();

  const { openfda = {} } = medicine;

  const brandName = openfda.brand_name?.[0] || "Unknown";
  const genericName = openfda.generic_name?.[0] || "Not available";
  const manufacturer = openfda.manufacturer_name?.[0] || "Not available";
  const productType = openfda.product_type?.[0] || "Not available";
  const route = openfda.route?.[0] || "Not available";

  const handleClick = () => {
    navigate(`/medicine/${index}`, {
      state: { medicine },
    });
  };

  return (
    <article className="medicine-card flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md" onClick={handleClick}>
      <h2 className="mb-4 text-xl font-bold text-slate-900">{brandName}</h2>

      <p className="mb-2 text-sm text-slate-600">
        <strong>Generic:</strong> {genericName}
      </p>

      <p className="mb-2 text-sm text-slate-600">
        <strong>Manufacturer:</strong> {manufacturer}
      </p>

      <p className="mb-2 text-sm text-slate-600">
        <strong>Type:</strong> {productType}
      </p>

      <p className="mb-5 text-sm text-slate-600">
        <strong>Route:</strong> {route}
      </p>

      <button className="mt-auto rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700" type="button" onClick={handleClick}>View Details</button>
    </article>
  );
}

export default MedicineCard;