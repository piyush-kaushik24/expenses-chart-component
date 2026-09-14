import { useState } from "react";
import { chartData } from "../Data/data";

export const Chart = () => {
  const [getId, setGetId] = useState<string | null>(null);
  const chart = chartData;
  let largestAmount = 0;

  chart.forEach((amount) => {
    if (amount.amount > largestAmount) {
      largestAmount = amount.amount;
    }
  });

  return (
    <div className="rounded-xl bg-white px-4">
      <h2 className="text-brown-950 pt-4 pb-14 text-2xl font-bold">
        Spending - Last 7 days
      </h2>
      <ul className="flex justify-between border-b-2 border-red-100 pb-6">
        {chart.map(({ day, amount }) => (
          <li key={day} className="flex h-40 w-8 flex-col justify-end">
            <div
              onClick={() => setGetId(day)}
              aria-pressed={day === getId}
              aria-label={`You spending for this  ${day} is ${amount}  `}
              className={`${largestAmount === amount ? "bg-blue-300" : "bg-red-500"} group relative rounded-md hover:cursor-pointer hover:opacity-90`}
              style={{
                height: `${((amount / largestAmount) * 100).toFixed(2)}%`,
              }}
            >
              <span
                className={`${day === getId ? "" : "hidden"} bg-brown-950 absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full rounded-lg px-1 py-2 text-sm font-bold text-white group-hover:block`}
              >
                ${amount}
              </span>
            </div>
            <span>{day}</span>
          </li>
        ))}
      </ul>
      <div className="py-6">
        <h3 className="text-brown-400">Total this month</h3>
        <div className="flex items-center justify-between">
          <span className="text-brown-950 text-4xl font-bold">$478.33</span>
          <span className="flex flex-col">
            <span className="text-brown-950 self-end font-semibold">+2.4%</span>
            <span className="text-brown-400">from the last month</span>
          </span>
        </div>
      </div>
    </div>
  );
};
