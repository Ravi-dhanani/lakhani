type Props = {
  children: React.ReactNode;
  className?: string;
  sectionName?: string;
};
export default function MainLayout({
  children,
  className,
  sectionName,
}: Props) {
  return (
    <section id={sectionName ? sectionName : ""}>
      <div
        className={`border-b-[1px] border-primary ${
          className ? className : ""
        }`}
      >
        <div className="sm:max-w-[1145px] mx-auto xl:px-0 md:px-10">
          {children}
        </div>
      </div>
    </section>
  );
}
