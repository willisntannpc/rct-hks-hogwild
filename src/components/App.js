import React from "react";
import porkers from "../porkers_data";
import HogTile from "./HogTile";
import Nav from "./Nav";

import hogs from "../porkers_data";

function App() {
	const [hogs, setHogs] = useState(porkers);

	return (
		<div className="App">
			<Nav />
			<div className="ui grid container">
				{hogs.map((hog) => (
				<HogTile key={hog.name} hog={hog} />
				))}
			</div>
		</div>
	);
}

export default App;
