import { BarChart3, Users, FileCheck, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  { label: "Projetos Propostos", value: "24", icon: FileCheck },
  { label: "Visitas Realizadas", value: "156", icon: Calendar },
  { label: "Fiscalizações", value: "89", icon: BarChart3 },
  { label: "Pessoas Atendidas", value: "2.400+", icon: Users },
];

const timeline = [
  { year: "2024", title: "Eleita Vereadora", description: "Eleita com 8.432 votos para a Câmara Municipal de Ribeirão Preto" },
  { year: "2020-2024", title: "Ativismo Social", description: "Atuação em movimentos sociais pela educação, saúde e direitos humanos" },
  { year: "2018-2020", title: "Coordenação PT Jovem", description: "Coordenadora da juventude do PT em Ribeirão Preto" },
  { year: "2015", title: "Início na Política", description: "Primeiros passos na militância política e organização popular" },
];

const Mandato = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
            Conheça o Mandato
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Um mandato construído com o povo, para o povo. 
            Transparência, participação popular e compromisso com as transformações sociais.
          </p>
        </div>
      </section>

      {/* Nosso Mandato */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Nosso Mandato
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-4">
              Nosso mandato é pautado pela escuta ativa da população e pela defesa intransigente 
              dos direitos sociais. Acreditamos que a política deve estar a serviço do povo, 
              e não de interesses particulares.
            </p>
            <p className="text-lg text-muted-foreground">
              Trabalhamos de forma transparente, com prestação de contas constante e 
              abertura para o diálogo com todos os setores da sociedade. Nossa atuação 
              se baseia em três pilares: participação popular, justiça social e 
              sustentabilidade.
            </p>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
            Nossos Números
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mb-4">
                    <stat.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-4xl font-bold text-primary">
                    {stat.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trajetória */}
      <section id="trajetoria" className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6 text-center">
            Trajetória da Duda
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Uma vida dedicada à luta por justiça social e transformação política
          </p>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-sm">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-border pl-6 relative">
                  <div className="absolute left-0 top-8 w-2 h-2 bg-primary rounded-full -translate-x-[5px]" />
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Video placeholder */}
          <div className="mt-16">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">
              Conheça Nossa História
            </h3>
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
              <p className="text-muted-foreground text-center px-4">
                Vídeo institucional em breve
                <br />
                <span className="text-sm">(Espaço reservado para vídeo do YouTube/Vimeo)</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mandato;
