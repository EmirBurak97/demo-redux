import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import DashBoard from "./DashBoard";
import { Route, Routes } from "react-router-dom";
import CartDeteails from "../cart/CartDetails";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Routes>
        <Route path="/" element={<DashBoard></DashBoard>}></Route>
        <Route path="/cart" element={<CartDeteails></CartDeteails>}></Route>
      </Routes>
    </Container>
  );
}

export default App;
