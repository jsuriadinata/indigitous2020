import Splash from "./views/Splash"
import View from "./views/View"
import Backend from "./views/BackendCalls"

const Routes = [
    {
        title: "Home",
        path: "/",
        exact: true,
        Component: Splash
    },
    {
        title: "View",
        path: "/view",
        Component: View
    },
    {
        title: "Backend",
        path: "/backend",
        Component: Backend
    },
]

export default Routes