import Reducer from "../../components/useReducer/Reducer";
import State from "../../components/useReducer/State";
import { Container, PractiseContainer } from "../../styles/useReducer/Main";
import { ReturnDownBackOutline } from 'react-ionicons'
import { useRouter } from "next/dist/client/router";

const Main = () => {
  const router = useRouter();
  
  const returnMenu = () => {
    router.push('/')
  }

  return(
    <Container>
      <button
        onClick={returnMenu}
      >
        <ReturnDownBackOutline />
      </button>
      <h1> Entenda o useReducer hook</h1>
      <PractiseContainer>
        <State />
        <Reducer />
      </PractiseContainer>
      <h2> Porque usar useReducer? </h2>
    </Container>
  );
}

export default Main;