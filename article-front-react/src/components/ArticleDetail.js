import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment'

import Global from './Global';
import empty from '../statics/images/empty.png'
import completed from '../statics/images/completed.png'
import incompleted from '../statics/images/incompleted.png'

const ArticleDetail = () => {

    const navigate = useNavigate();

    const {id} = useParams();
    const [article, setArticle]  = useState({});
    const {url, imgPath} = Global;

    const onCancel = ()=>{
        navigate("/articles");
    }

    const getArticle = async ()=> {
        await axios.get(url + 'article/' + id)
                .then(res => {
                    setArticle(res.data.article)
                })
        console.log(article)
    }

    useEffect(()=>{
        getArticle();
    }, [url, id])

    if (article != null){
        return (
            <div className="container mb-4">

                <div className='title d-flex felx-row align-items-center'>
                    <div>
                        <h1 className="p-4 bg-header mt-1">{article.title} </h1>
                    </div>
                    <div id='completed'>
                        {article.completed ?
                            <td><img src={completed} className="img-thumbnail cursor" width={50} alt="completed" /></td>
                        :
                            <td><img src={incompleted} className="img-thumbnail cursor" width={50} alt="incompleted" /></td>
                        }
                    </div>
                </div>

                
                
                <div className='row-1 d-flex flex-row flex-sm-row'>

                    <div id='content'>
                        <div id='description' className='col-8 mb-3' >
                            <p>
                                {article.description}
                            </p>
                        </div>

                        <div id='created mt-20'>
                            <p>
                                {moment(article.created).format('MM/DD/YYYY')}
                            </p>
                        </div>

                        
                    </div>
                    
                    <div className='col-5 mb-3'>
                        <div>
                            {
                                article.image ?
                                <img src={imgPath + article.image} className="img-thumbnail cursor" width={500} alt="Article" />
                            :
                                <img src={empty} className="img-thumbnail cursor" width={400} alt="Article" />
                            }
                            
                        </div>
                    </div>
                  
                </div>

                <div className="col-11 d-flex justify-content-center">
                    <button onClick={()=>{onCancel()}} className="btn btn-secondary">Go Back</button>
                </div>


                
            </div>
        );
    }
    
}

export default ArticleDetail;