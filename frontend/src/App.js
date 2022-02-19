import Calendar from "./components/Calendar";
import useStore from "./store";

function App() {
  const getEvents = useStore(state => state.getEvents);
  getEvents();
  return (
    <div className="App">
      <Calendar />
    </div>
  );
}

export default App;
