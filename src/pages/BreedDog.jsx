import React, { Component } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import '../styles/Breed_SubBreed.css'


class BreedDog extends Component {

    constructor() {
        super();
        this.state = {
            imgURL: "",
            breed: [""],
            select: ""
        }
    }

getDogImage = () => {
    const { select } = this.state;
    let url = "https://dog.ceo/api/breed/" + select + "/images/random";
        
       axios.get(url)
            .then(response => {
                this.setState({
                    imgURL: response.data.message
                });
                console.log(response.data.message)
            })
            .catch(err => console.log(err));
    };

getBreed = () => {
        const { breed } = this.state;
        
       axios.get("https://dog.ceo/api/breeds/list")
            .then(response => {
                this.setState({
                    breed: breed.concat(response.data.message)
                })
            })
            .catch(err => console.log(err));
    }

getRandomImage = () => {
        const { breed } = this.state;
        const randomDog = Math.floor(Math.random() * breed.length);
        const choice = (randomDog === 0 ? "wolfhound" : breed[randomDog]);
        
        let url = "https://dog.ceo/api/breed/" + choice + "/images/random"

       axios.get(url)
            .then(response => {
                this.setState({
                    imgURL: response.data.message,
                    select: choice
                });
            })
            .catch(err => console.log(err));
        console.log(url);
    };

    handleSelect = (e) => {
        this.setState({
            select: e.target.value
        })
    }

    componentDidMount() {
        this.getBreed();
    }

    render() {

        const { breed, imgURL, select } = this.state;

        return (
            <div className='container-subBreed'>
                <h1>Cães por Raças</h1>
                <br />

                <div className='selected'>
                    <Form.Select size="lg" value={select} onChange={this.handleSelect} className="col-3 col-s-3 menu">
                        {breed.map((e, index) =>
                            <option value={e} key={index}> {e} </option>
                        )}
                    </Form.Select>

                    <button  className="btn btn-dark" id="submit" disabled={!select} onClick={this.getDogImage}>Pesquisar</button>
                </div>

                <div id="img">
                    <img  src={imgURL}/>
                </div>

            </div>
        )
    }
}
export default BreedDog;