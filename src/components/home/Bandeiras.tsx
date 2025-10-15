import { Heart, GraduationCap, Users, FileText, Music, Leaf } from "lucide-react";

const bandeiras = [
  {
    icon: Heart,
    title: "Saúde Pública",
    description: "Ampliar o acesso e melhorar a qualidade dos serviços de saúde"
  },
  {
    icon: GraduationCap,
    title: "Educação",
    description: "Educação inclusiva, democrática e de qualidade para todos"
  },
  {
    icon: Users,
    title: "Direitos Humanos",
    description: "Defesa intransigente dos direitos de todos os cidadãos"
  },
  {
    icon: FileText,
    title: "Transparência",
    description: "Gestão pública transparente e participativa"
  },
  {
    icon: Music,
    title: "Cultura",
    description: "Valorização da cultura local e democratização do acesso"
  },
  {
    icon: Leaf,
    title: "Meio Ambiente",
    description: "Sustentabilidade e preservação ambiental"
  }
];

export const Bandeiras = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossas Bandeiras
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça as causas que defendemos e pelos quais trabalhamos todos os dias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bandeiras.map((bandeira, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl border border-border bg-card hover:border-primary hover:shadow-card transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <bandeira.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {bandeira.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {bandeira.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative star bullet */}
              <div className="absolute -top-2 -right-2 opacity-20">
                <svg width="24" height="24" viewBox="0 0 100 100" fill="currentColor" className="text-primary">
                  <path d="M50 0 L61.8 38.2 L100 50 L61.8 61.8 L50 100 L38.2 61.8 L0 50 L38.2 38.2 Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
