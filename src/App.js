import { HashRouter as Router, Route} from "react-router-dom";
import Main from "./js/Main.js"

function App() {
  return (
    <Router>
		<Route path="/" component={ Main } />
	</Router>
  );
}

export default App;
