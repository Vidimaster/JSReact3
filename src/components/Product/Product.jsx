
import { useDispatch } from "react-redux";
import { useState } from "react";
import s from "./Product.module.scss";
import { addItem } from '../../redux/slices/EditSlice';

export const Product = ({ prop }) => {
    const dispatch = useDispatch();
    const [data, setData] = useState({})
    return (
        <>
            {prop.map((value) => (

                <div key={value.id} className={s.item_content}>
                    <a className={s.item_img} href="single_page.html">

                        <img className={s.item_img_pic} src={value.img} alt="" />
                        <div className={s.txt_box}>
                            <p className={s.item_dsc}>{value.description}</p>
                            <p className={s.item_price}>{'$' + value.price + '.00'}</p>
                        </div>

                    </a>

                    <div className={s.add_box}>
                        <a className={s.add} onClick={() => {

                            dispatch(addItem(value.id))
                        }}> <span> Add to Cart</span></a>
                        {/* <i class="fa fa-solid fa-cart-shopping" style={{ font: '14px' }}></i> */}

                    </div>
                </div>
            ))}

        </>
    );

};