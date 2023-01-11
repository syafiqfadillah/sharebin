import Searchbin from "./Searchbin";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Searchbin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
