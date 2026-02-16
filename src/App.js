import {BrowserRouter, Routes,Route} from "react-router-dom"
import './App.css';
import Header from "./components/Header";
import Page404 from "./pages/Page404";
import StreamixPage from "./pages/StreamixPage";
import ItemInfoPage from "./pages/ItemInfoPage";


// npm run build - לייצר אפליקציה

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<StreamixPage />} />
        <Route path="/ItemInfoPage/:id" element={<ItemInfoPage />} />
       <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
