import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/authenticated")({
  component: Authenticated,
});

function Authenticated() {
  return <div>Hello you can view this because you're authenticated!</div>;
}
