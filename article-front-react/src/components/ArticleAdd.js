import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import Global from './Global';
import {useForm} from 'react-hook-form';

const ArticleAdd = () => {

    const {url} = Global;
    const navigate = useNavigate();

    const {register, formState:{errors}, handleSubmit} = useForm({
        defaultValues: {
            title: '', 
            description: '',
            file: [],
            image: null,
            completed:false
        }
    });

    const onSubmit = (data) => {
        var imageUpdated = null;

        if (data.file[0] !== null && data.file[0] !== undefined){

            imageUpdated = data.file[0].name;

            const fd = new FormData();
            fd.append('file0', data.file[0]);

            //Post
            axios.post("http://localhost:3700/api/upload-image", fd)
            .then(res =>{
                if(res.ok) {
                    console.log(res.data);
                }
            })
        }

        const loadParams = {
            title: data.title, 
            description: data.description,
            created: new Date(),
            image: imageUpdated,
            completed:data.completed
        }
        //Post
        axios.post(url + "article", loadParams)
            .then(res => {
                if (res.data){ 
                    console.log(res.data);
                }
            });

        
        navigate("/articles");

    }

    const onCancel = ()=>{
        navigate("/articles");
    }   

 
    return (
        <div className="container mb-4">
            <h2 className="subtitle mt-3">Adding an Article</h2>
            
            <div className='row mb-3'>

                <div className='col-3'></div>

                <div className='col-6 mb-3' >

                    <form onSubmit={handleSubmit(onSubmit)} className='g-3'>

                        <div className="col-12 mb-1">
                            <label className="form-label">Title</label>
                            <input type="text" 
                                className="form-control" 
                                {...register('title', {required:true})} 
                            />
                            {errors.title?.type === 'required' && <p className='valerror'>The title must be entered</p>}
                            
                        </div>

                        <div className="mb-1">
                            <label  className="form-label">Description</label>
                            <textarea className="form-control" 
                                rows="3"
                                {...register('description', {required:true})} 
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
                                    {...register('completed')} 
                            />                                  
                            </div>
                        </div>
                        <div className="col-11 d-flex justify-content-center">
                            <button type='submit' className="btn btn-primary">Add it</button>
                            <div className='col-1 mb-1'></div>
                            <button onClick={()=>{onCancel()}} className="btn btn-secondary">Cancel</button>
                        </div>
                        
                    </form>

                </div>

                <div className='col-3'></div>

            </div>

            
        </div>
    );
    
    
}

export default ArticleAdd;