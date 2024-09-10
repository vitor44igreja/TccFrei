import { BrowserRouter, Routes, Route } from "react-router-dom";


//importação das paginas
import App from './pages/cardapio'

export default function Navegacao() {
    return(
        <BrowserRouter>
            <Routes>
               <Route path="/" element = {<App /> }/> 
            </Routes>
        </BrowserRouter>


    )
}