import React from "react";
import { Category } from "../Category/Category";
import { Product } from "../Product/Product";
import s from "./HomePage.module.scss";

import discount from '../../img/discount.png'
import blend from '../../img/alpha_blend.png'
import ic_truck from '../../img/ic_truck.svg';
import ic_percent from '../../img/ic_percent.svg';
import ic_crown from '../../img/ic_crown.svg';

import {useDispatch } from 'react-redux';
import { useState } from "react";
import { fetchProducts } from '../../redux/services/showListThunk.jsx';


export const HomePage = () => {
  const categorys = [

    { image: require('../../img/category_1.png') },
    { image: require('../../img/category_2.png') },
    { image: require('../../img/category_3.png') },
    { image: require('../../img/category_4.png') },
  ]


  const [state, setState] = useState([]);
  const dispatch = useDispatch();
  const data = dispatch(fetchProducts(0));
  data.unwrap()
    .then((PromiseResult) => {
      setState(PromiseResult)

    })
    .catch((rejected) => {
      console.log();
    });


  return (
    <>



      <div className={s.menu}>
        <div className={s.grid}>
          <Category customStyle={s.item_menu_1} st={{ top: '-63%' }} img={categorys[0].image} txt1={"LUXIROUS & trendy"} txt2={"women"}> </Category>
          <Category customStyle={s.item_menu_2} st={{ top: '-81%' }} img={categorys[1].image} txt1={"30% offer"} txt2={"men"}> </Category>
          <Category customStyle={s.item_menu_3} st={{ top: '-79%' }} img={categorys[2].image} txt1={"LUXIROUS & trendy"} txt2={"ACCESORIES"}> </Category>
          <Category customStyle={s.item_menu_4} img={categorys[3].image} txt1={"new arrivals"} txt2={"FOR kids"}> </Category>

        </div>
      </div>

      <div className={s.content}>
        <h2 className={s.content_font}>Fetured Items</h2>
        <p className={s.content_font_sub}> Shop for items based on what we featured in this week</p>
        <div className={s.grid_feature}>

          <Product prop={state} />


        </div>
        <br />
        <br />
        <div className={s.block_line}>
          <a className={s.button} href="">Browse All Product
          </a>
          {/* <i class="fa fa-solid fa-arrow-right"></i> */}
        </div>

        <div className={s.footer_block}>
          <div className={s.grid_delivery}>
            <div className={s.item_delivery1}>
              <div style={{ position: "relative" }}>
                <img src={discount} alt="discount" />

                <img className={s.on_top} src={blend} alt="alpha_blend" />
              </div>
            </div>
            <div className={s.item_delivery2}>
              <img src={ic_crown} alt="" />
            </div>
            <div className={s.item_delivery5}>
              <p className={s.icon_content_header}>Free Delivery</p>

              <p className={s.item_content_text}>Worldwide delivery on all. Authorit tively morph next-generation innov
                tion with extensive models.</p>
            </div>
            <div className={s.item_delivery3}>
              <img src={ic_truck} alt="" />
            </div>
            <div className={s.item_delivery6}>
              <p className={s.icon_content_header}>Sales & discounts</p>

              <p className={s.item_content_text}>Worldwide delivery on all. Authorit tively morph next-generation innov
                tion with extensive models.</p>
            </div>
            <div className={s.item_delivery4}>
              <img src={ic_percent} alt="" />
            </div>
            <div className={s.item_delivery7}>
              <p className={s.icon_content_header}>Quality assurance</p>

              <p className={s.item_content_text}>Worldwide delivery on all. Authorit tively morph next-generation innov
                tion with extensive models.</p>
            </div>
          </div>

        </div>

      </div>


    </>
  );
};

