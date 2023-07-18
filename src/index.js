// import React from "react";

// import "./index.css";
// import App from "./App/App";

// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";

// export default function Website() {
// 	return (
// 		<BrowserRouter>
// 			<App />
// 		</BrowserRouter>
// 	);
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Website />);

import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Website/pages/Menu";
import Home from "./Website/pages/Home";
import List from "./Website/pages/List";
import NoPage from "./Website/pages/NoPage";

import Dashboard from "./Dashboard/Dashboard";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Menu />}>
					<Route index element={<Home />} />
					<Route path="list" element={<List />} />
					<Route path="dashboard/*" element={<Dashboard />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
