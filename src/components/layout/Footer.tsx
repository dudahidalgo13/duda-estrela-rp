import { Instagram, Youtube, Twitter, Facebook, Mail, MapPin, Star } from "lucide-react";

const socialLinks = [
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "YouTube", href: "#", icon: Youtube },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Facebook", href: "#", icon: Facebook },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-8 w-8 text-primary" aria-hidden="true" />
              <span className="font-heading text-xl font-bold">Duda Hidalgo</span>
            </div>
            <p className="text-background/80 text-sm">
              Vereadora em Ribeirão Preto – SP
              <br />
              Trabalhando por uma cidade mais justa e inclusiva.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:gabinete@dudahidalgo.com.br" className="hover:text-primary transition-colors">
                  gabinete@dudahidalgo.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Câmara Municipal de Ribeirão Preto</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-background/10 hover:bg-primary p-2.5 rounded-lg transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-sm text-background/60 space-y-2">
          <p>
            © {new Date().getFullYear()} Duda Hidalgo. Todos os direitos reservados.
          </p>
          <p>
            Este site está em conformidade com a LGPD (Lei Geral de Proteção de Dados).
            Seus dados são tratados com segurança e transparência.
          </p>
        </div>
      </div>
    </footer>
  );
};
