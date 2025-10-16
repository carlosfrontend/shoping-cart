import { Outlet } from "react-router";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
