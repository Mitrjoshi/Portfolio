export const SectionAttribute = ({ text }: { text: string }) => {
  return (
    <div className="bg-primary absolute top-0 left-0 w-fit px-3 py-1">
      <p className="text-xs font-medium tracking-widest text-black">{text}</p>
    </div>
  )
}
