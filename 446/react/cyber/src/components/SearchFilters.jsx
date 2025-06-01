import { useState } from "react";

export default function SearchFilters() {
  const [filters] = useState([
    "smartphones",
    "laptops",
    "skincare",
    "sunglasses",
    "motorcycle",
    "lighting",
    "furniture",
    "men shirts",
    "women bags",
  ]);

  return (
    <div className="col-12 d-flex flex-column">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Categories
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <input className="form-control" />
              {filters.map((el, index) => (
                <div key={index} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkDefault"
                  />
                  <label className="form-check-label" for="checkDefault">
                    {el}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}