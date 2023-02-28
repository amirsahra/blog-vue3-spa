import {createRouter, createWebHistory} from 'vue-router';
import Home from "@/components/pages/Home";
import IndexUser from "@/components/pages/user/Index";
import ShowUser from "@/components/pages/user/Show";
import IndexPost from "@/components/pages/post/Index";
import ShowPost from "@/components/pages/post/Show";

const routes = [
    {path: "/", name: "home", component: Home},
    {path: "/users", name: "users", component: IndexUser},
    {path: "/users/:id", name: "userId", component: ShowUser},
    {path: "/posts", name: "posts", component: IndexPost},
    {path: "/posts/:id", name: "postId", component: ShowPost},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;