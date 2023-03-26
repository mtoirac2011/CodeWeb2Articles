import DonutChart from 'react-donut-chart';
import React , {useState, useEffect}  from 'react';
import axios from 'axios';
import Global from './Global';
import Loading from './Loading';

const Dashboard = () =>{

    const [articles, setArticles] = useState([])
    const [dashboard, setDashboard] = useState({})
    const [status, setStatus] = useState(false)

    const {url} = Global

    const getArticles = async ()=> {
        await axios.get(url + 'articles')
                .then(res => {
                    setArticles(res.data.articles)
                    setStatus(true)
                })
    }

    const getCompleted = async ()=> {
        await axios.get(url + 'completed')
            .then(res => {
                setDashboard(res.data.dashboard)
            })
        
    }

    useEffect(() => {
        getArticles()
        getCompleted()
    }, []); 

    if (articles.length >= 1){
        return (
            <div className='container'>
                <div className='row mb-20'>
                    <h2 className='subtitle mt-3'>Dashboard</h2>
                </div>
                <div className='row d-flex mt-40 pt-20'>
    
                    <div className='col-md-5'>
    
                        <div className='total'>
                            <p className='texto'> TOTAL ARTICLES</p>
                            <h1>{articles.length}</h1>
                        </div>
                        
                    </div>
    
                    <div className='col-md-5 mt-20'>
                        <DonutChart
                            data={[
                                {
                                label: 'Completed',
                                value: Math.round(dashboard.completed / articles.length * 100)
                                },
                                {
                                label: 'Incompleted',
                                value: 100 - Math.round(dashboard.completed / articles.length * 100),
                                isEmpty: false
                                }
                            ]}
                        />
                    </div>
                </div>
               
            </div>
        )
    }else if(!status){
        return(
            <div>
                <Loading />
            </div>
        )
    }else{
        return(
            <>
                <div className='altura'></div>
                    <h3 className='text-center'>There is no Article to show...</h3>
                <div className='altura'></div>
            </>
            
        )
    }

    
}
export default Dashboard