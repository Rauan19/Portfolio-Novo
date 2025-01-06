import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useState } from 'react'; // Importando useState

// Esquema de validação usando Zod
const schema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" }),
});

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });
  const { toast } = useToast();
  
  const [isSent, setIsSent] = useState(false); // Estado para controlar a exibição da mensagem de sucesso

  // Função de envio de e-mail usando Formspree
  const sendEmail = async (data) => {
    try {
      const response = await fetch('https://formspree.io/f/xeoqqdlg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Mensagem enviada!",
          description: "Obrigado por entrar em contato. Responderei em breve.",
        });
        setIsSent(true); // Atualiza o estado para mostrar a mensagem de sucesso
      } else {
        throw new Error('Erro ao enviar');
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Não foi possível enviar a mensagem. Tente novamente.",
      });
      setIsSent(false); // Garante que a mensagem de sucesso não apareça em caso de erro
    }
  };

  return (
    <section id="contato" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Entre em Contato</h2>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit(sendEmail)} className="space-y-4">
            <div>
              <Input
                name="name" // Campo de nome
                placeholder="Seu nome"
                {...register("name")}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <Input
                name="email" // Campo de e-mail
                type="email"
                placeholder="Seu email"
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <Textarea
                name="message" // Campo de mensagem
                placeholder="Sua mensagem"
                {...register("message")}
                className={errors.message ? "border-red-500" : ""}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>
            <Button type="submit" className="w-full bg-red-500 hover:bg-red-600">
              Enviar Mensagem
            </Button>
          </form>
          {isSent && (
            <p className="mt-4 text-green-600 text-center">Mensagem enviada com sucesso!</p>
          )} {/* Mensagem de sucesso */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
