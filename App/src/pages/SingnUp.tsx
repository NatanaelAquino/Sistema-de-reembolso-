import { useState } from "react";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";
import { z, ZodError } from "zod"


import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { api } from "../services/api";



const SingnUpSchema = z.object({
    name: z.string().trim().min(2, { message: "Informe o nome" }),
    email: z.string().trim().email({ message: "E-mail inválido" }),
    password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
    passwordConfirm: z.string().min(1, "Confirme a senha")
}).refine((data) => data.password === data.passwordConfirm, {
    message: "As senha não são iguais",
    path: ["passWordConfirm"]
})

export function SingnUp() {

    const [name, setname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [passwordConfirm, setpasswordConfirm] = useState("")
    const [isLoading, setisLoading] = useState(false)
    const navigate = useNavigate()

    async function onSubmit(event: React.FormEvent) {
        event.preventDefault();
        try {
            setisLoading(true)
            const data = SingnUpSchema.parse({
                name,
                email,
                password,
                passwordConfirm
            })
            await api.post("/users", data)
            if (confirm("cadastrado com sucesso, Ir para tela de entrar?")) {
                navigate("/")
            }
        } catch (error) {
            if (error instanceof ZodError) {
                return alert(error.issues[0].message)
            }
            if (error instanceof AxiosError) {
                return alert(error.response?.data.message)
            }
            alert("Não foi possivel cadastrar!")
        } finally {
            setisLoading(false)
        }
    }
    return (
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-4" >
            <Input required legend="Nome" placeholder="Digite seu nome" onChange={(e) => setname(e.target.value)} />
            <Input required legend="E-mail" type="email" placeholder="Seu@email.com" onChange={(e) => setEmail(e.target.value)} />
            <Input required legend="Senha" type="password" placeholder="123456" onChange={(e) => setpassword(e.target.value)} />
            <Input required legend="Confirmação da senha" type="password" placeholder="123456" onChange={(e) => setpasswordConfirm(e.target.value)} />
            <Button Isloading={isLoading}>Cadastrar</Button>
            <a href="/" className="text-sm  font-semibold text-gray-100 mt-8 mb-4 text-center hover:text-green-800 transition ease-linear">
                Já tenho uma conta
            </a>
        </form>

    );

}   