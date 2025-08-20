import {
    createBrowserRouter,
  } from "react-router";
import Layout from "../layout/Layout";
import Home from "../components/home/Home";
import App from "../components/pages/App";
import Login from "../components/pages/login/Login";
import Profile from "../components/pages/login/Profile";
import TermsOfService from "../components/pages/TermsOfService";
import PrivacyPolicy from "../components/pages/PrivacyPolicy";
import Documentation from "../components/pages/Documentation";
import APIReference from "../components/pages/APIReference";
import Support from "../components/pages/Support";
import AboutUs from "../components/pages/AboutUs";
import Careers from "../components/pages/Careers";
import Contact from "../components/pages/Contact";
import Register from "../components/pages/login/Register";
import AppDetail from "../components/pages/appsCard/AppDetail";
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../components/pages/ErrorPage";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {index:true, Component:Home},
        {path:'/apps', element: <App></App>},
        {path:'/login', Component: Login},
        {path:'/register', Component: Register},
        {path:'/profile', element: <PrivetRoute> <Profile></Profile> </PrivetRoute>},
        {path:'/terms', Component: TermsOfService},
        {path:'/privacy', Component: PrivacyPolicy}, 
        {path:'/docs', Component: Documentation}, 
        {path:'/api', Component: APIReference}, 
        {path:'/support', Component: Support}, 
        {path:'/about', Component: AboutUs}, 
        {path:'/careers', Component: Careers}, 
        {path:'/contact', Component: Contact}, 
        {path:'/apps/:id', element: <PrivetRoute> <AppDetail></AppDetail> </PrivetRoute>}

      ]
    },
  ]);