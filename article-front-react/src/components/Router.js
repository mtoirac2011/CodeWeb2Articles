import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Articles from './Articles';

const Router = () => {
    return (
        <div>
            <BrowserRouter>

                <Header />
                
                <Routes>

                    <Route exact path='/' element={<Articles />} />
                    <Route exact path='/home' element={<Home />} />

                    {/* <Route exact path='/claimlist' element={<ClaimList />} />
                    <Route exact path='/claimedit/:id/:user' element={<ClaimEdit />} />
                    <Route exact path='/claimtrack/:id/:user' element={<ClaimTrack />} />
                    <Route exact path='/claim/:id' element={<Claim />} />
                    
                    <Route exact path='/pdf/:file' element={<Pdf />} />
                    <Route exact path='/test' element={<Test />} />

                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/logout' element={<Logout />} />

                    <Route exact path='*' element={<ClaimList />} /> */}

                </Routes>

                <Footer />      
            
            </BrowserRouter>          
        </div>
    );
}

export default Router;