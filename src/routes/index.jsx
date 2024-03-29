import { Routes, Route, Navigate } from "react-router-dom"
import { HomePage, ListViewPage, NotFoundPage } from "../Pages"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" >
                <Route index element={<Navigate to="home" />} />
                <Route path="home" element={<HomePage />} />
                <Route path="list-view" element={<ListViewPage />} />
            </Route>   
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRoutes