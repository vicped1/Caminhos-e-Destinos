import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import TourDetails from "./pages/tour-details";
<<<<<<< HEAD
=======
import Checkout from "./pages/checkout";
>>>>>>> 9f16a6e (checkout + avaliações funcionalidades)


function App() {
  const { pathname } = useLocation();

  return (
    <>
<<<<<<< HEAD
      {!(pathname == '/sign-in' || pathname == '/sign-up') && (
=======
      {!(pathname == '/sign-in' || pathname == '/sign-up' || pathname == '/checkout') && (
>>>>>>> 9f16a6e (checkout + avaliações funcionalidades)
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          <Navbar routes={routes} />
        </div>
      )
      }
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
<<<<<<< HEAD
=======
        <Route path="/checkout" element={<Checkout />}/>
>>>>>>> 9f16a6e (checkout + avaliações funcionalidades)
        <Route path="/details" element={<TourDetails />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
