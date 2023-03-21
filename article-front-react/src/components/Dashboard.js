import DonutChart from 'react-donut-chart';
import React , {useState, useEffect}  from 'react';
import axios from 'axios';
import Global from './Global';

const Dashboard = () =>{

    const {completed, setCompleted} = useState(0)
    const {incompleted, setIncompleted} = useState(0)
    const [articles, setArticles] = useState([])

    const url = Global.url

    const getArticles = async ()=> {
        await axios.get(url + 'articles')
                .then(res => {
                    setArticles(res.data.articles)
                })
    }

    const getCompleted = (articles)=> {
        let count = 0
        if (articles.lenght > 0){
            articles.forEach(article => {
                if (article.completed){
                    count++;
                } 
            }) 
        }
        console.log('articles: ' + articles.length)
        console.log('count: ' + count)

        // setCompleted(count/articles.lenght*100)
        // setIncompleted(100 - completed)

        // console.log(completed)
        // console.log(incompleted)
    }

    useEffect(() => {
        getArticles();
        getCompleted(articles)
    }, []); 

    return (
        <div className='container'>
             <div className='row mb-20'>
                <p>
                    
                </p>
             </div>
            <div className='row d-flex mt-40 pt-20'>
                <div className='col-md-5 total'>
                    <h1>{'Total: ' +articles.length}</h1>
                </div>

                <div className='col-md-5 mt-20'>
                    <DonutChart
                        data={[
                            {
                            label: 'Completed',
                            value: 40,
                            },
                            {
                            label: 'Incompleted',
                            value: 60,
                            isEmpty: false
                            }
                        ]}
                    />
                </div>
            </div>
           
        </div>
    )
}
export default Dashboard