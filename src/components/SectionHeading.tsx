import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary font-medium">
            <span className="h-px w-8 bg-primary/60" />
            {eyebrow}
            <span className="h-px w-8 bg-primary/60" />
          </span>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
