import { BrowserRouter } from "react-router";
import { Loading } from "../components/Loading";

import { AuthRoutes } from "./Auth-routes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManagerRoutes } from "./ManagerRoutes";

import { useAuth } from "../Hooks/useAuth";

export function AppRoutes() {
    const {session, isLoading} = useAuth()
    function Route() {
        switch (session?.user.role) {
            case "employee":
                return <EmployeeRoutes />;
            case "manager":
                return <ManagerRoutes />;
            default:
                return <AuthRoutes />
        }
    }

    if (isLoading) {
        return <Loading />
    }
    return (
        <BrowserRouter>
            <Route />
        </BrowserRouter>
    );
}