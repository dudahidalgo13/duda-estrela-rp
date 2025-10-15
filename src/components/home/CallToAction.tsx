import { Link } from "react-router-dom";
import { Send, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <section className="py-16 lg:py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-10 left-10 opacity-10">
        <Star className="h-20 w-20" fill="currentColor" aria-hidden="true" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <Star className="h-16 w-16" fill="currentColor" aria-hidden="true" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
          Participe do Nosso Mandato
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Sua voz é fundamental para construirmos juntos uma Ribeirão Preto melhor. 
          Envie sua demanda, sugestão ou denúncia e ajude a transformar nossa cidade.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-white text-primary hover:bg-white/90 font-semibold shadow-hover"
        >
          <Link to="/envie-sua-demanda">
            <Send className="mr-2 h-5 w-5" aria-hidden="true" />
            Envie sua demanda agora
          </Link>
        </Button>
      </div>
    </section>
  );
};
