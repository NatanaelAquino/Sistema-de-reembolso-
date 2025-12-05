import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./Auth-routes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManagerRoutes } from "./ManagerRoutes";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <ManagerRoutes />
        </BrowserRouter>
    );
}