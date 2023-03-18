import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Articles from './Articles';
import ArticleAdd from './ArticleAdd';
import ArticleUpdate from './ArticleUpdate';

const Router = () => {
    return (
        <div>
            <BrowserRouter>

                <Header />
                
                <Routes>

                    <Route exact path='/home' element={<Home />} />
                    <Route exact path='/' element={<Articles />} />
                    <Route exact path='/articles' element={<Articles />} />

                    <Route exact path='/articleadd' element={<ArticleAdd />} />
                    <Route exact path='/articleupdate/:id' element={<ArticleUpdate />} />
                   

                </Routes>

                <Footer />      
            
            </BrowserRouter>          
        </div>
    );
}

export default Router;