import Header from "./Components/Header";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactForm from "./Components/ContactForm";
import DataDisplay from "./Components/DataDisplay";
import UpdateContact from "./Components/UpdateContact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path=""
            element={
              <>
                <Header />
                <DataDisplay />
              </>
            }
          ></Route>
        </Routes>
        <Routes>
          <Route path="/ContactForm" element={<ContactForm />}></Route>
        </Routes>
        <Routes>
          <Route path="/UpdateContact/:id" element={<UpdateContact />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
