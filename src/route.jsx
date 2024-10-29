import App from "./App";
import ErrorPage from "./pages/notFound";
import Posts from './pages/allPosts'
import { element } from "prop-types";
import Post from "./pages/post";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "posts", element: <Posts /> },
            { path: "posts/:postId", element: <Post />},
]
  }
];

export default routes;