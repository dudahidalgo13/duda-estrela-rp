import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/admin/ProtectedRoute";
import { MainLayout } from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Mandato from "./pages/Mandato";
import Noticias from "./pages/Noticias";
import NoticiaDetalhes from "./pages/NoticiaDetalhes";
import PTCaravana from "./pages/PTCaravana";
import Demandas from "./pages/Demandas";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import NoticiasAdmin from "./pages/admin/NoticiasAdmin";
import DemandasAdmin from "./pages/admin/DemandasAdmin";
import TextosAdmin from "./pages/admin/TextosAdmin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<MainLayout><Home /></MainLayout>} />
            <Route path="/conheca-o-mandato" element={<MainLayout><Mandato /></MainLayout>} />
            <Route path="/noticias" element={<MainLayout><Noticias /></MainLayout>} />
            <Route path="/noticias/:slug" element={<MainLayout><NoticiaDetalhes /></MainLayout>} />
            <Route path="/pt-e-caravana" element={<MainLayout><PTCaravana /></MainLayout>} />
            <Route path="/envie-sua-demanda" element={<MainLayout><Demandas /></MainLayout>} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/admin/noticias" element={<ProtectedRoute><NoticiasAdmin /></ProtectedRoute>} />
            <Route path="/admin/demandas" element={<ProtectedRoute><DemandasAdmin /></ProtectedRoute>} />
            <Route path="/admin/textos" element={<ProtectedRoute><TextosAdmin /></ProtectedRoute>} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
