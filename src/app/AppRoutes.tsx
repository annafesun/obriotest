import { lazy, Suspense } from "react"
import {
  PRELANDING,
  BIRTHDATE,
  DATABASE,
  WEDDING_STATUS,
  PARENT,
  PROBLEMS,
  DECISION,
  ANSWER,
  EMAIL,
} from "../constants/routes"
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import { Box, CircularProgress } from "@mui/material"

const Prelanding = lazy(() => import("../pages/Prelanding"))
const Birthdate = lazy(() => import("../pages/Birthdate"))
const Database = lazy(() => import("../pages/Database"))
const WeddingStatus = lazy(() => import("../pages/WeddingStatus"))
const Parent = lazy(() => import("../pages/Parent"))
const Problems = lazy(() => import("../pages/Problems"))
const Decision = lazy(() => import("../pages/Decision"))
const Answer = lazy(() => import("../pages/Answer"))
const Email = lazy(() => import("../pages/Email"))

const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <Box sx={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <CircularProgress sx={{ width: "50px", height: "50px" }} />
        </Box>
      }
    >
      <BrowserRouter>
        <Routes>
          <Route path={PRELANDING} element={<Prelanding />} />
          <Route path={BIRTHDATE} element={<Birthdate />} />
          <Route path={DATABASE} element={<Database />} />
          <Route path={WEDDING_STATUS} element={<WeddingStatus />} />
          <Route path={PARENT} element={<Parent />} />
          <Route path={PROBLEMS} element={<Problems />} />
          <Route path={DECISION} element={<Decision />} />
          <Route path={ANSWER} element={<Answer />} />
          <Route path={EMAIL} element={<Email />} />
          <Route path="*" element={<Navigate to={PRELANDING} replace={true} />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default AppRoutes
