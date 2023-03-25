import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Articles from './Articles';
import ArticleAdd from './ArticleAdd';
import ArticleUpdate from './ArticleUpdate';
import ArticleDetail from './ArticleDetail';
import Dashboard from './Dashboard';
import Error from './Error'

const Router = () => {
    return (
        <div>
            <BrowserRouter>

                <Header />
                
                <Routes>

                    <Route exact path='/' element={<Dashboard />} />
                    <Route exact path='/dashboard' element={<Dashboard />} />

                    <Route exact path='/articles' element={<Articles />} />
                    <Route exact path='/articleadd' element={<ArticleAdd />} />
                    <Route exact path='/articleupdate/:id' element={<ArticleUpdate />} />
                    <Route ecact path='/articledetail/:id' element={<ArticleDetail />} />
                    
                    <Route exact path="*" element={<Error />} />

                </Routes>

                <Footer />      
            
            </BrowserRouter>          
        </div>
    );
}

export default Router;