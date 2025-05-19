import type { FC, ReactNode } from "react";

const FullScreenSection: FC<{
  children: ReactNode;
  type?: string;
  bg?: string;
  className?: string;
}> = ({ type, children, bg = "light", className = "" }) => (
  <div
    className={`d-flex align-items-center justify-content-center ${className}`}
    style={{ minHeight: "100vh", backgroundColor: bg }}
  >
    <div
      className={`container text-center${
        type === "secondary"
          ? " d-flex flex-column flex-md-row align-items-center justify-content-between"
          : ""
      }`}
    >
      {children}
    </div>
  </div>
);

export default FullScreenSection;
