import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Work from "../pages/Work";
import MainLayout from "../layouts/MainLayout";

function Router () {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <MainLayout/>,
			children: [
				{
					index: true,
					element: <Home/>
				},
				{
					path: "about",
					element: <About/>
				},
				{
					path: "work",
					element: <Work/>
				}
			]
		},
	]);
	return router;
}

export default Router