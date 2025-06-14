import { fatora, systemPhones } from "../store";
export default function SystemPhones() {
  const { phones } = systemPhones();
  const { addProduct } = fatora();
  return (
    <div className="w-full flex flex-wrap gap-3 justify-center pt-4">
      {phones.map((el) => (
        <button
          onClick={() => addProduct(el)}
          className="btn btn-primary"
          key={el.id}
        >
          {el.name} - ({el.price} $)
        </button>
      ))}
    </div>
  );
}
