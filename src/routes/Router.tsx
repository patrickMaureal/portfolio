import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
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
				}
			]
		},
		
	]);
	return router;
}

export default Router