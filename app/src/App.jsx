import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import { LoginProvider } from "./context/LoginContext";
import { AppProvider } from "./context/AppContext";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <BrowserRouter basename="/">
      <Toaster
        position="top-center"
        gutter={8}
        containerClassName="toast rounded-xl"
        containerStyle={{}}
        toastOptions={{
          className: "bg-base-300 text-base-content",
          duration: 5000,
          success: {
            duration: 3000,
            className: "bg-success text-success-content",
            iconTheme: {
              primary: "hsl(var(--suc))",
              secondary: "#fff",
            },
          },
          error: {
            duration: 3000,
            className: "bg-error text-error-content",
          },
        }}
      />
      <LoginProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Not Found</h1>}></Route>
        </Routes>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;
