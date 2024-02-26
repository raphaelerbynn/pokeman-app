import { Routes, Route, Navigate } from "react-router-dom"
import { HomePage, ListViewPage } from "../Pages"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" >
                <Route index element={<Navigate to="home" />} />
                <Route index path="home" element={<HomePage />} />
                <Route index path="list-view" element={<ListViewPage />} />
            </Route>    
        </Routes>
    )
}

export default AppRoutes