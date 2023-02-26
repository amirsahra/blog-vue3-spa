import {createRouter, createWebHistory} from 'vue-router';
import Home from "@/components/pages/Home";
import IndexUser from "@/components/pages/user/Index";
import ShowUser from "@/components/pages/user/Show";

const routes = [
    {path: "/", name: "home", component: Home},
    {path: "/users", name: "users", component: IndexUser},
    {path: "/users/:id", name: "userId", component: ShowUser}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;