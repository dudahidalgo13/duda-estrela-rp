import { Users, Heart, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PTCaravana = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
            Vem pro PT
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Conheça o Partido dos Trabalhadores e participe da nossa Caravana pela cidade
          </p>
        </div>
      </section>

      {/* Sobre o PT */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Partido dos Trabalhadores
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-4">
                  O Partido dos Trabalhadores nasceu da luta dos trabalhadores brasileiros 
                  por democracia, justiça social e soberania nacional. Fundado em 1980, 
                  o PT é fruto da organização de sindicatos, movimentos sociais, 
                  intelectuais e militantes que sonhavam com um Brasil mais justo.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Nossos valores fundamentais são a democracia, a ética na política, 
                  a justiça social, a soberania nacional e a sustentabilidade ambiental. 
                  Acreditamos que outro Brasil é possível, um país com oportunidades para todos.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                      <Heart className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    Justiça Social
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Combater as desigualdades e garantir direitos para todos os brasileiros
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    Democracia Participativa
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    O povo no centro das decisões políticas e na construção do país
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                      <Star className="h-5 w-5 text-primary" fill="currentColor" aria-hidden="true" />
                    </div>
                    Ética e Transparência
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Política limpa, transparente e a serviço do interesse público
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Caravana */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Caravana pela Cidade
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A Caravana é nossa forma de estar perto do povo, ouvindo demandas, 
              levando informação e construindo juntos soluções para os problemas da cidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">Propósito</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Levar o mandato até a população, ouvir as necessidades de cada bairro 
                  e construir políticas públicas a partir da realidade concreta das pessoas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">Atividades</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Rodas de conversa com moradores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Atendimento de demandas locais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Atividades culturais e educativas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Oficinas de cidadania e direitos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-primary-light border border-primary/20 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Como Participar?
              </h3>
              <p className="text-muted-foreground mb-6">
                Quer que a Caravana vá até o seu bairro? Entre em contato pelo nosso 
                gabinete ou redes sociais. Juntos, construímos uma Ribeirão Preto melhor!
              </p>
              <p className="text-primary font-medium">
                📧 gabinete@dudahidalgo.com.br
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Links oficiais */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
            Links Oficiais do PT
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://pt.org.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover font-medium underline"
            >
              Site Nacional do PT
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="https://pt.org.br/filie-se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover font-medium underline"
            >
              Filie-se ao PT
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="#"
              className="text-primary hover:text-primary-hover font-medium underline"
            >
              PT Ribeirão Preto
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PTCaravana;
