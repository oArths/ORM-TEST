import * as S from "./styles.tsx";
import { ButtonDefault } from "@components/button/buttonDefault/index.tsx";
import { useThemes } from "src/theme/useThema.tsx";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const EmailContent = z.object({
  name: z
    .string()
    .min(1, { message: "O nome é obrigatorio" })
    .min(5, { message: "O nome deve ter no mínimo 5 letras" })
    .max(200, { message: "Nome muito grande" }),
  email: z
    .string()
    .min(1, { message: "O email é obrigatorio" })
    .email({ message: "Email é obrigatório e deve ser válido" }),
  message: z
    .string()
    .min(1, { message: "A messagem é obrigatorio" })
    .min(5, { message: "A mensagem deve ter no mínimo 5 letras" })
    .max(100, { message: "A mensagem é muito grande, passou de 100 letras" }),
});

type EmailContent = z.infer<typeof EmailContent>;

export const Form = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const { currentTheme } = useThemes();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailContent>({
    resolver: zodResolver(EmailContent),
  });

  const Send = async (data: EmailContent) => {
    setLoading(true);
    const templateParams = {
      from_name: data.name,
      message: data.message,
      email: data.email,
    };
    try {
      const res = await emailjs.send(
        "service_ky8wkph",
        "template_36f21v4",
        templateParams,
        "vTcnOqeKlspsKk1rg"
      );
      console.log("EMAIL ENVIADO", res.status, res.text);
      reset();
      setCount(0);
    } catch (err) {
      console.log("ERRO: ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.InputContainer onSubmit={handleSubmit(Send)}>
      <S.InputWrap>
        <S.LabelWarp>
          <S.Label>Seu Nome</S.Label>
        </S.LabelWarp>
        <S.Input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          placeholder="Seu Nome"
          {...register("name")}
        />
        <S.ErrorWarp>
          {errors.name && <S.Error>{errors.name.message}</S.Error>}
        </S.ErrorWarp>
      </S.InputWrap>
      <S.InputWrap>
        <S.LabelWarp>
          <S.Label>Email</S.Label>
        </S.LabelWarp>
        <S.Input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          placeholder="Seu Email"
          {...register("email")}
        />
        <S.ErrorWarp>
          {errors.email && <S.Error>{errors.email.message}</S.Error>}
        </S.ErrorWarp>
      </S.InputWrap>
      <S.InputWrap>
        <S.LabelWarp>
          <S.Label>Mensagem</S.Label>
        </S.LabelWarp>
        <S.TextArea
          id="message"
          name="message"
          autoComplete="off"
          placeholder="Sua Duvida"
          {...register("message")}
          onChange={(e) => {
            setCount(e.target.value.length);
          }}
          maxLength={600}
        />
        <S.ErrorWarp>
          {errors.message && <S.Error>{errors.message.message}</S.Error>}
          <S.ContainerCont> {count} / 600</S.ContainerCont>
        </S.ErrorWarp>
      </S.InputWrap>
      <S.ButtonWarp>
        <ButtonDefault
          title={loading ? "Enviando..." : "Enviar"}
          width={"382px"}
          height={"70px"}
          minfontsize="1.75rem"
          idealfontsize="1.25vw"
          maxfontsize="2rem"
          type="submit"
          background={currentTheme.colors.orange500}
          hovercolor={currentTheme.colors.orange600}
        />
      </S.ButtonWarp>
    </S.InputContainer>
  );
};
