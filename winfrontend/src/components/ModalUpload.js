import React from 'react';
import Box from './gestalt/Box';
import Modal from './gestalt/Modal';
import Heading from './gestalt/Heading';
import PostDataService from '../service/PostDataService';

class ModalUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    uploadPost(e){
        e.preventDefault();

        const title = e.target.elements.uploadTitle.value;
        const description = e.target.elements.uploadDescription.value;
        let url = e.target.elements.uploadURL.value;
        const type = e.target.elements.infoType.value;
        let user;
        if(this.props.currentUser != null){
            user = this.props.currentUser;
        }else {
            user = "Anonymous";
        }

        let containsHTTP = url.includes("http");
        let containsHTTPS = url.includes("https");

        if(containsHTTPS){
            let newURL = url.replace("https://","");
            url = newURL;
        }else if(containsHTTP){
            let newURL = url.replace("http://","");
            url = newURL;
        }

        PostDataService.uploadPost(title, description, url, type)
            .then(
                response => {
                    console.log(response)
                    if(response.status === 200){
                        alert("Upload Successful!")
                        // e.target.elements.uploadTitle.value = "";
                        // e.target.elements.uploadDescription.value = "";
                        // e.target.elements.uploadURL.value = "";
                        // e.target.elements.infoType.value = 'documentation';
                    }else{
                        alert("Upload Failed")
                    }
                }
            ).catch(() => {
                alert("Failed To Connect To Server")
            })
    }


    render() {
        return (
            <div>
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModalCenter">
                    Upload Link
                </button>

                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Upload A Link</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
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
                    <button type='submit' name='submitButton'  className="btn btn-primary">Post</button>
                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalUpload;