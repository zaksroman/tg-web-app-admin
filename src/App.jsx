
import Table from "./Routes/Table/Table";
import Form from "./Routes/Form/Form";
import {Routes, Route} from "react-router-dom";
const App = () => (
      <Routes>
          <Route index path={'/'} element={<Table/>}/>
          <Route path={'/form'} element={<Form/>}/>
      </Routes>
)

export default App;
