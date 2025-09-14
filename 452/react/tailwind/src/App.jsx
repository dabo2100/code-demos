import groupImg from './assets/Image Container.png';

export default function App() {
  return (
    <div className="w-full h-dvh bg-[#0A0C1C] flex items-center justify-center">
      <div className="w-[1128px] bg-[#1B1937] h-[442px] flex">
        <div className="w-1/2 h-full  py-16 px-20">
          <h1 className="font-(family-name:--font-inter)  text-white text-4xl font-bold ">
            Get <span className="text-[#AB5CDB]">insights</span> that help your business grow.
          </h1>
        </div>
        <img className="w-1/2 h-full" src={groupImg} />
      </div>
    </div>
  );
}
