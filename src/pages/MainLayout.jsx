import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Outlet } from "react-router"

export const MainLayout =()=>{
  return(
     <>
      <Header />
      <main className="container mx-auto mt-4">
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}