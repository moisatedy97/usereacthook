import React from "react";
import DocHeader from "./_components/doc-header";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Discover how to manage stateful logic and side effects in functional components using built-in hooks like useState and useEffect. Hooks provide a more concise and reusable way to organize your React code, making it easier to share logic across components and avoid class components complexities. Explore the versatility and power of React Hooks to streamline your application development."
};

function DocsIndex(): React.JSX.Element {
  return (
    <div>
      <DocHeader
        title={"Documentation"}
        description={
          "In the ever-evolving landscape of React development, custom hooks have emerged as a powerful tool for abstracting complex component logic into reusable functions. Custom hooks allow developers to encapsulate stateful logic and side effects in a clean, modular way, enhancing code maintainability and reusability across projects."
        }
      />
      <div className="flex flex-col gap-y-5 py-5">
        <h2 className="text-3xl font-bold">What is a react hook? 👀</h2>
        <p className="text-muted-foreground lg:text-lg">
          A React Hook is a special function that allows you to hook into{" "}
          <span className="text-gradient">
            React features and lifecycle capabilities from within functional components.
          </span>
          Hooks enable state and other React features to be managed without writing a class. Introduced in React 16.8,
          they provide a more direct API to the React concepts you already know: props, state, context, refs, and
          lifecycle. <span className="text-gradient">This allows for cleaner and more modular code</span>, facilitating
          easier reuse of stateful logic across components.
        </p>
        <h2 className="text-3xl font-bold">What does this documentaion provide? 🤓</h2>
        <p className="text-muted-foreground lg:text-lg">
          This documentation is designed to guide you through the process of creating and utilizing custom React hooks.
          <span className="text-gradient"> It will cover the fundamentals of custom hooks</span>, best practices for
          designing them, and practical examples to demonstrate how they can solve common problems in application
          development. Whether you are a beginner looking to understand the basics or an experienced developer aiming to
          refine your skills, this guide will provide the insights needed to effectively leverage{" "}
          <span className="text-gradient">custom hooks in your React applications</span>.
        </p>
      </div>
    </div>
  );
}

export default DocsIndex;
