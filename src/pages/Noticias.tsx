import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Search } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const allNews = [
  {
    id: 1,
    slug: "aprovacao-projeto-educacao",
    title: "Projeto de educação inclusiva é aprovado na Câmara",
    date: "2025-10-10",
    excerpt: "Nossa proposta para ampliar o acesso à educação de qualidade foi aprovada por unanimidade.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop",
    category: "Educação",
    tags: ["educação", "aprovação", "inclusão"]
  },
  {
    id: 2,
    slug: "visita-unidade-saude",
    title: "Visita a unidades de saúde do Jardim Salgado Filho",
    date: "2025-10-05",
    excerpt: "Realizamos vistoria e ouvimos demandas da comunidade sobre melhorias necessárias.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=400&fit=crop",
    category: "Saúde",
    tags: ["saúde", "fiscalização", "comunidade"]
  },
  {
    id: 3,
    slug: "mobilizacao-cultura",
    title: "Mobilização pela valorização da cultura local",
    date: "2025-09-28",
    excerpt: "Artistas e produtores culturais se reúnem para discutir políticas públicas para o setor.",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=400&fit=crop",
    category: "Cultura",
    tags: ["cultura", "mobilização", "políticas públicas"]
  },
  {
    id: 4,
    slug: "audiencia-publica-transporte",
    title: "Audiência pública debate transporte público de qualidade",
    date: "2025-09-20",
    excerpt: "População participa de debate sobre melhorias no sistema de transporte coletivo.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=400&fit=crop",
    category: "Transparência",
    tags: ["transporte", "audiência pública", "participação"]
  },
  {
    id: 5,
    slug: "projeto-meio-ambiente",
    title: "Projeto de arborização urbana avança na Câmara",
    date: "2025-09-15",
    excerpt: "Proposta visa plantar 10 mil árvores em bairros periféricos nos próximos dois anos.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop",
    category: "Meio Ambiente",
    tags: ["meio ambiente", "arborização", "sustentabilidade"]
  },
  {
    id: 6,
    slug: "direitos-humanos-lgbtqia",
    title: "Campanha contra LGBTfobia nas escolas é lançada",
    date: "2025-09-08",
    excerpt: "Iniciativa promove respeito à diversidade e combate à discriminação no ambiente escolar.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=400&fit=crop",
    category: "Direitos Humanos",
    tags: ["direitos humanos", "educação", "diversidade"]
  }
];

const categories = ["Todas", "Saúde", "Educação", "Cultura", "Direitos Humanos", "Transparência", "Meio Ambiente"];

const Noticias = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const filteredNews = allNews.filter((news) => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todas" || news.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
            Notícias
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Acompanhe as atividades, conquistas e mobilizações do nosso mandato
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full lg:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
              <Input
                type="search"
                placeholder="Buscar notícias..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Buscar notícias"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News grid */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredNews.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                Nenhuma notícia encontrada para os filtros selecionados.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((item) => (
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
          )}
        </div>
      </section>
    </div>
  );
};

export default Noticias;
