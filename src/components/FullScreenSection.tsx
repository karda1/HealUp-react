import type { FC, ReactNode } from "react";

interface FullScreenSectionProps {
  children: ReactNode;
  type?: string;
  bg?: string;
  className?: string;
}

const FullScreenSection: FC<FullScreenSectionProps> = ({
  type,
  children,
  bg = "light",
  className = "",
}) => {
  return (
    <div
      className={`d-flex align-items-center justify-content-center bg-${bg} ${className}`}
      style={{ minHeight: "100vh" }}
    >
      <div className={`container text-center ${type === "secondary" ? "d-flex flex-column flex-md-row align-items-center justify-content-between" : ""}`}>{children}</div>
    </div>
  );
};

export default FullScreenSection;
