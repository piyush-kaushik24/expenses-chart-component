import { Chart } from "./components/Chart";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <div>
      <div className="mx-auto py-10 flex min-h-screen max-w-100 flex-col justify-center gap-4 px-4">
        <Header />
        <main>
          <Chart />
        </main>
      </div>
      <Footer />
    </div>
  );
};
