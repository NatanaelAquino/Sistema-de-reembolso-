import { Outlet } from "react-router";

import logSvg from "../assets/logo.svg";

export function AuthLayout() {
    return (
        <div className="w-screen h-screen bg-gray-400 flex flex-col justify-center items-center text-gray-100 ">
            <main className=" p-3 w-full bg-gray-500  rounded-md flex items-center flex-col md:min-w-[462px]">
                <img src={logSvg} alt="logo" className=" my-8" />
                <Outlet />
            </main>

        </div>
    )
}