import { useState, useEffect } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trash2, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Demanda {
  id: string;
  nome: string;
  email: string;
  telefone?: string;
  bairro: string;
  assunto: string;
  mensagem: string;
  data: string;
  newsletter: boolean;
}

const DemandasAdmin = () => {
  const [demandas, setDemandas] = useState<Demanda[]>([]);
  const [demandaSelecionada, setDemandaSelecionada] = useState<Demanda | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    carregarDemandas();
  }, []);

  const carregarDemandas = () => {
    const saved = localStorage.getItem('demandas');
    if (saved) {
      setDemandas(JSON.parse(saved));
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Tem certeza que deseja excluir esta demanda?')) {
      const novasDemandas = demandas.filter(d => d.id !== id);
      localStorage.setItem('demandas', JSON.stringify(novasDemandas));
      setDemandas(novasDemandas);
      toast({ title: "Demanda excluída com sucesso!" });
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Gerenciar Demandas</h2>
          <p className="text-muted-foreground mt-2">
            Visualize e gerencie as demandas recebidas pelo formulário
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Demandas Recebidas ({demandas.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Bairro</TableHead>
                  <TableHead>Assunto</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {demandas.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center text-muted-foreground">
                      Nenhuma demanda recebida
                    </TableCell>
                  </TableRow>
                ) : (
                  demandas.map((demanda) => (
                    <TableRow key={demanda.id}>
                      <TableCell className="font-medium">{demanda.nome}</TableCell>
                      <TableCell>{demanda.email}</TableCell>
                      <TableCell>{demanda.bairro}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{demanda.assunto}</Badge>
                      </TableCell>
                      <TableCell>
                        {new Date(demanda.data).toLocaleDateString('pt-BR')}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setDemandaSelecionada(demanda)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDelete(demanda.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Dialog open={!!demandaSelecionada} onOpenChange={() => setDemandaSelecionada(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Detalhes da Demanda</DialogTitle>
            </DialogHeader>
            {demandaSelecionada && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Nome</p>
                    <p className="text-base">{demandaSelecionada.nome}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <p className="text-base">{demandaSelecionada.email}</p>
                  </div>
                  {demandaSelecionada.telefone && (
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Telefone</p>
                      <p className="text-base">{demandaSelecionada.telefone}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Bairro</p>
                    <p className="text-base">{demandaSelecionada.bairro}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Assunto</p>
                    <p className="text-base">
                      <Badge variant="outline">{demandaSelecionada.assunto}</Badge>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Data</p>
                    <p className="text-base">
                      {new Date(demandaSelecionada.data).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Mensagem</p>
                  <p className="text-base bg-muted p-4 rounded-md">
                    {demandaSelecionada.mensagem}
                  </p>
                </div>
                {demandaSelecionada.newsletter && (
                  <div className="flex items-center gap-2">
                    <Badge>Newsletter</Badge>
                    <span className="text-sm text-muted-foreground">
                      Aceitou receber novidades
                    </span>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
};

export default DemandasAdmin;
