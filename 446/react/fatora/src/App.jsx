import { useEffect } from "react";
import Fatora from "./componenets/Fatora";
import SystemPhones from "./componenets/SystemPhones";

export default function App() {
  useEffect(() => {
    let phones = [
      { id: 1, name: "iPhone x", price: 300 },
      { id: 2, name: "iPhone 11", price: 1500 },
      { id: 3, name: "iPhone 12", price: 750 },
      { id: 4, name: "iPhone 13", price: 200 },
      { id: 5, name: "iPhone 14", price: 6000 },
    ];

    // filter
    // let final = phones.filter((el, index) => {
    //   return el.price < 1000;
    // });

    let final = phones.some((el) => {
      return el.price == 7500;
    });

    console.log(final);
  }, []);

  return (
    <div className="w-full h-[100vh] flex justify-center">
      <div className="container flex flex-col gap-3">
        <SystemPhones />
        <Fatora />
      </div>
    </div>
  );
}
