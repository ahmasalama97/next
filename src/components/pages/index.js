import HomeIndex from "./HomeIndex"
import Products from "./Products"
import ContactUs from "./ContactUs"

const routes = [
  { path: "/", component: HomeIndex },
  { path: "/products", component: Products },
  { path: "/contact-us", component: ContactUs },
]

export default routes
