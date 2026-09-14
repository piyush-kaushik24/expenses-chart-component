import { Logo } from "../assets";

export const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center rounded-xl bg-red-500 p-4">
        <div>
          <h1 className="text-lg font-normal text-red-100">My balance</h1>
          <span className="text-3xl font-semibold text-white">$921.48</span>
        </div>
        <div>
          <a href="">
            <img src={Logo} alt="" className="w-15" />
          </a>
        </div>
      </header>
    </div>
  );
};
