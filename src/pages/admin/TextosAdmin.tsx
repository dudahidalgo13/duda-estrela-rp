import { useState, useEffect } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TextosConfig {
  heroTitulo: string;
  heroSubtitulo: string;
  mandatoDescricao: string;
  ptDescricao: string;
  caravanaDescricao: string;
}

const defaultTextos: TextosConfig = {
  heroTitulo: 'Duda Hidalgo',
  heroSubtitulo: 'Vereadora em Ribeirão Preto',
  mandatoDescricao: 'Nosso mandato é pautado pela transparência, participação popular e defesa dos direitos da população. Atuamos diariamente para fiscalizar o poder público e propor políticas que melhorem a vida das pessoas.',
  ptDescricao: 'O Partido dos Trabalhadores (PT) é um partido político brasileiro fundado em 1980. Nasce dos movimentos sociais, sindicais e populares, com o objetivo de construir uma sociedade mais justa, democrática e igualitária.',
  caravanaDescricao: 'A Caravana é um projeto de aproximação com a população, levando serviços, ouvindo demandas e promovendo a participação cidadã. Através dela, fortalecemos o diálogo e a organização popular.',
};

const TextosAdmin = () => {
  const [textos, setTextos] = useState<TextosConfig>(defaultTextos);
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem('textos_site');
    if (saved) {
      setTextos(JSON.parse(saved));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('textos_site', JSON.stringify(textos));
    toast({ title: "Textos salvos com sucesso!" });
  };

  const handleChange = (campo: keyof TextosConfig, valor: string) => {
    setTextos(prev => ({ ...prev, [campo]: valor }));
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Editar Textos</h2>
          <p className="text-muted-foreground mt-2">
            Personalize os textos exibidos nas páginas do site
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Tabs defaultValue="home" className="space-y-4">
            <TabsList>
              <TabsTrigger value="home">Página Inicial</TabsTrigger>
              <TabsTrigger value="mandato">Mandato</TabsTrigger>
              <TabsTrigger value="pt">PT e Caravana</TabsTrigger>
            </TabsList>

            <TabsContent value="home" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Hero - Página Inicial</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="heroTitulo">Título Principal</Label>
                    <Textarea
                      id="heroTitulo"
                      value={textos.heroTitulo}
                      onChange={(e) => handleChange('heroTitulo', e.target.value)}
                      rows={2}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="heroSubtitulo">Subtítulo</Label>
                    <Textarea
                      id="heroSubtitulo"
                      value={textos.heroSubtitulo}
                      onChange={(e) => handleChange('heroSubtitulo', e.target.value)}
                      rows={2}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mandato" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Descrição do Mandato</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor="mandatoDescricao">Texto sobre o Mandato</Label>
                    <Textarea
                      id="mandatoDescricao"
                      value={textos.mandatoDescricao}
                      onChange={(e) => handleChange('mandatoDescricao', e.target.value)}
                      rows={6}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pt" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>PT - Partido dos Trabalhadores</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor="ptDescricao">Descrição do PT</Label>
                    <Textarea
                      id="ptDescricao"
                      value={textos.ptDescricao}
                      onChange={(e) => handleChange('ptDescricao', e.target.value)}
                      rows={6}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Caravana</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor="caravanaDescricao">Descrição da Caravana</Label>
                    <Textarea
                      id="caravanaDescricao"
                      value={textos.caravanaDescricao}
                      onChange={(e) => handleChange('caravanaDescricao', e.target.value)}
                      rows={6}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end mt-6">
            <Button type="submit" size="lg">
              Salvar Todas as Alterações
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default TextosAdmin;
