import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(100),
  email: z.string().email("E-mail inválido").max(255),
  telefone: z.string().optional(),
  bairro: z.string().min(2, "Bairro é obrigatório").max(100),
  assunto: z.string().min(1, "Selecione um assunto"),
  mensagem: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000),
  consentimento: z.boolean().refine((val) => val === true, {
    message: "Você deve concordar com os termos para enviar a demanda",
  }),
  newsletter: z.boolean().optional(),
});

type FormData = z.infer<typeof formSchema>;

const Demandas = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      bairro: "",
      assunto: "",
      mensagem: "",
      consentimento: false,
      newsletter: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Salvar demanda no localStorage
      const demandas = JSON.parse(localStorage.getItem('demandas') || '[]');
      const novaDemanda = {
        ...data,
        id: Date.now().toString(),
        data: new Date().toISOString(),
      };
      demandas.push(novaDemanda);
      localStorage.setItem('demandas', JSON.stringify(demandas));
      
      toast.success("Demanda enviada com sucesso!", {
        description: "Entraremos em contato em breve.",
      });
      
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      toast.error("Erro ao enviar demanda", {
        description: "Tente novamente mais tarde.",
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary">
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10 text-primary" aria-hidden="true" />
          </div>
          <h1 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Demanda Recebida!
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Obrigada por entrar em contato. Recebemos sua mensagem e nossa equipe 
            analisará sua demanda com atenção. Entraremos em contato em breve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => setIsSubmitted(false)}>
              Enviar outra demanda
            </Button>
            <Button variant="outline" asChild>
              <a href="/">Voltar para o início</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
            Envie sua Demanda
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Sua participação é fundamental. Envie sugestões, denúncias ou demandas 
            para que possamos trabalhar juntos por uma Ribeirão Preto melhor.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Nome */}
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome completo *</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="seu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Telefone */}
              <FormField
                control={form.control}
                name="telefone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefone (opcional)</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="(16) 99999-9999" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Bairro */}
              <FormField
                control={form.control}
                name="bairro"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bairro *</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu bairro em Ribeirão Preto" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Assunto */}
              <FormField
                control={form.control}
                name="assunto"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assunto/Tema *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um tema" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="saude">Saúde</SelectItem>
                        <SelectItem value="educacao">Educação</SelectItem>
                        <SelectItem value="transporte">Transporte</SelectItem>
                        <SelectItem value="cultura">Cultura</SelectItem>
                        <SelectItem value="direitos-humanos">Direitos Humanos</SelectItem>
                        <SelectItem value="meio-ambiente">Meio Ambiente</SelectItem>
                        <SelectItem value="infraestrutura">Infraestrutura</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Mensagem */}
              <FormField
                control={form.control}
                name="mensagem"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Descreva sua demanda, sugestão ou denúncia de forma detalhada..."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Máximo de 1000 caracteres
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Consentimento LGPD */}
              <FormField
                control={form.control}
                name="consentimento"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Concordo com o tratamento dos meus dados *
                      </FormLabel>
                      <FormDescription>
                        Seus dados serão utilizados exclusivamente para análise e resposta 
                        da demanda, em conformidade com a LGPD. Não compartilharemos suas 
                        informações com terceiros.
                      </FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              {/* Newsletter */}
              <FormField
                control={form.control}
                name="newsletter"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-normal">
                        Quero receber novidades sobre o mandato por e-mail
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              {/* Submit */}
              <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" aria-hidden="true" />
                    Enviar demanda
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default Demandas;
