export default function RangedSegment({
  title,
  subtitle,
  description,
  start,
  end,
  className,
}) {
  return (
    <div className={className + " seg"}>
      <h2 className={`${className}-title`}>{title}</h2>
      <h3 className={`${className}-subtitle`}>{subtitle}</h3>
      <p className={`${className}-desc`}>{description}</p>
      <p className={`${className}-range`}>
        {start} - {end}
      </p>
    </div>
  );
}
