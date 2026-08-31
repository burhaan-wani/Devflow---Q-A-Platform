import Link from "next/link";
import React from "react";

const Metric = ({
  alt,
  imgUrl,
  title,
  value,
  href,
  isAuthor,
  textStyles,
  imgStyles,
}: MetricProps) => {
  const LinkComponent = (
    <div className="flex items-center gap-2">
      <Link href={href as string} className="flex items-center gap-1 text-xs">
        <img src={imgUrl} alt={alt} className={imgStyles} />
        <span>{value}</span>
      </Link>
      <span className="text-xs font-semibold">{title}</span>
    </div>
  );

  return href ? (
    <>{LinkComponent}</>
  ) : (
    <>
      <div className="flex items-center gap-1.5">
        <div className="flex items-center gap-1.5 text-xs">
          <img src={imgUrl} alt={alt} className={imgStyles} />
          <span>{value}</span>
        </div>
        <span className="text-[12px] font-semibold">{alt}</span>
      </div>
    </>
  );
};

export default Metric;
