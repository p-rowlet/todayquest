import "./app.css";
import QuestTemplate from "./components/quest_template/quest_template";
import { DarkmodeProvider } from "./context/darkmode_context";

function App() {
	return (
		<DarkmodeProvider>
			<div className="App">
				<QuestTemplate />
			</div>
		</DarkmodeProvider>
	);
}

export default App;
