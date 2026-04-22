import type { MDXComponents } from "mdx/types";
import Title from "./app/components/Title";
import Project from "./app/components/Project";

const components = {
  // Allows customizing built-in components, e.g. to add styling.
  h2: ({ children }) => <Title>{children}</Title>,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return { Project, ...components };
}
