import React from 'react';
import PostDataService from '../service/PostDataService';

class LinkUpload extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            url: '',
            uploadFailed: false
        }
    }

    uploadPost = e => {
        e.preventDefault();

        const title = e.target.elements.uploadTitle.value;
        const description = e.target.elements.uploadDescription.value;
        const url = e.target.elements.uploadURL.value;
        const type = e.target.elements.infoType.value;

        PostDataService.uploadPost(title, description, url, type)
            .then(
                response => {
                    console.log(response)
                    if(response.status === 200){
                        alert("Upload Successful!")
                        e.target.elements.uploadTitle.value = null;
                        e.target.elements.uploadDescription.value = null;
                        e.target.elements.uploadURL.value = null;
                        e.target.elements.infoType.value = 'documentation';
                    }else{
                        alert("Upload Failed")
                    }
                }
            ).catch(() => {
                alert("Failed To Connect To Server")
            })
    }

    render(){
        return(
            <div className='linkUploadContainer'>
                Upload A New Post
                <form onSubmit={this.uploadPost.bind(this)}>
                    <table>
                        <tr>
                            <td className='prompt'>
                                Title: 
                            </td>
                            <td>
                                <input type='text' name='uploadTitle'></input>
                            </td>
                        </tr>
                        <tr>
                            <td className='prompt'>
                                URL: 
                            </td>
                            <td>
                                <input type='text' name='uploadURL'></input>
                            </td>
                        </tr>
                        <tr>
                            <td className='prompt'>
                                Description (optional): 
                            </td>
                            <td>
                                <textarea name='uploadDescription'></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td className='prompt'>
                                Topic: 
                            </td>
                            <td>
                                <select name='topic'>
                                    <option value='none'>---Select Topic---</option>
                                    <option value='CSHARP'>C#</option>
                                    <option value='CSS'>CSS</option>
                                    <option value='HTML'>HTML</option>
                                    <option value='JAVA'>Java</option>
                                    <option value='JAVASCRIPT'>JavaScript</option>
                                    <option value='SPRINGBOOT'>Spring Boot</option>
                                    <option value='SQL'>SQL</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className='prompt'>
                                Link Type: 
                            </td>
                            <td>
                                <select name='infoType'>
                                    <option value='documentation'>Official Documentation</option>
                                    <option value='article'>Article</option>
                                    <option value='stack-overflow'>Stack Overflow</option>
                                    <option value='tutorial'>Tutorial (written)</option>
                                    <option value='video'>Video</option>
                                    <option value='other'>Other</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                    <button type='submit' name='submitButton' >Post</button>
                </form>
            </div>
        )
    }
}

export default LinkUpload;