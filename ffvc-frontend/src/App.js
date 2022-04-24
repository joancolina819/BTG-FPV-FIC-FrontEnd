import Historial from "./components/Historial";
import generateStore from "./redux/store";
import { Provider } from "react-redux";

const store = generateStore()

function App() {
  return (
    <div>
      <Provider store={store}>
        <h1>Hola Joan</h1>
        <Historial/>
      </Provider>
    </div>
  );
}

export default App;
