import { useState } from "react";

const Exercise2 = () => {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");

  const handleFruitChange = (e) => {
    const selectedFruit = e.target.value;
    setFruit(selectedFruit);

    // Since setFruit is async, log after state update using selectedFruit
    console.log(`${name} selected ${selectedFruit}`);
  };

  return (
    <div>
      <input
        id="name-input"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <select
        id="select-input"
        onChange={handleFruitChange}
        value={fruit}
      >
        <option value="">-- Select a fruit --</option>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Mango">Mango</option>
      </select>
    </div>
  );
};

export default Exercise2;
