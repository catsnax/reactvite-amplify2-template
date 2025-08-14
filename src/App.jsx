import { Authenticator } from "@aws-amplify/ui-react";
import "./amplifyClient";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "aws-amplify/auth";
import "@aws-amplify/ui-react/styles.css";
import { fetchAuthSession } from "aws-amplify/auth";

async function fetchTodos() {
  const session = await fetchAuthSession();
  const token = session.token?.idToken?.toString();

  const res = await fetch(import.meta.env.VITE_API_URL, {
    headers: { Authorization: token ? `Bearer ${token}` : "" },
  });
  if (!res.ok) {
    throw new Error("failed fetch");
  }

  return res.json();
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
  const { data, isFetching, refetch } = useQuery({ queryKey, queryFn });

  console.log(data);

  return (
    <Authenticator socialProviders={["google"]}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <button onClick={() => refetch()}> Refetch </button>
          <button onClick={signOut}>Sign out</button>
          {data && <div>{JSON.stringify(data, null, 2)}</div>}
        </main>
      )}
    </Authenticator>
  );
}

export default App;
