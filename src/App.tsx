import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Mandato from "./pages/Mandato";
import Noticias from "./pages/Noticias";
import NoticiaDetalhes from "./pages/NoticiaDetalhes";
import PTCaravana from "./pages/PTCaravana";
import Demandas from "./pages/Demandas";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conheca-o-mandato" element={<Mandato />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/noticias/:slug" element={<NoticiaDetalhes />} />
            <Route path="/pt-e-caravana" element={<PTCaravana />} />
            <Route path="/envie-sua-demanda" element={<Demandas />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
