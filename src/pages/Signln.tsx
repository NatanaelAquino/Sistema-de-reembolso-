import { useState } from "react";

import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Signln() {

    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [isLoading, setisLoading] = useState(false)

    function onSubmit(event: React.FormEvent) {
        event.preventDefault();
        console.log(email, password)
    }

    return (

        <form onSubmit={onSubmit} className="w-full flex flex-col gap-4" >
            <Input required legend="E-mail" type="email" placeholder="Seu@email.com" onChange={(e) => setEmail(e.target.value)} />
            <Input required legend="Senha" type="password" placeholder="Digite sua senha" onChange={(e) => setpassword(e.target.value)} />
            <Button Isloading={isLoading}>Entrar</Button>
            <a href="/Singnup" className="text-sm  font-semibold text-gray-100 mt-8 mb-4 text-center hover:text-green-800 transition ease-linear">
                Criar conta
            </a>
        </form>

    );

}   