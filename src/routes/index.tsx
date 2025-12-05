import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./Auth-routes";
import { EmployeeRoutes } from "./EmployeeRoutes";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <EmployeeRoutes />
        </BrowserRouter>
    );
}