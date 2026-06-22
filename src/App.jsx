import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import News from "./pages/News";
import DocumentsLegal from "./pages/DocumentsLegal";
import Gallery from "./pages/Gallery";
import Council from "./pages/Council";
import DocumentsOfficial from "./pages/DocumentsOfficial";
import Structure from "./pages/Structure";
import Contacts from "./pages/Contacts";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/documents-legal" element={<DocumentsLegal />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/council" element={<Council />} />
        <Route path="/documents-official" element={<DocumentsOfficial />} />
        <Route path="/structure" element={<Structure />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Layout>
  );
}
