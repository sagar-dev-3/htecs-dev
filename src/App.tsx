import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutOverview from "./pages/AboutOverview";
import ServiceBrokerage from "./pages/ServiceBrokerage";
import AuditingAsurance from "./pages/AuditingAssurance";
import AccountingFinancialServices from "./pages/AccountingFinancialServices";
// using BrowserRouter instead of HashRouter for remove # in URL

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/htecs-dev">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutOverview />} />
          <Route path="/about/overview" element={<AboutOverview />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/service-brokerage" element={<ServiceBrokerage />} />
          <Route path="/auditing-asurance" element={<AuditingAsurance />} />
           <Route path="/accounting-financial-services" element={<AccountingFinancialServices />} />
         <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
