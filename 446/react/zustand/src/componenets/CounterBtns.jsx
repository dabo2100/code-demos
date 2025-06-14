import { counter, isDark } from "../store";
export default function CounterBtns() {
  const { incrementCounter, decrementCounter } = counter();
  const { toggle } = isDark();
  return (
    <div className="w-full flex gap-3">
      <button onClick={() => incrementCounter()} className="bg-green-500 p-3">
        +
      </button>
      <button onClick={() => decrementCounter()} className="bg-red-400 p-3">
        -
      </button>

      <button onClick={() => toggle()} className="bg-red-400 p-3">
        Togggle
      </button>
    </div>
  );
}
