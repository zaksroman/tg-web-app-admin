import ProductList from "./Routes/Table/ProductList";
import NewProduct from "./Routes/Form/NewProduct";
import EditProduct from "./Routes/EditProduct/EditProduct";
import {Routes, Route} from "react-router-dom";


const App = () => (
      <Routes>
          <Route index path={'/'} element={<ProductList/>}/>
          <Route path={'/newProduct'} element={<NewProduct/>}/>
          <Route path={'/editProduct/:id'} element={<EditProduct/>}/>
      </Routes>
)

export default App;
