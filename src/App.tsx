import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";

function App() {
	const router = Router();

  return (
		<RouterProvider router={router} />
	);
}

export default App
