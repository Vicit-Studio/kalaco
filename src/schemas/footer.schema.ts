import { z } from "zod";

export const SchemaFooter = z.object({
  name: z.string().min(4, "Seu nome deve conter o mínimo de 4 caracteres."),
  service: z.string().min(1, "O campo serviço é obrigatório."),
});
