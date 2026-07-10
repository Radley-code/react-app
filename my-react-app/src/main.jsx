import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./pages/dashboard";
import Tasks from "./pages/tasks";
import Settings from "./pages/settings";
import './index.css' 
import { ThemeProvider } from "./context/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <ThemeProvider>
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route index element= {<Dashboard />} />
        <Route path="tasks" element= {<Tasks/>} />
        <Route path="settings" element= {<Settings/>} />
       
      </Routes>
     
    </Layout>
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
