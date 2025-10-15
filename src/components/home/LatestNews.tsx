import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    id: 1,
    slug: "aprovacao-projeto-educacao",
    title: "Projeto de educação inclusiva é aprovado na Câmara",
    date: "2025-10-10",
    excerpt: "Nossa proposta para ampliar o acesso à educação de qualidade foi aprovada por unanimidade.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop",
    category: "Educação"
  },
  {
    id: 2,
    slug: "visita-unidade-saude",
    title: "Visita a unidades de saúde do Jardim Salgado Filho",
    date: "2025-10-05",
    excerpt: "Realizamos vistoria e ouvimos demandas da comunidade sobre melhorias necessárias.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=400&fit=crop",
    category: "Saúde"
  },
  {
    id: 3,
    slug: "mobilizacao-cultura",
    title: "Mobilização pela valorização da cultura local",
    date: "2025-09-28",
    excerpt: "Artistas e produtores culturais se reúnem para discutir políticas públicas para o setor.",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=400&fit=crop",
    category: "Cultura"
  }
];

export const LatestNews = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Últimas Notícias
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fique por dentro das atividades, conquistas e mobilizações do nosso mandato
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-hover transition-shadow group">
              <CardHeader className="p-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span className="inline-block px-3 py-1 bg-primary-light text-primary rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    {new Date(item.date).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground line-clamp-3">
                  {item.excerpt}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link
                  to={`/noticias/${item.slug}`}
                  className="text-primary hover:text-primary-hover font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Ler mais <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/noticias">
              Ver todas as notícias
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
