'use client';
import React, { useMemo } from "react";
import { createPortal } from "react-dom";

type IProps = {
  providerCls?: string;
  children: React.ReactNode;
};

export default function ModalProvider({ children, providerCls }: IProps) {
  const container = useMemo(() => {
    if (typeof window === "undefined") return null;
    const element = providerCls
      ? document.querySelector(`.${providerCls}`)
      : document.body;
    return element instanceof HTMLElement ? element : null;
  }, [providerCls]);

  if (!container) return null;

  return createPortal(<>{children}</>, container);
}
