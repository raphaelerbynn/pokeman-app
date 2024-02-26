import { Routes, Route, Navigate } from "react-router-dom"
import { HomePage } from "../Pages"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" >
                <Route index element={<Navigate to="home" />} />
                <Route index path="home" element={<HomePage />} />
            </Route>    
        </Routes>
    )
}

export default AppRoutes