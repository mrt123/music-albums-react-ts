import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./pageStructure/Page";
import ItunesAlbumList from "./pages/ItunesAlbumList/ItunesAlbumList";
import OurAlbums from "./pages/OurAlbums";
import {
  Provider,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import store from "./state/store";
import ShoppingCart from "./common/ShoppingCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    // errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/itunes-albums",
        element: <ItunesAlbumList />,
        // loader: albumsLoader,
      },
      {
        path: "/our-albums",
        element: <OurAlbums />,
      },
      {
        path: "/shopping-cart",
        element: <ShoppingCart />,
      },
    ],
  },
]);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
