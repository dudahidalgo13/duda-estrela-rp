import { useState, useEffect } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2 } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Noticia {
  id: string;
  titulo: string;
  data: string;
  imagem: string;
  categoria: string;
  resumo: string;
  conteudo: string;
  slug: string;
}

const NoticiasAdmin = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [editando, setEditando] = useState<Noticia | null>(null);
  const [mostrarForm, setMostrarForm] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    carregarNoticias();
  }, []);

  const carregarNoticias = () => {
    const saved = localStorage.getItem('noticias');
    if (saved) {
      setNoticias(JSON.parse(saved));
    }
  };

  const salvarNoticias = (novasNoticias: Noticia[]) => {
    localStorage.setItem('noticias', JSON.stringify(novasNoticias));
    setNoticias(novasNoticias);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const noticia: Noticia = {
      id: editando?.id || Date.now().toString(),
      titulo: formData.get('titulo') as string,
      data: formData.get('data') as string,
      imagem: formData.get('imagem') as string,
      categoria: formData.get('categoria') as string,
      resumo: formData.get('resumo') as string,
      conteudo: formData.get('conteudo') as string,
      slug: (formData.get('titulo') as string).toLowerCase().replace(/\s+/g, '-'),
    };

    let novasNoticias;
    if (editando) {
      novasNoticias = noticias.map(n => n.id === editando.id ? noticia : n);
      toast({ title: "Notícia atualizada com sucesso!" });
    } else {
      novasNoticias = [...noticias, noticia];
      toast({ title: "Notícia criada com sucesso!" });
    }

    salvarNoticias(novasNoticias);
    setEditando(null);
    setMostrarForm(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Tem certeza que deseja excluir esta notícia?')) {
      const novasNoticias = noticias.filter(n => n.id !== id);
      salvarNoticias(novasNoticias);
      toast({ title: "Notícia excluída com sucesso!" });
    }
  };

  const handleEdit = (noticia: Noticia) => {
    setEditando(noticia);
    setMostrarForm(true);
  };

  const handleNovo = () => {
    setEditando(null);
    setMostrarForm(true);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Gerenciar Notícias</h2>
            <p className="text-muted-foreground mt-2">Crie e edite notícias do site</p>
          </div>
          <Button onClick={handleNovo}>
            <Plus className="w-4 h-4 mr-2" />
            Nova Notícia
          </Button>
        </div>

        {mostrarForm && (
          <Card>
            <CardHeader>
              <CardTitle>{editando ? 'Editar Notícia' : 'Nova Notícia'}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="titulo">Título</Label>
                    <Input
                      id="titulo"
                      name="titulo"
                      defaultValue={editando?.titulo}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="data">Data</Label>
                    <Input
                      id="data"
                      name="data"
                      type="date"
                      defaultValue={editando?.data}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="categoria">Categoria</Label>
                    <Input
                      id="categoria"
                      name="categoria"
                      defaultValue={editando?.categoria}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="imagem">URL da Imagem</Label>
                    <Input
                      id="imagem"
                      name="imagem"
                      type="url"
                      defaultValue={editando?.imagem}
                      placeholder="https://exemplo.com/imagem.jpg"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resumo">Resumo</Label>
                  <Textarea
                    id="resumo"
                    name="resumo"
                    rows={2}
                    defaultValue={editando?.resumo}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="conteudo">Conteúdo</Label>
                  <Textarea
                    id="conteudo"
                    name="conteudo"
                    rows={8}
                    defaultValue={editando?.conteudo}
                    required
                  />
                </div>

                <div className="flex gap-2">
                  <Button type="submit">Salvar</Button>
                  <Button type="button" variant="outline" onClick={() => setMostrarForm(false)}>
                    Cancelar
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Notícias Cadastradas</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Título</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {noticias.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-muted-foreground">
                      Nenhuma notícia cadastrada
                    </TableCell>
                  </TableRow>
                ) : (
                  noticias.map((noticia) => (
                    <TableRow key={noticia.id}>
                      <TableCell className="font-medium">{noticia.titulo}</TableCell>
                      <TableCell>{new Date(noticia.data).toLocaleDateString('pt-BR')}</TableCell>
                      <TableCell>{noticia.categoria}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(noticia)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDelete(noticia.id)}
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
      </div>
    </AdminLayout>
  );
};

export default NoticiasAdmin;
