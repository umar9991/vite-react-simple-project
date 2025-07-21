import LoginPage from "@/features/auth/login"
import Header from "@/layout/Header"
import MainLayout from "./layout/MainLayout"
import AppRoutes from "./routes/AppRoutes"
import { BrowserRouter } from "react-router-dom"
import React from 'react';
import { Toaster } from "sonner";
function App() {
  return (
  <>
 <Toaster />
<BrowserRouter>
<AppRoutes/>
</BrowserRouter>
  </>
  );
}

export default App