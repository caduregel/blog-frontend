import App from "./App";
import ErrorPage from "./pages/notFound";
import Posts from './pages/allPosts'
import { element } from "prop-types";
import Post from "./pages/post";
import About from "./pages/About";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Posts /> },
            { path: "/posts?", element: <Posts /> },
            { path: "posts/:postId", element: <Post />},
            { path: "/about", element: <About /> }
]
  }
];

export default routes;