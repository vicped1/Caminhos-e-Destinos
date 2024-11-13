<<<<<<< HEAD
import { Home, Profile, SignIn, SignUp } from "@/pages";
=======
import { Home, SignIn, SignUp } from "@/pages";
>>>>>>> 9f16a6e (checkout + avaliações funcionalidades)

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Login",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Cadastrar",
    path: "/sign-up",
    element: <SignUp />,
  }
];

export default routes;
