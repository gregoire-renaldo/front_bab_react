import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import List from "./components/List";
import NotFound from "./pages/NotFound";

import BoatDetail from "./pages/BoatDetail";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boats" element={<List />} />
          <Route path="/boats/:boatId" element={<BoatDetail />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
