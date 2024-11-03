import React from "react";
import porkers from "../porkers_data";
import HogTile from "./HogTile";
import Nav from "./Nav";
import FilterSortControls from "./FilterSortControls";



function App() {
	const [hogs, setHogs] = useState(porkers);
	const [isGreasedOnly, setIsGreasedOnly] = useState(false);
	const [sortOption, setSortOption] = useState("name");

	// Filter and sort hogs based on user selections
	const displayedHogs = hogs
	.filter((hog) => !isGreasedOnly || hog.greased)
	.sort((a, b) => {
		if (sortOption === "name") return a.name.localeCompare(b.name);
		if (sortOption === "weight") return a.weight - b.weight;
		return 0;
	});

   return (
		<div className="App">
			<Nav />
			<FilterSortControls
        isGreasedOnly={isGreasedOnly}
        setIsGreasedOnly={setIsGreasedOnly}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
			<div className="ui grid container">
				{hogs.map((hog) => (
				<HogTile key={hog.name} hog={hog} />
				))}
			</div>
		</div>
   );
}

export default App;

