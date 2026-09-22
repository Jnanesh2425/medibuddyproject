import { useLocation, useNavigate } from "react-router-dom";

function MedicineDetail() {
  const location = useLocation();
  const navigate = useNavigate();

  const medicine = location.state?.medicine;

  if (!medicine) {
    return (
      <div className="detail-page min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6">
        <h1 className="mb-6 text-3xl font-bold">Medicine Not Found</h1>

        <button className="rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white" type="button" onClick={() => navigate("/")}>
          Back to Search
        </button>
      </div>
    );
  }

  const { openfda = {} } = medicine;

  const getValue = (field) => {
    return openfda[field]?.join(", ") || "Not available";
  };

  return (
    <div className="detail-page min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6">
      <div className="mx-auto max-w-3xl">
      <button className="mb-8 rounded-lg border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700" type="button" onClick={() => navigate("/")}>
        ← Back to Search
      </button>

      <h1 className="mb-6 text-3xl font-bold sm:text-4xl">{getValue("brand_name")}</h1>

      <div className="detail-card space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p>
          <strong>Generic Name:</strong>{" "}
          {getValue("generic_name")}
        </p>

        <p>
          <strong>Manufacturer:</strong>{" "}
          {getValue("manufacturer_name")}
        </p>

        <p>
          <strong>Product Type:</strong>{" "}
          {getValue("product_type")}
        </p>

        <p>
          <strong>Route:</strong>{" "}
          {getValue("route")}
        </p>

        <p>
          <strong>Application Number:</strong>{" "}
          {getValue("application_number")}
        </p>

        <p>
          <strong>Substance Name:</strong>{" "}
          {getValue("substance_name")}
        </p>

        <p>
          <strong>Product ID:</strong>{" "}
          {getValue("product_id")}
        </p>
      </div>
      </div>
    </div>
  );
}

export default MedicineDetail;