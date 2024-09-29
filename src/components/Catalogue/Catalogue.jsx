import React from "react";

import s from "./Catalogue.module.scss";

import { useDispatch } from 'react-redux';
import { useState } from "react";
import { selectTotal } from '../../redux/slices/EditSlice'
import { setTotal } from '../../redux/slices/EditSlice'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { Product } from "../Product/Product";
import { addItem } from '../../redux/slices/EditSlice';
import { useEffect } from "react";
import { useCallback } from 'react';
export const Catalogue = ({ prop }) => {
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

  const [selectedProduct, setSelectedProduct] = useState(undefined);
  const [count, setCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState({ size: 'XS' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedOption({ [name]: value });
    setCount(0)
  };

  useEffect(() => {
    setSelectedProduct(prop.slice().filter(item => item.size === selectedOption.size)[0])
    dispatch(setTotal(cachedFn()))
  }, [dispatch, prop, cachedFn, selectedOption])


  const [selectedOptionQuantity, setSelectedOptionQuantity] = useState({ quantity: 1 });
  const handleChangeQuantity = (e) => {
    const { name, value } = e.target;
    setSelectedOptionQuantity({ [name]: value });

  };



  function ChooseProduct(event, num) {
    num === -1 ? setCount(Math.max(count - 1, 0)) : setCount(Math.min(count + 1, prop.slice().filter(item => item.size === selectedOption.size).length - 1))
    setSelectedProduct(prop.slice().filter(item => item.size === selectedOption.size)[count])
  }
  return (
    <>

      <BreadCrumbs />
      <div className={s.single_content}>


        <div className={s.carousel_img}>
          <div className={s.carousel_left_button} onClick={(e) => {
            ChooseProduct(e, -1);
          }}>&lt;</div>
          {/* <i class="fa fa-angle-left"></i> */}
          <div className={s.carousel_right_button} onClick={(e) => {
            ChooseProduct(e, 1);
          }}>&lt;</div>
          <img src={selectedProduct?.img} alt="" />

        </div>

        <div className={s.carousel_choice}>
          <h3 className={s.header}>WOMEN COLLECTION</h3>
          <h3 className={s.sub_header}>{selectedProduct?.description}</h3>
          <p className={s.text}>Compellingly actualize fully researched processes before proactive outsourcing.
            Progressively syndicate collaborative architectures before cutting-edge services. Completely
            visualize
            parallel core competencies rather than exceptional portals.</p>
          <div className={s.material}> <span>MATERIAL: <span className={s.material_bold}>COTTON</span></span>
            <span>DESIGNER: <span className={s.material_bold}>BINBURHAN</span></span>
          </div>
          <p className={s.price}>{'$' + selectedProduct?.price * selectedOptionQuantity.quantity + '.00'}</p>
          <hr className={s.custom_hr_single_page} />
          <div className={s.select_list}>

            <form>
              <label className={s.select_label} htmlFor="color">CHOOSE COLOR</label>
              <br />
              <br />
              <select className={s.select_select} name="color" id="color">
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Yellow">Yellow</option>
              </select>
            </form>

            <form>
              <label className={s.select_label} htmlFor="size">CHOOSE SIZE</label>
              <br />
              <br />
              <select className={s.select_select} onChange={handleChange} name="size" id="size">
                <option value={'XS'}>XS</option>
                <option value={'XL'}>XL</option>
                <option value={'2XL'}>2XL</option>
                <option value={'3XL'}>3XL</option>
              </select>
            </form>

            <form>
              <label className={s.select_label} htmlFor="quantity">QUANTITY</label>
              <br />
              <br />
              <select className={s.select_select} onChange={handleChangeQuantity} name="quantity" id="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
            </form>
          </div>


          <a className={s.button_content} onClick={() => {

            dispatch(addItem({ id: selectedProduct.id, count: selectedOptionQuantity.quantity }))
            dispatch(setTotal(cachedFn()))
          }}>
            Add to Cart
          </a>
          {/* <i class="fa_cart_shopping"
            style={{paddingRight: '18px', font: '24px'}}></i> */}
        </div>

      </div>

      <h2 className={s.header_maylike}>you may like also</h2>

      <div className={s.grid_single_page}>

        <Product prop={prop.slice().filter(item => item.size === selectedOption.size)} />

      </div>


    </>
  )
};

