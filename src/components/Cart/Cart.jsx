import s from "./Cart.module.scss";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectItems } from '../../redux/slices/EditSlice'
import { selectTotal } from '../../redux/slices/EditSlice'
import { useSelector } from 'react-redux';
import { deleteItem } from '../../redux/slices/EditSlice'
import { setTotal } from '../../redux/slices/EditSlice'
import { useCallback } from 'react';
export const Cart = ({ prop }) => {
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

    const itms_to_cart = useSelector(selectItems);
    const itms_total = useSelector(selectTotal);

    let to_cart_1 = undefined;
    let to_cart_2 = undefined;

    useEffect(() => {

        dispatch(setTotal(cachedFn()))
    }, [dispatch, prop, cachedFn])

    //console.log(JSON.parse('{"id": 1, "quantity": 12}'));
    let CartHeight = '200px';
    try {
        to_cart_1 = prop.find(x => x.id === JSON.parse(itms_to_cart.cart_1))
        to_cart_2 = prop.find(x => x.id === JSON.parse(itms_to_cart.cart_2))

    } catch (e) {

    }

    if (to_cart_1 !== undefined) { CartHeight = '300px' }
    if (to_cart_2 !== undefined) { CartHeight = '440px' }

    function ShowCart(props) {
        if (props !== undefined) {
            return (
                <div className={s.summary_product}>
                    <a href="/catalogue"> <img style={{ width: '75%' }} src={props?.img} alt="product1"></img>
                    </a>


                    <div className={s.product_name}>
                        <a href="/catalogue" className={s.check_out_heading}>
                            {props.description}
                        </a>
                        {/* <i className={s.fa + s.fa_regular + s.fa_star}></i> */}
                        <p className={s.check_out_price}>{JSON.parse(localStorage.getItem("id_" + props.id)).quantity} <span>x</span> {'$' + props?.price + '.00'}</p>
                    </div>
                    <div className={s.close_checkout}>
                        <i style={{ cursor: 'pointer' }} onClick={() => {
                            dispatch(deleteItem(props.id))
                            dispatch(setTotal(cachedFn()))
                        }}>X</i>
                    </div>
                </div>
            );
        }

    }

    return (
        <details className={s.checkout}>
            <summary className={s.button_account}>
                My
                Account&nbsp;</summary>
            {/* <span><i className={s.fa + s.fa_solid + s.fa_caret_down}></i></span> */}

            <div className={s.checkout__content} style={{ height: CartHeight }}>


                {ShowCart(to_cart_1)}
                {ShowCart(to_cart_2)}


                <p className={s.total_text}>TOTAL&nbsp;&nbsp;&nbsp;&nbsp; {'$' + itms_total + '.00'}</p>

                {/* <div><a className={s.button_account} href="checkout.html"
                  >CHECKOUT&nbsp;</a></div> */}
                <div><a className={s.button_account} href="/cart_checkout">GO TO
                    CART&nbsp;</a></div>
            </div>
        </details >
    )
};
