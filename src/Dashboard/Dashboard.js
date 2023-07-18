// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import Home from "./pages/Home";
// import List from "./pages/List";

// const App = () => {
// 	return (
// 		<Routes>
// 			<Route exact path="/" component={<Home />} />
// 			<Route path="/list" component={<List />} />
// 		</Routes>
// 	);
// };

// export default App;

import { Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Hub from "./pages/Hub";
import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage";

const App = () => {
	return (
		<>
			<Menu />
			<div style={{ marginLeft: "25%", padding: "1px 16px", height: "1000px" }}>
				<Routes>
					<Route path="/">
						<Route index element={<Hub />} />
						<Route path="profile" element={<Profile />} />
						<Route path="*" element={<NoPage />} />
					</Route>
				</Routes>
			</div>
		</>
	);
};

export default App;
