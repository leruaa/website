import { useExtracted, useFormatter } from "next-intl";
import Title from "./Title";

type ProjectProps = {
  title: string;
  stack?: string[];
  children: React.ReactNode;
};

export default function Project({ title, stack, children }: ProjectProps) {
  const t = useExtracted();
  const format = useFormatter();

  return (
    <div className="break-inside-avoid mb-2">
      <Title>{title}</Title>
      {stack && stack.length > 0 && (
        <div className="text-zinc-500 dark:text-zinc-400 italic">
          {format.list(stack)}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}
