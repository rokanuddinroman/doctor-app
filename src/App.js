import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home/Home";
import DoctorAppointment from "./components/DoctorAppointment/DoctorAppointment";
import Registration from "./components/Registration/Registration";
import MyAppointments from "./components/MyAppointments/MyAppointments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/doctor-appointment"
          element={<DoctorAppointment />}
        ></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/my-appointments" element={<MyAppointments />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
