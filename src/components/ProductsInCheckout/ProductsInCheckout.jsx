import React from "react";

import s from '../../components/CartCheckout/CartCheckout.module.scss';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { selectItems } from '../../redux/slices/EditSlice.jsx'
import { deleteItemFromCheckout } from '../../redux/slices/EditSlice'
import { useCallback } from 'react';
import { setTotal } from '../../redux/slices/EditSlice'
import { useState } from 'react';
export const ProductsInCheckout = ({ prop_state }) => {
  const dispatch = useDispatch();
  const itms = useSelector(selectItems);

  const cachedFn = useCallback((CountTotal) => {
    let total_price = 0;
    Object.keys(localStorage).forEach(function (key) {

      if (prop_state.find((element) => element.id === JSON.parse(localStorage.getItem(key)).id) !== undefined) {
        total_price += prop_state.find((element) => element.id === JSON.parse(localStorage.getItem(key)).id).price * JSON.parse(localStorage.getItem(key)).quantity
      }

    });
    return total_price
  }, [prop_state])

  const [data, setData] = useState({})
  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
    localStorage.setItem(id, JSON.stringify({ id: parseInt(id.slice(3)), quantity: value }));
    dispatch(setTotal(cachedFn()))
  };

  return (
    <>


      {itms.items.map((answer, i) => {

        return (

          <div key={answer.id} className={s.cart_content_products}>
            <div className={s.container_left}><a href="/catalogue">
              <div className={s.picture_text}>
                <img style={{ width: '20%' }} src={prop_state.find(x => x.id === answer.id)?.img} alt="product" />
                <div className={s.picture_text_column}>
                  <p className={s.content_header_text}>Mango People T-shirt</p>
                  <p className={s.content_para_text}>Color: Red
                  </p>
                  <p className={s.content_para_text}>Size: Xll</p>
                </div>
              </div>
            </a>
            </div>
            <div className={s.container_right}>
              <h4 className={s.product_text}>{'$' + prop_state.find(x => x.id === answer.id)?.price + '.00'}</h4>
              <input className={s.cart_product} type="text" id={"id_" + answer?.id} name="name" required minLength="1" maxLength="2"
                size="20" onChange={handleChange} placeholder={JSON.parse(localStorage.getItem("id_" + answer?.id)).quantity} />
              <h4 className={s.product_text}>FREE</h4>
              <h4 className={s.product_text}>{'$' + JSON.parse(localStorage.getItem("id_" + answer?.id)).quantity * prop_state.find(x => x.id === answer.id)?.price + '.00'}</h4>
              <div className={s.close_checkout} style={{ cursor: 'pointer' }} onClick={() => {
                dispatch(deleteItemFromCheckout(answer?.id))
                dispatch(setTotal(cachedFn()))
              }}>
                X
              </div>
            </div>
          </div>

        )
      })}


    </>
  )
};

