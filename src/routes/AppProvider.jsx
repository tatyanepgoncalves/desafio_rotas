import { createBrowserRouter, createRoutesFromElements,  Route, RouterProvider } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Layout from "../components/Layout/Layout";
import SejaVoluntarioPage from "../pages/SejaVoluntarioPage"

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Layout />}>
      <Route path="/" index element={<HomePage />} />
      <Route path="seja-voluntario" element={<SejaVoluntarioPage />} />
    </Route>
  </>
))

export default function AppProvider() {
  return <RouterProvider router={router} />
}
