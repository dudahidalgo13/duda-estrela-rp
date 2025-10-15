import { ArrowRight, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden bg-gradient-hero">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Comunidade de Ribeirão Preto unida"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      {/* Decorative stars */}
      <div className="absolute top-20 right-20 opacity-10">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className="text-white">
          <path d="M50 0 L61.8 38.2 L100 50 L61.8 61.8 L50 100 L38.2 61.8 L0 50 L38.2 38.2 Z" />
        </svg>
      </div>
      <div className="absolute bottom-32 left-12 opacity-8">
        <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor" className="text-white">
          <path d="M50 0 L61.8 38.2 L100 50 L61.8 61.8 L50 100 L38.2 61.8 L0 50 L38.2 38.2 Z" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Duda Hidalgo
          </h1>
          <p className="text-xl sm:text-2xl text-white/95 mb-2 font-medium">
            Vereadora em Ribeirão Preto
          </p>
          <p className="text-lg text-white/85 mb-8 max-w-2xl">
            Trabalhando por uma cidade mais justa, inclusiva e democrática. Conheça nossas bandeiras, conquistas e participe do nosso mandato.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold shadow-hover"
            >
              <Link to="/envie-sua-demanda">
                <Send className="mr-2 h-5 w-5" aria-hidden="true" />
                Envie sua demanda
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm font-semibold"
            >
              <Link to="/conheca-o-mandato">
                Conheça nossas conquistas
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
