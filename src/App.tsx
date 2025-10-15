import { Outlet } from "react-router";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar04 } from "./components/ui/shadcn-io/navbar-04";

function App() {
  return (
    <ThemeProvider>
      <Navbar04 />
      <main>
        <Outlet />
      </main>

      <footer className="absolute bottom-0 h-[10dvh] left-0 bg-background/95  w-full flex items-center justify-center">
        <small className="text-sm">
          Created by{" "}
          <a
            className="text-foreground/60 hover:text-primary "
            href="https://github.com/carlosfrontend"
            target="_blank"
            rel="noreferer noopener"
          >
            @carlosfrontend
          </a>
        </small>
      </footer>
    </ThemeProvider>
  );
}

export default App;
