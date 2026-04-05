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
import CafeDetailPage from "./pages/cafe-detail";
import KidsZoneDetailPage from "./pages/kids-zone-detail";
import LectureHallDetailPage from "./pages/lecture-hall-detail";
import ConcertHallDetailPage from "./pages/concert-hall-detail";
import PrintingOrderConfirmation from "./pages/printing-order-confirmation";
import InteractiveMapPage from "./pages/interactive-map";
import MinskMapPage from "./pages/minsk-map";

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
    path: "/services/cafe",
    Component: CafeDetailPage,
  },
  {
    path: "/services/kids-zone",
    Component: KidsZoneDetailPage,
  },
  {
    path: "/services/lecture-hall",
    Component: LectureHallDetailPage,
  },
  {
    path: "/services/concert-hall",
    Component: ConcertHallDetailPage,
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
    path: "/printing-services/order-confirmation",
    Component: PrintingOrderConfirmation,
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
  {
    path: "/interactive-map",
    Component: InteractiveMapPage,
  },
  {
    path: "/minsk-map",
    Component: MinskMapPage,
  },
]);