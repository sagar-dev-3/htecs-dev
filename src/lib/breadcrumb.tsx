import React, { createContext, useContext, useState } from "react";

type BreadcrumbContextType = {
  breadcrumb: string | null;
  setBreadcrumb: (b: string | null) => void;
};

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined);

export const BreadcrumbProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [breadcrumb, setBreadcrumb] = useState<string | null>(null);
  return (
    <BreadcrumbContext.Provider value={{ breadcrumb, setBreadcrumb }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

export const useBreadcrumb = () => {
  const ctx = useContext(BreadcrumbContext);
  if (!ctx) throw new Error("useBreadcrumb must be used within a BreadcrumbProvider");
  return ctx;
};
