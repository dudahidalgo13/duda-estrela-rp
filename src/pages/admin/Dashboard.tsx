import { useEffect, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Newspaper, MessageSquare, FileText, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const [stats, setStats] = useState({
    noticias: 0,
    demandas: 0,
    textos: 0,
  });

  useEffect(() => {
    // Carregar estatísticas do localStorage
    const noticias = JSON.parse(localStorage.getItem('noticias') || '[]');
    const demandas = JSON.parse(localStorage.getItem('demandas') || '[]');
    
    setStats({
      noticias: noticias.length,
      demandas: demandas.length,
      textos: 5, // Número de páginas editáveis
    });
  }, []);

  const cards = [
    {
      title: 'Notícias',
      value: stats.noticias,
      icon: Newspaper,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      title: 'Demandas',
      value: stats.demandas,
      icon: MessageSquare,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      title: 'Textos Editáveis',
      value: stats.textos,
      icon: FileText,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Dashboard</h2>
          <p className="text-muted-foreground mt-2">Visão geral do painel administrativo</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Card key={card.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {card.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg ${card.bgColor}`}>
                    <Icon className={`h-4 w-4 ${card.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{card.value}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Bem-vinda ao Painel Administrativo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Use o menu lateral para navegar entre as seções de gerenciamento de notícias, 
              demandas recebidas e edição de textos das páginas.
            </p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
