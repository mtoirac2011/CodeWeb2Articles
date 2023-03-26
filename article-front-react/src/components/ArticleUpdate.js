import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Global from './Global';
import empty from '../statics/images/empty.png'
import {useForm} from 'react-hook-form';

const ArticleUpdate = () => {

    const navigate = useNavigate();
    const {register, formState:{errors}, handleSubmit} = useForm({});

    const {id} = useParams();
    const [article, setArticle]  = useState({});
    const {url, imgPath} = Global;

    const onSubmit = (data) => {
        
        var imageUpdated = article.image;

        if (data.file[0] !== null && data.file[0] !== undefined){

            imageUpdated = data.file[0].name;

            const fd = new FormData();
            fd.append('file0', data.file[0]);

            //Post
            axios.post(url + "upload-image", fd)
            .then(res =>{
                if(res.ok) {
                    console.log(res.data);
                }
            })
        }

        const loadParams = {
            id:id, 
            title: data.title, 
            description: data.description,
            created: new Date(),
            image: imageUpdated,
            completed:data.completed
        }
        //Put
        axios.put(url + "article/" + id, loadParams)
            .then(res => {
                if (res.data){ 
                }
            });
        navigate("/articles");
    }

    const onCancel = ()=>{
        navigate("/articles");
    }

    

    useEffect(()=>{

        const getArticle = async ()=> {
            await axios.get(url + 'article/' + id)
                    .then(res => {
                        setArticle(res.data.article)
                    })
            console.log(article)
        }

        getArticle();
    }, [id, url, article])

    if (article != null){
        return (
            <div className="container mb-4">
                <h2 className="subtitle mt-3 mb-3">Updating an Article</h2>
                
                <div className='row mb-3' key={article.key}>

                    <div className='col-6 mb-3'>
                        <div>
                            {
                                article.image ?
                                <img src={imgPath + article.image} className="img-thumbnail cursor" width={500} alt="Article" />
                            :
                                <img src={empty} className="img-thumbnail cursor" width={300} alt="Article" />
                            }
                            
                        </div>
                    </div>

                    <div className='col-6 mb-3' >

                        <form onSubmit={handleSubmit(onSubmit)} className='g-3'>

                            <div className="col-12 mb-1">
                                <label className="form-label">Title</label>
                                <input type="text" 
                                    className="form-control" 
                                    defaultValue={article.title}
                                    {...register('title', {required: true})} 
                                />
                                {errors.title?.type === 'required' && <p className='valerror'>The title must be entered</p>}
                                
                            </div>

                            <div className="mb-1">
                                <label  className="form-label">Description</label>
                                <textarea className="form-control" 
                                    rows="3"
                                    defaultValue={article.description}
                                    {...register('description', {required: true})} 
                                />
                                {errors.description?.type === 'required' && <p className='valerror'>The description must be entered</p>}
                            </div>

                            <div className="mb-2">
                                <label className="form-label">Load a new image</label>
                                <input className="form-control" 
                                        type="file" 
                                        {...register('file')} 
                                />
                                
                            </div>

                            <div className="col-3 mb-2">
                                <div className="form-check">
                                    <label className="form-check-label">Completed?</label>
                                    <input className="form-check-input" 
                                        type="checkbox" 
                                        defaultChecked={article.completed}
                                        {...register('completed')} 
                                />                                  
                                </div>
                            </div>
                            <div className="col-11 d-flex justify-content-center">
                                <button type='submit' className="btn btn-primary">Update</button>
                                <div className='col-1 mb-1'></div>
                                <button onClick={()=>{onCancel()}} className="btn btn-secondary">Cancel</button>
                            </div>
                            
                        </form>

                    </div>

                </div>

                
            </div>
        );
    }
    
}

export default ArticleUpdate;