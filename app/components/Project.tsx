import { useFormatter } from "next-intl";
import Title from "./Title";
import ReactMarkdown from "react-markdown";

type ProjectProps = {
  title: string;
  stack?: string[];
  children: React.ReactNode;
};

export default function Project({ title, stack, children }: ProjectProps) {
  const format = useFormatter();

  return (
    <div className="break-inside-avoid">
      <Title>
        <ReactMarkdown components={{ p: ({ children }) => <>{children}</> }}>
          {title}
        </ReactMarkdown>
      </Title>
      {stack && stack.length > 0 && (
        <div className="text-zinc-500 dark:text-zinc-400 italic">
          {format.list(stack)}
        </div>
      )}
      {children}
    </div>
  );
}
