import React, { Component } from "react";
import axios from "axios";

import { Form } from "react-bootstrap";
import '../styles/Breed_SubBreed.css'


class SubBreed extends Component{

    constructor() {
        super();
        this.state = {
            imgURL: "",
            breed: [""],
            select: ""
        }
    }

    getImageSubBreed = () => {
        const { select } = this.state;
        let url = "https://dog.ceo/api/breed/hound/" + select + "/images/random";

        axios.get(url)
            .then(response => {
                this.setState({
                    imgURL: response.data.message
                })
                console.log(response.data.message)
            })
            .catch(error => console.log(error));
    }


    getSubBreed = () => {
        const { breed } = this.state;
        axios.get("https://dog.ceo/api/breed/hound/list")
            .then(response => {
                this.setState({
                    breed: breed.concat(response.data.message)
                })
            })
            .catch(error => console.log(error))
    }

    handleSelect = (e) => {
        this.setState({
            select: e.target.value
        })
    }

    componentDidMount() {
        this.getSubBreed();
    }

    render() {
        const { breed, imgURL, select } = this.state;

        return (
            <div className='container-subBreed'>
                <h1>Cães por Sub Raças</h1>
           <br/>

                <div className='selected'>
                    <Form.Select size="lg" value={select} onChange={this.handleSelect} className="col-3 col-s-3 menu">
                        {breed.map((e, index) =>
                            <option value={e} key={index}> {e} </option>
                        )}
                    </Form.Select>


                    <button  className="btn btn-dark" id='submit' disabled={!select} onClick={this.getImageSubBreed}>
                        Pesquisar
                    </button>
                </div>

                <div id='img'>
                    <img src={imgURL} style={{ width: '100%', padding:'15px'  ,height: 'auto', objectFit: 'cover' }} />
                </div>



            </div>
        )
    }
}

export default SubBreed;