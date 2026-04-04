import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import ServicesPage from "./pages/services-page";
import ServiceDetailPage from "./pages/service-detail";
import PrintingServiceDetail from "./pages/printing-service-detail";
import PrintingServicesCatalog from "./pages/printing-services-catalog";
import AllEventsPage from "./pages/all-events";
import AllNewsPage from "./pages/all-news-page";
import BooksCatalog from "./pages/books-catalog";
import RegistrationPage from "./pages/registration";
import ProfilePage from "./pages/profile";
import BookDetailPage from "./pages/book-detail";
import NotificationsPage from "./pages/notifications";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/services",
    Component: ServicesPage,
  },
  {
    path: "/services/:id",
    Component: ServiceDetailPage,
  },
  {
    path: "/printing-services",
    Component: PrintingServicesCatalog,
  },
  {
    path: "/printing-services/:id",
    Component: PrintingServiceDetail,
  },
  {
    path: "/all-events",
    Component: AllEventsPage,
  },
  {
    path: "/all-news",
    Component: AllNewsPage,
  },
  {
    path: "/books-catalog",
    Component: BooksCatalog,
  },
  {
    path: "/registration",
    Component: RegistrationPage,
  },
  {
    path: "/profile",
    Component: ProfilePage,
  },
  {
    path: "/books/:id",
    Component: BookDetailPage,
  },
  {
    path: "/notifications",
    Component: NotificationsPage,
  },
]);