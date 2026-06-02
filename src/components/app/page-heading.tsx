type PageHeadingProps = {
  title: string;
  description: string;
  action?: React.ReactNode;
};

export function PageHeading({ title, description, action }: PageHeadingProps) {
  return (
    <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-neutral-950">{title}</h2>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-neutral-600">{description}</p>
      </div>
      {action}
    </div>
  );
}
