import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
<<<<<<< HEAD
import Footer from "./components/Footer";
=======
>>>>>>> 948cf4b (init project)

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Navbar />
<<<<<<< HEAD
        <div className="flex flex-col h-[100vh]">
          <div className="grow my-12 md:my-20">
            <Outlet />
          </div>
          <Footer />
        </div>
=======
        <div className="my-20"></div>
        <Outlet />
>>>>>>> 948cf4b (init project)
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
