import "../pages/styles/find_flower.css";
import axios from "axios";
import React, {useState} from "react";
import img from "../assets/draft.jpg";

const Product = ({item}) => {
    console.log(item["images"][0])
    return (
        <div className="container_image">
            <img className="icon1" src={`data:image/jpeg;base64,${item["images"][0]}`} alt="img"/>
            <div className="tag">{item["name"]}</div>
            <div className="tag">{item["prob"]}%</div>
        </div>
    );
};

const FindFlower = () => {
    const [file, setFile] = useState('')
    const [data, setData] = useState('')

    const findFlowerSubmit = async (e) => {
        const data = new FormData();
        data.append('img', file);
        e.preventDefault();
        axios.post(
            'http://localhost:8880/find_flower', data
        ).then(response => {
                if (response.status === 200) {
                    setData(JSON.parse(response['data']))
                }
            }
        )
    }

    return (
        <div className="find-container">
            <div className="container-wrapper">
                <h1 className="title">Find a flower by photo</h1>
                <form className="form" onSubmit={findFlowerSubmit}>
                    <div className="file btn btn-lg btn-primary">
                        Add Photo<input type="file" name="file" accept=".jpg,.jpeg,.png,.webp"
                                        onChange={e => setFile(e.target.files[0])}/>
                    </div>
                    <div className="poojaD">
                        {data && data.map((item) => (
                            <Product item={item} key={item.name}/>
                        ))}
                    </div>
                    <button className='form-button' type="submit">FIND</button>
                </form>
            </div>
        </div>
    );
};

export default FindFlower;
