import { createWebHistory, createRouter } from "vue-router";
import LoginMain from "@/components/LoginMain";
import HomeMain from "@/components/HomeMain";
import RegistrationMain from "@/components/RegistrationMain";
import ForgotMain from "@/components/ForgotMain";
import PortfolioMain from "@/components/PortfolioMain";

const routes = [
    {
        path: "/",
        name: "HomeMain",
        component: HomeMain,
    },
    {
        path: "/login",
        name: "LoginMain",
        component: LoginMain,
    },
    {
        path: "/registration",
        name: "RegistrationMain",
        component: RegistrationMain,
    },
    {
        path: "/forgot",
        name: "ForgotMain",
        component: ForgotMain,
    },
    {
        path: "/profile",
        name: "PortfolioMain",
        component: PortfolioMain,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;