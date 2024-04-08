import { Header } from "../Header/Header";
import { AppRoutes } from "../../Routes/AppRoutes";

const App = (): JSX.Element => {
  return (
    <div className="app">
      <Header />

      <div className="container">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
