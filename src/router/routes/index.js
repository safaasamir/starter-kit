// ** React Imports
import { Fragment, lazy } from "react"
import { Navigate } from "react-router-dom"
// ** Layouts
import BlankLayout from "@layouts/BlankLayout"
import VerticalLayout from "@src/layouts/VerticalLayout"
import HorizontalLayout from "@src/layouts/HorizontalLayout"
import LayoutWrapper from "@src/@core/layouts/components/layout-wrapper"

// ** Route Components
import PublicRoute from "@components/routes/PublicRoute"

// ** Utils
import { isObjEmpty } from "@utils"
import EditProfile from "../../views/Action/Editprofile"
import Editpassword from "../../views/Action/Editpassword"

const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />,
  horizontal: <HorizontalLayout />
}

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template"

// ** Default Route
const DefaultRoute = "/home"

const Home = lazy(() => import("../../views/Home"))
const SchoolPage = lazy(() => import("../../views/Action/SchoolPage"))
const Schooladmin = lazy(() => import("../../views/Action/Schooladmin"))
const Login = lazy(() => import("../../views/Login/Login"))
const Register = lazy(() => import("../../views/Login/Register"))
const ForgotPassword = lazy(() => import("../../views/Login/ForgotPassword"))
const Error = lazy(() => import("../../views/Error"))
const Parents = lazy(() => import("../../views/Action/Parent"))
const Add = lazy(() => import("../../views/Add/AddParents"))
const AddDriver = lazy(() => import("../../views/Add/AddDriver"))
const Driver = lazy(() => import("../../views/Action/Drivers"))
const Bus = lazy(() => import("../../views/Action/Bus"))
const Plan = lazy(() => import("../../views/Action/Plan"))
const Profile = lazy(() => import("../../views/Action/Editprofile"))
const Password = lazy(() => import("../../views/Action/Editpassword"))
const EditDriver= lazy(() => import("../../views/Edit/EditDriver"))

// ** Merge Routes
const Routes = [
  {
    path: "/",
    index: true,
    element: <Navigate replace to={DefaultRoute} />,
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/plans-page",
    element: <Plan />
  },
  {
    path: "/driver",
    element: <Driver />
  },
  {
    path: "/edit-profile",
    element: <Profile />
  },
  {
    path: "/edit-password",
    element: <Password />
  },
  {
    path: "/edit-driver",
    element: <EditDriver/>
  },
  {
    path: "/bus-page",
    element: <Bus />
  },
  {
    path: "/school-page",
    element: <SchoolPage />,
  },
  {
    path: "/school-admin",
    element: <Schooladmin />,
  },
  {
    path: "/parent-page",
    element: <Parents />,
  },
  {
    path: "/login",
    element: <Login />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/register",
    element: <Register />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/AddParent",
    element: <Add/>,
    
  },
{

  path: "/AddDriver",
  element: <AddDriver/>,
  
},
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/error",
    element: <Error />,
    meta: {
      layout: "blank",
    },
  },
];

const getRouteMeta = (route) => {
  if (isObjEmpty(route.element.props)) {
    if (route.meta) {
      return { routeMeta: route.meta };
    } else {
      return {};
    }
  }
};

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = [];

  if (Routes) {
    Routes.filter((route) => {
      let isBlank = false;
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {
        const RouteTag = PublicRoute;

        // ** Check for public or private route
        if (route.meta) {
          route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false);
        }
        if (route.element) {
          const Wrapper =
            // eslint-disable-next-line multiline-ternary
            isObjEmpty(route.element.props) && isBlank === false
              ? // eslint-disable-next-line multiline-ternary
                LayoutWrapper
              : Fragment;

          route.element = (
            <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
              <RouteTag route={route}>{route.element}</RouteTag>
            </Wrapper>
          );
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      }
      return LayoutRoutes;
    });
  }
  return LayoutRoutes;
};

const getRoutes = (layout) => {
  const defaultLayout = layout || "vertical";
  const layouts = ["vertical", "horizontal", "blank"];

  const AllRoutes = [];

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout);

    AllRoutes.push({
      path: "/",
      element: getLayout[layoutItem] || getLayout[defaultLayout],
      children: LayoutRoutes,
    });
  });
  return AllRoutes;
};

export { DefaultRoute, TemplateTitle, Routes, getRoutes };
