import TodoApp from "./components/todo-app";
import ThemeProvider from "./context/theme-provider";


function App() {
  return (
    <div>
      <ThemeProvider>
        <TodoApp />
      </ThemeProvider>
    </div>
  );
}

export default App;
