type Props = {
  firstTitle: string;
  secondTitle: string;
};
export default function SectionHeading({ firstTitle, secondTitle }: Props) {
  return (
    <section className="w-full mx-auto text-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-[5px] w-[69px] bg-gradient-to-r from-[#f76680] to-[#57007b] inline-block"></div>
        <div>
          <h2 className="text-4xl font-normal text-black">
            {firstTitle}
            <br />
            <span className="font-bold leading-relaxed">{secondTitle}</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
