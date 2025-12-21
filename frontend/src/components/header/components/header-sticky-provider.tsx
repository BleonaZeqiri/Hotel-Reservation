"use client";

import useSticky from "@/hooks/use-sticky";

type IProps = {
  children: React.ReactNode;
  top_cls?: string;
};
export default function HeaderStickyProvider({
  children,
  top_cls = "tp-header-bottom tp-header-sm-spacing",
}: IProps) {
  const { sticky } = useSticky();
  return (
    <div
      id="header-sticky"
      className={`${top_cls} ${sticky ? "header-sticky" : ""}`}
    >
      {children}
    </div>
  );
}
