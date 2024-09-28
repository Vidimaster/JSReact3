import React from "react";

import s from "./CartCheckout.module.scss";
import { deleteItemAll } from '../../redux/slices/EditSlice'

import { useDispatch } from 'react-redux';
import { useState } from "react";
import { selectTotal } from '../../redux/slices/EditSlice'
import { setTotal } from '../../redux/slices/EditSlice'
import { useSelector } from 'react-redux';
import { ProductsInCheckout } from '../../components/ProductsInCheckout/ProductsInCheckout'

export const CartCheckout = ({ prop }) => {

  const dispatch = useDispatch();



const itms_total = useSelector(selectTotal);
// dispatch(setTotal(CountTotal()))

  return (
    <>
      <div className={s.bread_block}>

        <div className={s.container_left_single_page_header}>
          <h3 className={""}>New Arrivals</h3>
        </div>

        <nav className={s.container_right}>
          <ul className={s.breadcrumb_single}>
            <li><a href="/">Home</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">New Arrivals</a></li>

          </ul>
        </nav>
      </div>

      <div className={s.cart_content}>
        <div className={s.cart_content_header}>
          <div className={s.container_left}>
            <h3 className={s.content_header_text}>Product Details</h3>
          </div>
          <div className={s.container_right}>
            <h3 className={s.content_header_text}>unite Price</h3>
            <h3 className={s.content_header_text}>Quantity</h3>
            <h3 className={s.content_header_text}>shipping</h3>
            <h3 className={s.content_header_text}>Subtotal</h3>
            <h3 className={s.content_header_text}>ACTION</h3>
          </div>
        </div>

        < ProductsInCheckout prop_state={prop} />

      </div>

      <div className={s.container_cart_content}>
        <div className={s.container_left}><a href="#" className={s.button_continue} style={{ marginTop: '0px' }} onClick={() => {
          dispatch(deleteItemAll())
          dispatch(setTotal(0))
        }}>cLEAR SHOPPING CART</a>
        </div>
        <div className={s.container_right}><a href="/" className={s.button_continue} style={{ marginTop: '0px' }}>cONTINUE sHOPPING</a>
        </div>
      </div>
      <form>
        <div className={s.container_cart_content}>

          <div className={s.column_cart_content}>
            <h3 className={s.column_cart_content_header}>Shipping Adress</h3>
            <input className={s.cart_product} type="text" id="add1_1" name="name" required minLength="1" maxLength="18"
              size="20" placeholder="Bangladesh" />
            <input className={s.cart_product} type="text" id="add1_2" name="name" required minLength="1" maxLength="18"
              size="20" placeholder="State" />
            <input className={s.cart_product} type="text" id="add1_3" name="name" required minLength="1" maxLength="18"
              size="20" placeholder="Postcode / Zip" />
          </div>

          <div className={s.column_cart_content}>
            <h3 className={s.column_cart_content_header}>coupon discount</h3>
            <p className={s.cart_sub_text}>Enter your coupon code if you have one</p>
            <input className={s.cart_product} type="text" id="add1" name="name" required minLength="1" maxLength="18"
              size="20" placeholder="State" />
            <div style={{ marginTop: '35px', marginBottom: '79px' }}>
              <a style={{ marginLeft: '0px' }} href="" className={s.button_quote}>Apply coupon</a>
            </div>

          </div>
          <div className={s.column_cart_content}>
            <p className={s.cart_sub_text}>Sub total {'$' + itms_total + '.00'}</p>
            <h3 className={s.column_cart_content_header} style={{ marginTop: '14px' }}>GRAND TOTAL <span
              style={{ color: '#f16d7f' }}>{'$' + itms_total + '.00'}</span></h3>
            <hr style={{ height: '1px', color: 'e2e2e2', marginTop: '22px' }} />
            <a href="" className={s.button_coupon}>proceed to checkout</a>
          </div>


        </div>

      </form>
      <div style={{ marginTop: '25px', marginBottom: '79px' }}>
        <a href="" className={s.button_quote}>get a quote</a>
      </div>
    </>
  )
};

