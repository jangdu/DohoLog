import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Navbar />
        <div className="flex flex-col h-[100vh]">
          <div className="grow my-12 md:my-20">
            <Outlet />
          </div>
          <Footer />
        </div>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
