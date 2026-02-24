import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const EpoxyFlooring = lazy(() => import("./pages/services/EpoxyFlooring"));
const Terrazzo = lazy(() => import("./pages/services/Terrazzo"));
const BuildingFacades = lazy(() => import("./pages/services/BuildingFacades"));
const GarageFloors = lazy(() => import("./pages/services/GarageFloors"));
const StampedConcrete = lazy(() => import("./pages/services/StampedConcrete"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

const queryClient = new QueryClient();

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/epoxy-flooring" element={<EpoxyFlooring />} />
            <Route path="/services/terrazzo" element={<Terrazzo />} />
            <Route path="/services/building-facades" element={<BuildingFacades />} />
            <Route path="/services/garage-floors" element={<GarageFloors />} />
            <Route path="/services/stamped-concrete" element={<StampedConcrete />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
