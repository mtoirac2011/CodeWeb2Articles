import React , {useState, useEffect} from 'react';
import axios from 'axios';
import Global from './Global'

import edit from '../statics/images/edit.png'
import update from '../statics/images/update.png'
import dele from '../statics/images/delete.png'
import create from '../statics/images/create.png';
import empty from '../statics/images/empty.png'
import completed from '../statics/images/completed.png'
import incompleted from '../statics/images/incompleted.png'

import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import Swal from 'sweetalert2'



const Articles = () => {

    const [articles, setArticles] = useState([]);
    const [status, setStatus] = useState(false);

    const url = Global.url;
    const navigate = useNavigate();
    const urlFull =  url + 'articles'

    const onCreate = (id)=>{
        navigate("/articleadd")
    }

    const onEdit = (id)=>{
        navigate("/articleedit/"+id)
    }

    const onDelete = (id)=>{
        Swal.fire({
            icon: "warning",
            title: "Are you sure to delete '"+ id +"' article?",
            showDenyButton: true,
            denyButtonText: "Cancel",
            denyButtonColor: "#6C757D",
            confirmButtonText: "Delete",
            confirmButtonColor: "#0D6EFD",
          }).then((res) => {
            if (res.isConfirmed) {
                axios.delete(url + "article/"+ id)
                .then(res => {
                  setStatus(false);
              })

            }
           
          });
    }

    const onUpdate = (id)=>{
        navigate("/updateArticle/"+id)
    }

    const getArticles = async ()=> {
        console.log('urlFull', urlFull)
        await axios.get(urlFull)
                .then(res => {
                    setStatus(true);
                    setArticles(res.data.articles)
                })
        console.log(articles)
    }

    useEffect(() => {
        getArticles();
      }, []); 

    if (articles.length >= 1){
        
        return (
            <>
            <div className='row mt-1'>
                <div className='col-10'></div>
                <div className='col-1'>
                </div>
                <div className='col-1'>
                  
                </div>
            </div>
            
            <div className="container mt-3">
                <h2>List of Articles</h2>
               
                    <p>
                        <img onClick={() => onCreate()} src={create} className="img-thumbnail cursor" width={24} alt="Create" />
                        <span> <strong>Add a article</strong> </span>   
                    </p> 
                                  
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Created</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        articles.map(article =>
                            <tr key={article.id}>
                                {
                                article.image != null ?
                                    <td><img onClick={() => onEdit(article.id)} src={url + 'get-image/' +article.image} className="img-thumbnail cursor" width={60} alt="article" /></td>
                                :
                                    <td><img src={empty} className="img-thumbnail cursor" width={60} alt="article" /></td>
                                }
                                
                                <td>{article.title.substring(0, 25)}</td>
                                <td>{article.description.substring(0, 35)+'...'}</td>
                                <td>{article.created.substring(0, 10)}</td>

                                {article.completed ?
                                    <td><img src={completed} className="img-thumbnail cursor" width={25} alt="completed" /></td>
                                :
                                    <td><img src={incompleted} className="img-thumbnail cursor" width={30} alt="incompleted" /></td>
                                }
                                

                                <td>
                                    <img onClick={() => onEdit(article.id)} src={edit} className="img-thumbnail cursor" width={25} alt="Edit" />
                                </td>

                                <td>
                                    <img onClick={() => onDelete(article.id)} src={dele} className="img-thumbnail cursor" width={25} alt="Delete" />
                                </td>

                                <td>
                                    <img onClick={() => onUpdate(article.id)} src={update} className="img-thumbnail cursor" width={25} alt="Update" />
                                </td>
                               
                                
                            </tr>
                            
                            )
                        
                        }
                        
                    </tbody>
                </table>    
            </div>
            </>
        );

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
export default Articles;