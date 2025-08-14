import { Authenticator } from "@aws-amplify/ui-react";
import "./amplifyClient";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "aws-amplify/auth";
import "@aws-amplify/ui-react/styles.css";

async function fetchTodos() {
  const session = await fetchAuthSession();
  const token = session.token?.idToken?.toString();

  const res = await fetch(import.meta.env.VITE_API_URL, {
    headers: { Authorization: token ? `Bearer ${token}` : "" },
  });
  console.log(res);
}

async function getDetails() {
  const { username, userId, signInDetails } = await getCurrentUser();
  console.log(username);
}

function useItemsQuery() {
  return {
    queryKey: ["todos"],
    queryFn: fetchTodos,
  };
}

function App() {
  const { queryKey, queryFn } = useItemsQuery();
  const { data, isFetching } = useQuery({ queryKey, queryFn });

  return (
    <Authenticator socialProviders={["google"]}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
