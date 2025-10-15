import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const conquistas = [
  {
    title: "Lei de Proteção aos Animais de Rua",
    description: "Aprovação de projeto que garante abrigo e cuidados veterinários para animais abandonados.",
    date: "Março de 2025",
    impact: "Mais de 200 animais já foram beneficiados"
  },
  {
    title: "Ampliação das Linhas de Ônibus Noturnas",
    description: "Conquista de novas linhas de transporte público no período noturno para trabalhadores.",
    date: "Fevereiro de 2025",
    impact: "Beneficia mais de 5.000 trabalhadores"
  },
  {
    title: "Programa Cultura nas Escolas",
    description: "Implementação de atividades culturais em 15 escolas municipais da periferia.",
    date: "Janeiro de 2025",
    impact: "3.000 estudantes atendidos"
  }
];

export const Conquistas = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Principais Conquistas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resultados concretos que transformam a vida das pessoas em Ribeirão Preto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {conquistas.map((conquista, index) => (
            <Card key={index} className="hover:shadow-hover transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <CardTitle className="font-heading text-xl">
                    {conquista.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  {conquista.description}
                </p>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">{conquista.date}</strong>
                  </p>
                  <p className="text-sm text-primary font-medium mt-1">
                    {conquista.impact}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/conheca-o-mandato#conquistas">
              Ver todas as conquistas
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
