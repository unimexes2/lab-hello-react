import './App.css';
import  Navbar from "./components/nav-bar";
import Body from "./components/body-comp"
import Button from "./components/button"
import Box from "./components/small-box"
function App() {
  return (
    <div className="App">
  
  <Navbar />
  <Body/>
  <Button/>
  <Box/>
    </div>
  );
}
export default App;