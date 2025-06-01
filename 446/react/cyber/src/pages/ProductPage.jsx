import SearchFilters from "../components/SearchFilters";

export default function ProductPage() {
  return (
    <div className="col-12 container d-flex flex-grow-1">
      <div className="col-4  h-100 p-3">
        <SearchFilters />
      </div>
      <div className="col-8 bg-danger h-100 overflow-auto">Result</div>
    </div>
  );
}
