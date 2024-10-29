import App from "./App";
import ErrorPage from "./pages/notFound";
import Posts from './pages/allPosts'

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "posts", element:  <Posts />},
    ]
  }
];

export default routes;