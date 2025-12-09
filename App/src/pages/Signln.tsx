import { useActionState } from "react";
import { z, ZodError } from "zod";
import { AxiosError } from "axios";

import { api } from "../services/api";

import { Button } from "../components/Button";
import { Input } from "../components/Input";

const signInSchema = z.object({
    email: z.string().email({ message: "E-mail Inválido" }),
    password: z.string().trim().min(1, { message: "Informe a senha" })
})


export function Signln() {
    const [state, formAction, isLoading] = useActionState(onAction, null)

    async function onAction(_: any, formData: FormData) {
        try {
            const data = signInSchema.parse({
                email: formData.get("email"),
                password: formData.get("password")
            })

            const responde = await api.post("/sessions", data)
            console.log(responde)

        }
        catch (error) {
            console.log(error)
            if (error instanceof ZodError) {
                return { message: error.issues[0].message }
            }
            if (error instanceof AxiosError) {
                return { message: error.response?.data.message }
            }

            return { message: "Não foi possivel entra " }
        }
    }
    return (

        <form action={formAction} className="w-full flex flex-col gap-4" >
            <Input required name="email" legend="E-mail" type="email" placeholder="Seu@email.com" />
            <Input required name="password" legend="Senha" type="password" placeholder="Digite sua senha" />
            <p className="text-sm text-red-600 text-center my-4 font-medium ">
                {state?.message}
            </p>
            <Button Isloading={isLoading}>Entrar</Button>
            <a href="/Singnup" className="text-sm  font-semibold text-gray-100 mt-8 mb-4 text-center hover:text-green-800 transition ease-linear">
                Criar conta
            </a>
        </form>

    );

}   