import "../pages/styles/add_product.css";
import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";

const AddProduct = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.authReducer.user)

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')

    const [selectedFile, setSelectedFile] = React.useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.post(
            'http://127.0.0.1:8080/api/item', {
                name: 'test',
                img: selectedFile,
                description: 'test',
                price: 123,
                category: 1,
                owner: user.uuid,

            }, {
                headers: {"Content-Type": "multipart/form-data"},
            }
        ).then(response => {

            }
        )
    }

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0])
    }

    return (
        <div className="add-container">
            <div className="container-wrapper">
                <h1 className="title">ADD A PRODUCT</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <input placeholder="title" className="form-input"/>
                    <div className="filter">
                        <span className="filter-title">Category:</span>
                        <select className="filter-select">
                            <option selected>Outside plants</option>
                            <option>Flowers</option>
                            <option>Home plants</option>
                        </select>
                    </div>
                    <input placeholder="description" className="form-input"/>
                    <input placeholder="price" className="form-input"/>
                    <div className="file btn btn-lg btn-primary">
                        Add Photo<input type="file" name="file" accept=".jpg,.jpeg,.png" onChange={handleFileSelect}/>
                    </div>
                    <button type="submit" className="form-button">ADD</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
