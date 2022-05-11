import "../pages/styles/add_product.css";
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";

const AddProduct = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.authReducer.user)
  const [categories, setCategories] = useState([]);

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')

  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault()
    axios.post(
      'http://127.0.0.1:8080/api/item', {
        name: name,
        img: selectedFile,
        description: description,
        price: price,
        category: category,
        owner: user.uuid,

      }, {
        headers: {"Content-Type": "multipart/form-data"},
      }
    ).then(response => {
        navigate('/flowers');
      }
    )
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  useEffect(() => {
        axios.get(
          'http://127.0.0.1:8080/api/category'
        ).then(response => {
            setCategories(response.data);
          }
        )
      }, []
    )

  return (
    <div className="add-container">
      <div className="container-wrapper">
        <h1 className="title">ADD A PRODUCT</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input placeholder="title" className="form-input"
                 onChange={(e) => setName(e.target.value)}/>
          <div className="filter">
            <span className="filter-title">Category:</span>
            <select className="filter-select" onChange={(e) => setCategory(e.target.value)}>
              {categories.map((item) => (<option key={item.ca_id} value={item.ca_name}>{item.ca_name}</option>))}
            </select>
          </div>
          <input placeholder="description" className="form-input"
                 onChange={(e) => setDescription(e.target.value)}/>
          <input placeholder="price" className="form-input"
                 onChange={(e) => setPrice(e.target.value)}/>
          <div className="file btn btn-lg btn-primary">
            <input type="file" name="file" accept=".jpg,.jpeg,.png"
                            onChange={handleFileSelect}/>
            Add Photo
          </div>
          <button type="submit" className="form-button">ADD</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
