import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/Layout/MainLayout";
import ManageLayout from "../pages/Layout/ManageLayout";
import QuestionLayout from "../pages/Layout/QuestionLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import List from "../pages/manage/List"
import Trash from "../pages/manage/Trash";
import Star from "../pages/manage/Star"
import Stat from "../pages/question/Stat";
import Edit from "../pages/question/Edit";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path:"/manage",
        element: <ManageLayout />,
        children:[
          {
            path:"list",
            element: <List />
          },
          {
            path:"trash",
            element: <Trash />
          },
          {
            path:"star",
            element: <Star />
          }
        ]
      },
      
      {
        path:"*",   //兜底
        element: <NotFound />
      }
    ]
  },
  {
    path: "/question",
    element: <QuestionLayout />,
    children: [
      {
        path: "stat/:id",
        element: <Stat />
      },
      {
        path: "edit/:id",
        element: <Edit />
      }
    ]
  },
])



export default router