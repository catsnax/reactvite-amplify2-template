import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/unauthenticated")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Hello you're unauthenticated!</h1>
      <h2> Please Login Here</h2>
      <a href="/customsignin">Login</a>
    </div>
  );
}
