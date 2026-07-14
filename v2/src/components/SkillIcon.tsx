import type { SkillIcon as SkillIconData } from "@/lib/skillIcons";

type Props = {
  icon: SkillIconData;
  size?: number;
  className?: string;
};

// Monochrome (simple-icons) logos are recolored via mask so they stay
// visible on both themes; devicon logos already carry real brand colors
// and are just rendered as-is.
export function SkillIcon({ icon, size = 16, className = "" }: Props) {
  const url = `/icons/${icon.slug}.svg`;
  const px = `${size}px`;

  if (icon.invert) {
    return (
      <span
        aria-hidden="true"
        className={`icon-mono inline-block shrink-0 ${className}`}
        style={{
          width: px,
          height: px,
          WebkitMaskImage: `url(${url})`,
          maskImage: `url(${url})`,
        }}
      />
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={url} alt="" width={size} height={size} className={`opacity-90 ${className}`} />;
}
