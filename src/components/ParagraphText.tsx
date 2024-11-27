export const ParagraphText = ({ text }: { text: string }) => {
  return (
    <p className="text-pretty text-sm text-neutral-600 dark:text-neutral-400">
      {text}
    </p>
  );
};
