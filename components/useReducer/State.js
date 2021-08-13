import { useState } from "react";
import { Container } from "../../styles/useReducer/StateReducer";

const State = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count +1);
  }

  const decrease = () => {
    setCount(count -1);
  }

  return(
    <Container>
      <h2> Apply useState </h2>
      <button
        onClick={decrease}
      >
        -
      </button>
      {count}
      <button
        onClick={increase}
      >
        +
      </button>
    </Container>
  );
}

export default State;