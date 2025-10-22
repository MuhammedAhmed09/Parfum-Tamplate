import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import AnnounceNav from './assets/page/layout/AnnounceNav'
import Footer from './assets/page/layout/Footer'
import Navigate from './assets/page/layout/Navigate'
import Home from './assets/page/outlet/Home'
import Shop from './assets/page/outlet/Shop'
import About from './assets/page/outlet/About'
import Blog from './assets/page/outlet/Blog'
import Contact from './assets/page/outlet/Contact'
import Cart from './assets/page/outlet/Cart'
import NotFound from './assets/page/NotFound'
import AnnounceProvider from './assets/context/AnnounceIsOpen'
import GetProductsProvider from './assets/context/ProductsAPI'
import Product from './assets/page/outlet/Product'
import ProductsProvider from './assets/context/CartProducts'


const Layout = () => {
return(
      <>
      <AnnounceNav />
      <Navigate />
      <Outlet />
      <Footer />
      </>
    )
  }

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='product/:id' element={<Product />} />
        <Route path='about' element={<About />} />
        <Route path='blog' element={<Blog />} />
        <Route path='contact' element={<Contact />} />
        <Route path='cart' element={<Cart />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  ));

  return(
    <AnnounceProvider>
      <GetProductsProvider>
        <ProductsProvider>
          <RouterProvider router={router} />
        </ProductsProvider>
      </GetProductsProvider>
    </AnnounceProvider>
  )
  
}

export default App
