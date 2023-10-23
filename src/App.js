import { BrowserRouter as Router, Routes, Route }  from "react-router-dom"
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Login} from "./pages/Login";
import Store from './Store';
import { Provider } from "react-redux";
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider Store={Store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      </Provider>
    <h1> hello </h1>
    </div>
  );
}

export default App;
