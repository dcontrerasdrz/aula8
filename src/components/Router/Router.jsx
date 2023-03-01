import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, ErrorPage, DetailsPage} from"../../pages"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/details' element={<DetailsPage />}/>
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;