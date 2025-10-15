import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data - em produção viria do backend
const newsData: Record<string, any> = {
  "aprovacao-projeto-educacao": {
    title: "Projeto de educação inclusiva é aprovado na Câmara",
    date: "2025-10-10",
    category: "Educação",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop",
    tags: ["educação", "aprovação", "inclusão"],
    content: `
      <p>Em uma vitória importante para a educação em Ribeirão Preto, nosso projeto de lei que visa ampliar o acesso à educação inclusiva foi aprovado por unanimidade na Câmara Municipal.</p>
      
      <p>O projeto prevê a contratação de profissionais especializados em educação especial, a adaptação de infraestrutura nas escolas e a capacitação de professores para atender estudantes com necessidades específicas.</p>
      
      <h2>Principais pontos do projeto</h2>
      <ul>
        <li>Contratação de 50 profissionais de apoio escolar especializados</li>
        <li>Adaptação de 30 escolas municipais com rampas, elevadores e banheiros acessíveis</li>
        <li>Programa de capacitação continuada para 500 professores</li>
        <li>Aquisição de materiais didáticos adaptados e tecnologias assistivas</li>
      </ul>
      
      <p>Esta conquista é fruto de muita luta e mobilização. Agradeço a todas as famílias, educadores e ativistas que lutaram conosco por uma educação verdadeiramente inclusiva e democrática.</p>
      
      <p>A implementação do projeto começa já no próximo semestre letivo, e estaremos acompanhando de perto cada etapa para garantir que todas as medidas sejam cumpridas com qualidade.</p>
    `
  },
  "visita-unidade-saude": {
    title: "Visita a unidades de saúde do Jardim Salgado Filho",
    date: "2025-10-05",
    category: "Saúde",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&h=600&fit=crop",
    tags: ["saúde", "fiscalização", "comunidade"],
    content: `
      <p>Realizamos nesta semana uma vistoria nas unidades de saúde do bairro Jardim Salgado Filho, atendendo a demandas da própria comunidade que relatou problemas no atendimento e na infraestrutura.</p>
      
      <p>Durante a visita, identificamos várias questões que precisam ser resolvidas urgentemente, como a falta de medicamentos básicos, equipamentos quebrados e a necessidade de ampliação do quadro de profissionais.</p>
      
      <h2>Problemas identificados</h2>
      <ul>
        <li>Falta de medicamentos essenciais para hipertensão e diabetes</li>
        <li>Equipamentos de raio-X fora de operação há 3 meses</li>
        <li>Necessidade de contratação de mais 2 médicos e 3 enfermeiros</li>
        <li>Problemas na rede elétrica que afetam o funcionamento das geladeiras de vacinas</li>
      </ul>
      
      <p>Protocolamos ofício junto à Secretaria Municipal de Saúde solicitando providências imediatas. Seguiremos acompanhando e cobrando as soluções necessárias.</p>
    `
  }
};

const NoticiaDetalhes = () => {
  const { slug } = useParams();
  const noticia = slug ? newsData[slug] : null;

  if (!noticia) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold mb-4">Notícia não encontrada</h1>
          <Button asChild>
            <Link to="/noticias">Voltar para notícias</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <article>
        {/* Hero */}
        <div className="relative h-[400px] lg:h-[500px]">
          <img
            src={noticia.image}
            alt={noticia.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
          <div className="bg-background rounded-xl shadow-hover p-8 lg:p-12">
            {/* Back button */}
            <Button variant="ghost" asChild className="mb-6 -ml-2">
              <Link to="/noticias">
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Voltar para notícias
              </Link>
            </Button>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-block px-4 py-1.5 bg-primary-light text-primary rounded-full text-sm font-medium">
                {noticia.category}
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                {new Date(noticia.date).toLocaleDateString('pt-BR', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-8">
              {noticia.title}
            </h1>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: noticia.content }}
            />

            {/* Tags */}
            {noticia.tags && noticia.tags.length > 0 && (
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  {noticia.tags.map((tag: string) => (
                    <span key={tag} className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related news placeholder */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
            Notícias Relacionadas
          </h2>
          <p className="text-muted-foreground">
            Outras notícias aparecerão aqui em breve.
          </p>
        </div>
      </article>
    </div>
  );
};

export default NoticiaDetalhes;
