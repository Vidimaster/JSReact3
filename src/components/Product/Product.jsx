import { useDispatch } from "react-redux";
import s from "./Product.module.scss";
import { addItem } from '../../redux/slices/EditSlice';
import { useCallback } from 'react';
import { setTotal } from '../../redux/slices/EditSlice'
export const Product = ({ prop }) => {
    const dispatch = useDispatch();
    const cachedFn = useCallback((CountTotal) => {
        let total_price = 0;
        Object.keys(localStorage).forEach(function (key) {

            if (prop.find((element) => element.id === JSON.parse(localStorage.getItem(key)).id) !== undefined) {
                total_price += prop.find((element) => element.id === JSON.parse(localStorage.getItem(key)).id).price * JSON.parse(localStorage.getItem(key)).quantity
            }

        });
        return total_price
    }, [prop])

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
                            dispatch(setTotal(cachedFn()))
                        }}> <span> Add to Cart</span></a>
                        {/* <i class="fa fa-solid fa-cart-shopping" style={{ font: '14px' }}></i> */}

                    </div>
                </div>
            ))}

        </>
    );

};