import { createFileRoute } from "@tanstack/react-router";
import "../amplifyClient";
import type { FormEvent } from "react";
import { signIn } from "aws-amplify/auth";

export const Route = createFileRoute("/customsignin")({
  component: CustomSignIn,
});

interface SignInFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface SignInForm extends HTMLFormElement {
  readonly elements: SignInFormElements;
}

export default function CustomSignIn() {
  async function handleSubmit(event: FormEvent<SignInForm>) {
    event.preventDefault();
    const form = event.currentTarget;

    await signIn({
      username: form.elements.email.value,
      password: form.elements.password.value,
    });
  }
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <input type="submit" />
    </form>
  );
}
