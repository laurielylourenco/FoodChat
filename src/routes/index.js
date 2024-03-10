// AppRouter.js
import React from 'react';
import { useRoutes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Login';
import Conversation from '../components/Conversation';
import Page404 from '../pages/Page404';
import Site from '../components/Site';


const AppRouter = () => {
  const routes = useRoutes([
    { path: '/login', element: <Login /> },
    { path: '/', element: <Login /> },
    { path: '/chat', element: <Conversation /> },
    { path: '/404', element: <Page404 /> },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);

  return routes;
};

export default AppRouter;
