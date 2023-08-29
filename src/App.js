import TodoInput from "./components/TodoInput";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    // <GlobalProvider>
    <div className="App">
      <div className="center-content">
        <TodoInput />
      </div>
    </div>
    // </GlobalProvider>
  );
}

export default App;
