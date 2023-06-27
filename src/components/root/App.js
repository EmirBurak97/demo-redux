import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import DashBoard from "./DashBoard";
import { Route, Routes } from "react-router-dom";
import CartDetails from "../cart/CartDetails";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Routes>
        <Route path="/" element={<DashBoard></DashBoard>}></Route>
        <Route path="/cart" element={<CartDetails></CartDetails>}></Route>
        <Route path="/saveproduct/:productId" element={<AddOrUpdateProduct></AddOrUpdateProduct>}></Route>
      </Routes>
    </Container>
  );
}

export default App;
