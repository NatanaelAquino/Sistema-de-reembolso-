import { useState } from "react";

import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SingnUp() {
    const [name, setname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [passwordConfirm, setpasswordConfirm] = useState("")
    const [isLoading, setisLoading] = useState(false)

    function onSubmit(event: React.FormEvent) {
        event.preventDefault();
        console.log(email, password)
    }

    return (

        <form onSubmit={onSubmit} className="w-full flex flex-col gap-4" >
            <Input required legend="Nome"  placeholder="Digite seu nome" onChange={(e) => setname(e.target.value)} />
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