import { createFileRoute } from "@tanstack/react-router";
import { fetchAuthSession } from "aws-amplify/auth";
import { redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/authenticated")({
  component: Authenticated,
  beforeLoad: async ({ location }) => {
    const session = await fetchAuthSession();
    const accessToken = session?.tokens?.accessToken;

    if (!accessToken) {
      throw redirect({
        to: "/unauthenticated",
        search: {},
      });
    }
  },
});

function Authenticated() {
  return <div>Hello you can view this because you're authenticated!</div>;
}
