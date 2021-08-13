import { useReducer } from "react";
import { Container } from "../../styles/useReducer/StateReducer";

const ACTIONS = {
  INCREASE: 'increase',
  DECREASE: 'decrease',
}

const reducer = (state, action) => {
  switch(action.type){
    case 'increase':
      return { count: state.count +1 }
    case 'decrease':
      return { count: state.count -1 }
    default:
      return state
  }
}

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0})

  const add = () => {
    dispatch({ type: ACTIONS.INCREASE })
  }

  const substract = () => {
    dispatch({ type: ACTIONS.DECREASE })
  }

  return(
    <Container>
      <h2> Apply useReducer </h2>
      <button
        onClick={substract}
      >
        -
      </button>
      {state.count}
      <button
        onClick={add}
      >
        +
      </button>
    </Container>
  );
}

export default Reducer;