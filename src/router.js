import { createWebHistory, createRouter } from "vue-router";
import LoginMain from "@/components/LoginMain";
import HomeMain from "@/components/HomeMain";
import RegistrationMain from "@/components/RegistrationMain";
import ForgotMain from "@/components/ForgotMain";
import PortfolioMain from "@/components/PortfolioMain";
import PortfolioEdit from "@/components/PortfolioEdit";
import ContractMain from "@/components/ContractMain";
import ContractInfo from "@/components/ContractInfo";
import DescriptionMain from "@/components/DescriptionMain";
import ReviewsMain from "@/components/ReviewsMain";
import TestTest from "@/components/TestTest";


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
    {
        path: "/editprofile",
        name: "PortfolioEdit",
        component: PortfolioEdit,
    },
    {
        path: "/contract",
        name: "ContractMain",
        component: ContractMain,
    },
    {
        path: "/contract_info",
        name: "ContractInfo",
        component: ContractInfo,
    },
    {
        path: "/description",
        name: "DescriptionMain",
        component: DescriptionMain,
    },
    {
        path: "/reviews",
        name: "ReviewsMain",
        component: ReviewsMain,
    },
    {
        path: "/test",
        name: "TestTest",
        component: TestTest,
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;