import { Button } from "flowbite-react";
import { useState } from "react";

export default function ButtonComponent({ title }) {
  const [count, setCount] = useState(0);
  // let count = 0;

  // arrow function
  const handleCount = () => {
    setCount(count + 1); // count++
    console.log(count);
  };
  // }
  return (
    <>
      <Button onClick={handleCount} color="blue">
        {count}
      </Button>
    </>
  );
}
