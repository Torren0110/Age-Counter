import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [age, setAge] = useState<String>("0");

  const DOB = new Date("5/17/2002");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = now.getTime() - DOB.getTime();
      const daysDifference = (timeDifference / (365 * 24 * 60 * 60 * 1000)).toFixed(8);

      setAge(daysDifference);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main>
      <Counter age={age} />
    </main>
  );
}

export default App;
