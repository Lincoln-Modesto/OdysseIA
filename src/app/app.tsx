import React, { ReactNode } from "react";
import "@/styles/globals.scss";

type AppProps = {
  children: ReactNode;
};

const App = ({ children }: AppProps) => {
  return (
    <div>
      <header>
        <nav>
          <h1>OdysseIA</h1>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 OdysseIA. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
