import { createWebHistory, createRouter } from "vue-router";
import LoginMain from "@/components/LoginMain";
import HomeMain from "@/components/HomeMain";
import RegistrationMain from "@/components/RegistrationMain";

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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;