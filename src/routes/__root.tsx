import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-10">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/customsignin" className="[&.active]:font-bold">
          Custom Sign In
        </Link>
        <Link to="/authenticated" className="[&.active]:font-bold">
          Authenticated
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
