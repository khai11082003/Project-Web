import { useState } from "react";
import { useEffect } from "react";
import "./index.css"
function Stores(){
    const button = document.querySelectorAll('.add');
    const [data,setData] = useState([]);
    const [dataMerch,setDataMerch] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            fetch("http://localhost:3002/MUSIC")
                .then(res => res.json())
                .then(data => {
                    setData(data)
                });
        }
        fetchApi();
    },[])
    useEffect(() => {
        const fetchApi2 = async () => {
            fetch("http://localhost:3002/MERCH")
                .then(res => res.json())
                .then(dataMerch => {
                    setDataMerch(dataMerch)
                });
        }
        fetchApi2();
    },[])
    
    const [store,setStore] = useState([]);

    return(
        <>
            <div className="container-store">
               <div className="inner-content">
               <div className="inner-title-store">
                    <h1>MUSIC</h1>
                </div>
                <div className="inner-product">
                    {data.map(
                        (data) => {


                            return(
                                <div className="inner-box">
                                <div className="inner-title-child">
                                    {data.title}
                                 </div>
                                <div className="inner-img-store">
                                    <img src={data.thumbnail}/>
                                </div>
                                <div className="inner-price">
                                    {data.price}
                                    <div className="add">
                                        add to Cart
                                    </div>
                                </div>
                                </div>
                            )
                        }
                    )}
                </div>
               </div>
               <div className="inner-content">
               <div className="inner-title-store-2">
                    <h1>MERCH</h1>
                </div>
                <div className="inner-product">
                    {dataMerch.map(
                        (dataMerch) => {
                            return(
                                <div className="inner-box">
                                    <div className="inner-title-child">
                                        {dataMerch.title}
                                    </div>
                                    <div className="inner-img-store">
                                        <img src={dataMerch.thumbnail}/>
                                    </div>
                                    <div className="inner-price">
                                        {dataMerch.price}
                                        <div className="add">
                                        add to Cart
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
               </div>
               <div className="inner-content">
               <div className="inner-title-store-2">
                    <h1>CART</h1>
                </div>
                </div>
            </div>
        </>
    )
}
export default Stores;

