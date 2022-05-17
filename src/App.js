import logo from './logo.svg';
import './App.css';
import { Box } from "@material-ui/core";
import TodoList from './Components/ToDoList/TodoList'

function App() {

  return (
    <div className="App">
      <header className="App-header" style={{ maxHeight: 100 }}>
        <img src={logo} className="App-logo" alt="logo" style={{ width: 100, height: 'auto' }} />
      </header>
      <Box>
        <TodoList />
      </Box>
    </div>
  );
}

export default App;
