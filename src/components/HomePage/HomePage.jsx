import React from "react";
import { Box } from "../Box/Box";
import { Category } from "../Category/Category";
import classNames from "classnames";
import s from "./HomePage.module.scss";


export const HomePage = () => {
  const categorys = [

    { image: require('../../img/category_1.png') },
    { image: require('../../img/category_2.png') },
    { image: require('../../img/category_3.png') },
    { image: require('../../img/category_4.png') },
  ]

  const products = [

    { image: require('../../img/product/product_(1).png') },

  ]

  return (
    <>
      <div className={s.top}>
        <div className={s.navbar}>
          <div className={s.container}>
            <div className={s.container_left}>
              <a href="index.html">
                <img src={require('../../img/logo.png')} alt="logo" style={{ width: '44px' }} /></a>

              <a href="index.html">
                <h3 className={s.logo_brand}>BRAN<span className={s.letter_d}>D</span></h3>
              </a>
              {/* <div className={s.dropdown}>

                <button className={s.dropbtn}>
                  <span className={s.browse_text}>Browse <span><i
                    className={s.fa + s.fa_solid + s.fa_caret_down}></i></span></span></button>
                <div className={s.dropdown_content}>
                  <p className={s.text_menu_subhader}>WOMEN</p>
                  <hr className={s.hr_custom}></hr>
                  <a href="#">Dresses</a>
                  <a href="#">Tops</a>
                  <a href="#">Sweaters/Knits</a>
                  <a href="#">Jackets/Coats</a>
                  <a href="#">Blazers</a>
                  <a href="#">Denim</a>
                  <a href="#">Leggings/Pants</a>
                  <a href="#">Skirts/Shorts</a>
                  <a href="#">Accessories</a>
                  <a href="#">Bags/Purses</a>
                  <a href="#">Swimwear/Underwear</a>
                  <a href="#">Nightwear</a>
                  <a href="#">Shoes</a> 
                  <a href="#">Beauty</a>
                  <br></br>
                  <p className={s.text_menu_subhader}>MEN</p>
                  <hr className={s.hr_custom}></hr>
                  <a href="#">Tees/Tank tops</a>
                  <a href="#">Shirts/Polos</a>
                  <a href="#">Sweaters</a>
                  <a href="#">Sweatshirts/Hoodies</a>
                  <a href="#">Blazers</a>
                  <a href="#">Jackets/vests</a>

                </div>
              </div> */}

              {/* <div className={s.wrapper_email}>
                <input type="text" placeholder="Search for Item... "></input>
                <span><i class="fa fa-solid fa-magnifying-glass"></i></span>
              </div> */}
            </div>
            <div className={s.container_right}>
              <i className={s.fa + s.fa_solid + s.fa_cart_shopping + s.nav_icon_color}></i>

              <details className={s.checkout}>
                <summary className={s.content_font_card + s.button + s.__account}>
                  My
                  Account&nbsp;<span><i className={s.fa + s.fa_solid + s.fa_caret_down}></i></span></summary>
                {/* <div className={s.checkout__content}>
                  <div className={s.summary_product} >
                    <a href="single_page.html"> <img src="img/checkout_1.png" alt="product1"></img>
                    </a>
                    <div className={s.product_name}>
                      <a href="single_page.html" class="check-out-heading">Rebox Zane
                      </a>
                      <i className={s.fa + s.fa_regular + s.fa_star}></i>
                      <p className={s.check_out_price}>1 <span style={{ font: '10px' }}>x</span> $250</p>
                    </div>
                    <div className={s.close_checkout}>
                      <i className={s.fa + s.fa_solid + s.fa_circle_xmark}></i>
                    </div>
                  </div>

                  <div className={s.summary_product}>
                    <a href="single_page.html"> <img src="img/checkout_2.png" alt="product2"></img>
                    </a>


                    <div className={s.product_name}>
                      <a href="single_page.html" className={s.check_out_heading}>
                        Rebox Zane
                      </a>
                      <i className={s.fa + s.fa_regular + s.fa_star}></i>
                      <p className={s.check_out_price}>1 <span>x</span> $250</p>
                    </div>
                    <div className={s.close_checkout}>
                      <i class="fa fa-solid fa-circle-xmark"></i>
                    </div>
                  </div>

                  <p className={s.total_text}>TOTAL&nbsp;&nbsp;&nbsp;&nbsp; $500.00</p>

                  <div><a className={s.content_font_card + s.button + s.__account} href="checkout.html"
                  >CHECKOUT&nbsp;</a></div>
                  <div><a className={s.content_font_card + s.button + s.__account} href="cart.html">GO TO
                    CART&nbsp;</a></div>
                </div> */}
              </details >
            </div >
          </div >
        </div >
        {/* <nav class="nav_menu">
          <ul class="breadcrumb">
            <li class="menu-list"><a href="#">Home</a>
              <div class="mega-box">
                <div class="mega-item">
                  <h3 class="mega-title">Women</h3>
                  <a href="#" class="mega-link">Dresses</a>
                  <a href="#" class="mega-link">Tops</a>
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                  <a href="#" class="mega-link">Blazers</a>
                  <a href="#" class="mega-link">Denim</a>
                  <a href="#" class="mega-link">Leggings/Pants</a>
                  <a href="#" class="mega-link">Skirts/Shorts</a>
                  <a href="#" class="mega-link">Accessories</a>
                  <a href="#" class="mega-link">Bags/Purses</a>
                  <a href="#" class="mega-link">Swimwear/Underwear</a>
                  <a href="#" class="mega-link">Nightwear</a>
                  <a href="#" class="mega-link">Shoes</a>
                  <a href="#" class="mega-link">Beauty</a>


                </div>
                <div class="mega-item">
                  <h3 class="mega-title">Women</h3>
                  <a href="#" class="mega-link">Dresses</a>
                  <a href="#" class="mega-link">Tops</a>
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                  <a href="#" class="mega-link">Blazers</a>
                  <a href="#" class="mega-link">Denim</a>
                  <a href="#" class="mega-link">Leggings/Pants</a>
                  <a href="#" class="mega-link">Skirts/Shorts</a>
                  <a href="#" class="mega-link">Accessories</a>
                  <a href="#" class="mega-link">Bags/Purses</a>
                  <a href="#" class="mega-link">Swimwear/Underwear</a>
                  <a href="#" class="mega-link">Nightwear</a>
                  <a href="#" class="mega-link">Shoes</a>
                  <a href="#" class="mega-link">Beauty</a>


                </div>
                <div class="mega-item">
                  <h3 class="mega-title">Women</h3>
                  <a href="#" class="mega-link">Dresses</a>
                  <a href="#" class="mega-link">Tops</a>
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                  <a href="#" class="mega-link">Blazers</a>
                  <a href="#" class="mega-link">Denim</a>
                  <a href="#" class="mega-link">Leggings/Pants</a>
                  <a href="#" class="mega-link">Skirts/Shorts</a>
                  <a href="#" class="mega-link">Accessories</a>
                  <a href="#" class="mega-link">Bags/Purses</a>
                  <a href="#" class="mega-link">Swimwear/Underwear</a>
                  <a href="#" class="mega-link">Nightwear</a>
                  <a href="#" class="mega-link">Shoes</a>
                  <a href="#" class="mega-link">Beauty</a>


                </div>
              </div>
            </li>
            <li class="menu-list"><a href="#" class="link-mega-menu">Man</a>
              <div class="mega-box">
                <div class="mega-item">
                  <h3 class="mega-title">Women</h3>
                  <a href="#" class="mega-link">Dresses</a>
                  <a href="#" class="mega-link">Tops</a>
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                  <a href="#" class="mega-link">Blazers</a>
                  <a href="#" class="mega-link">Denim</a>
                  <a href="#" class="mega-link">Leggings/Pants</a>
                  <a href="#" class="mega-link">Skirts/Shorts</a>
                  <a href="#" class="mega-link">Accessories</a>
                  <a href="#" class="mega-link">Bags/Purses</a>
                  <a href="#" class="mega-link">Swimwear/Underwear</a>
                  <a href="#" class="mega-link">Nightwear</a>
                  <a href="#" class="mega-link">Shoes</a>
                  <a href="#" class="mega-link">Beauty</a>


                </div>
                <div class="mega-item">
                  <h3 class="mega-title">Women</h3>
                  <a href="#" class="mega-link">Dresses</a>
                  <a href="#" class="mega-link">Tops</a>
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                  <a href="#" class="mega-link">Blazers</a>
                  <a href="#" class="mega-link">Denim</a>
                  <a href="#" class="mega-link">Leggings/Pants</a>
                  <a href="#" class="mega-link">Skirts/Shorts</a>
                  <a href="#" class="mega-link">Accessories</a>
                  <a href="#" class="mega-link">Bags/Purses</a>
                  <a href="#" class="mega-link">Swimwear/Underwear</a>
                  <a href="#" class="mega-link">Nightwear</a>
                  <a href="#" class="mega-link">Shoes</a>
                  <a href="#" class="mega-link">Beauty</a>


                </div>
                <div class="mega-item">
                  <h3 class="mega-title">Women</h3>
                  <a href="#" class="mega-link">Dresses</a>
                  <a href="#" class="mega-link">Tops</a>
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                  <a href="#" class="mega-link">Blazers</a>
                  <a href="#" class="mega-link">Denim</a>
                  <a href="#" class="mega-link">Leggings/Pants</a>
                  <a href="#" class="mega-link">Skirts/Shorts</a>
                  <a href="#" class="mega-link">Accessories</a>
                  <a href="#" class="mega-link">Bags/Purses</a>
                  <a href="#" class="mega-link">Swimwear/Underwear</a>
                  <a href="#" class="mega-link">Nightwear</a>
                  <a href="#" class="mega-link">Shoes</a>
                  <a href="#" class="mega-link">Beauty</a>


                </div>
              </div>
            </li>
            <li class="menu-list"><a href="#" class="link-mega-menu">Women</a>
              <div class="mega-box">
                <div class="mega-item">
                  <h3 class="mega-title">Women</h3>
                  <a href="#" class="mega-link">Dresses</a>
                  <a href="#" class="mega-link">Tops</a>
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                  <a href="#" class="mega-link">Blazers</a>
                  <a href="#" class="mega-link">Denim</a>
                  <a href="#" class="mega-link">Leggings/Pants</a>
                  <a href="#" class="mega-link">Skirts/Shorts</a>
                  <a href="#" class="mega-link">Accessories</a>
                  <a href="#" class="mega-link">Bags/Purses</a>
                  <a href="#" class="mega-link">Swimwear/Underwear</a>
                  <a href="#" class="mega-link">Nightwear</a>
                  <a href="#" class="mega-link">Shoes</a>
                  <a href="#" class="mega-link">Beauty</a>


                </div>
                <div class="mega-item">
                  <h3 class="mega-title">Women</h3>
                  <a href="#" class="mega-link">Dresses</a>
                  <a href="#" class="mega-link">Tops</a>
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                  <a href="#" class="mega-link">Blazers</a>
                  <a href="#" class="mega-link">Denim</a>
                  <a href="#" class="mega-link">Leggings/Pants</a>
                  <a href="#" class="mega-link">Skirts/Shorts</a>
                  <a href="#" class="mega-link">Accessories</a>
                  <a href="#" class="mega-link">Bags/Purses</a>
                  <a href="#" class="mega-link">Swimwear/Underwear</a>
                  <a href="#" class="mega-link">Nightwear</a>
                  <a href="#" class="mega-link">Shoes</a>
                  <a href="#" class="mega-link">Beauty</a>


                </div>
                <div class="mega-item">
                  <h3 class="mega-title">Women</h3>
                  <a href="#" class="mega-link">Dresses</a>
                  <a href="#" class="mega-link">Tops</a>
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                  <a href="#" class="mega-link">Blazers</a>
                  <a href="#" class="mega-link">Denim</a>
                  <a href="#" class="mega-link">Leggings/Pants</a>
                  <a href="#" class="mega-link">Skirts/Shorts</a>
                  <a href="#" class="mega-link">Accessories</a>
                  <a href="#" class="mega-link">Bags/Purses</a>
                  <a href="#" class="mega-link">Swimwear/Underwear</a>
                  <a href="#" class="mega-link">Nightwear</a>
                  <a href="#" class="mega-link">Shoes</a>
                  <a href="#" class="mega-link">Beauty</a>


                </div>
              </div>
            </li>
            <li class="menu-list"><a href="#" class="link-mega-menu">Kids</a>
              <div class="mega-box">
                <div class="mega-item">
                  <h3 class="mega-title">Women</h3>
                  <a href="#" class="mega-link">Dresses</a>
                  <a href="#" class="mega-link">Tops</a>
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                  <a href="#" class="mega-link">Blazers</a>
                  <a href="#" class="mega-link">Denim</a>
                  <a href="#" class="mega-link">Leggings/Pants</a>
                  <a href="#" class="mega-link">Skirts/Shorts</a>
                  <a href="#" class="mega-link">Accessories</a>
                  <a href="#" class="mega-link">Bags/Purses</a>
                  <a href="#" class="mega-link">Swimwear/Underwear</a>
                  <a href="#" class="mega-link">Nightwear</a>
                  <a href="#" class="mega-link">Shoes</a>
                  <a href="#" class="mega-link">Beauty</a>


                </div>
                <div class="mega-item">
                  <h3 class="mega-title">Women</h3>
                  <a href="#" class="mega-link">Dresses</a>
                  <a href="#" class="mega-link">Tops</a>
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                  <a href="#" class="mega-link">Blazers</a>
                  <a href="#" class="mega-link">Denim</a>
                  <a href="#" class="mega-link">Leggings/Pants</a>
                  <a href="#" class="mega-link">Skirts/Shorts</a>
                  <a href="#" class="mega-link">Accessories</a>
                  <a href="#" class="mega-link">Bags/Purses</a>
                  <a href="#" class="mega-link">Swimwear/Underwear</a>
                  <a href="#" class="mega-link">Nightwear</a>
                  <a href="#" class="mega-link">Shoes</a>
                  <a href="#" class="mega-link">Beauty</a>


                </div>
                <div class="mega-item">
                  <h3 class="mega-title">Women</h3>
                  <a href="#" class="mega-link">Dresses</a>
                  <a href="#" class="mega-link">Tops</a>
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                  <a href="#" class="mega-link">Blazers</a>
                  <a href="#" class="mega-link">Denim</a>
                  <a href="#" class="mega-link">Leggings/Pants</a>
                  <a href="#" class="mega-link">Skirts/Shorts</a>
                  <a href="#" class="mega-link">Accessories</a>
                  <a href="#" class="mega-link">Bags/Purses</a>
                  <a href="#" class="mega-link">Swimwear/Underwear</a>
                  <a href="#" class="mega-link">Nightwear</a>
                  <a href="#" class="mega-link">Shoes</a>
                  <a href="#" class="mega-link">Beauty</a>


                </div>
              </div>
            </li>
            <li class="menu-list"><a href="#" class="link-mega-menu">Accoseriese</a>
              <div class="mega-box">
                <div class="mega-item">
                  <h3 class="mega-title">Women</h3>
                  <a href="#" class="mega-link">Dresses</a>
                  <a href="#" class="mega-link">Tops</a>
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                  <a href="#" class="mega-link">Blazers</a>
                  <a href="#" class="mega-link">Denim</a>
                  <a href="#" class="mega-link">Leggings/Pants</a>
                  <a href="#" class="mega-link">Skirts/Shorts</a>
                  <a href="#" class="mega-link">Accessories</a>
                  <a href="#" class="mega-link">Bags/Purses</a>
                  <a href="#" class="mega-link">Swimwear/Underwear</a>
                  <a href="#" class="mega-link">Nightwear</a>
                  <a href="#" class="mega-link">Shoes</a>
                  <a href="#" class="mega-link">Beauty</a>


                </div>
                <div class="mega-item">
                  <h3 class="mega-title">Women</h3>
                  <a href="#" class="mega-link">Dresses</a>
                  <a href="#" class="mega-link">Tops</a>
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                  <a href="#" class="mega-link">Blazers</a>
                  <a href="#" class="mega-link">Denim</a>
                  <a href="#" class="mega-link">Leggings/Pants</a>
                  <a href="#" class="mega-link">Skirts/Shorts</a>
                  <a href="#" class="mega-link">Accessories</a>
                  <a href="#" class="mega-link">Bags/Purses</a>
                  <a href="#" class="mega-link">Swimwear/Underwear</a>
                  <a href="#" class="mega-link">Nightwear</a>
                  <a href="#" class="mega-link">Shoes</a>
                  <a href="#" class="mega-link">Beauty</a>


                </div>
                <div class="mega-item">
                  <h3 class="mega-title">Women</h3>
                  <a href="#" class="mega-link">Dresses</a>
                  <a href="#" class="mega-link">Tops</a>
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                  <a href="#" class="mega-link">Blazers</a>
                  <a href="#" class="mega-link">Denim</a>
                  <a href="#" class="mega-link">Leggings/Pants</a>
                  <a href="#" class="mega-link">Skirts/Shorts</a>
                  <a href="#" class="mega-link">Accessories</a>
                  <a href="#" class="mega-link">Bags/Purses</a>
                  <a href="#" class="mega-link">Swimwear/Underwear</a>
                  <a href="#" class="mega-link">Nightwear</a>
                  <a href="#" class="mega-link">Shoes</a>
                  <a href="#" class="mega-link">Beauty</a>


                </div>
              </div>
            </li>
            <li class="menu-list second-last"><a href="#" class="link-mega-menu">Featured</a>
              <div class="mega-box">
                <div class="mega-item">
                  <h3 class="mega-title">Women</h3>
                  <a href="#" class="mega-link">Dresses</a>
                  <a href="#" class="mega-link">Tops</a>
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                  <a href="#" class="mega-link">Blazers</a>
                  <a href="#" class="mega-link">Denim</a>
                  <a href="#" class="mega-link">Leggings/Pants</a>
                  <a href="#" class="mega-link">Skirts/Shorts</a>
                  <a href="#" class="mega-link">Accessories</a>
                  <a href="#" class="mega-link">Bags/Purses</a>
                  <a href="#" class="mega-link">Swimwear/Underwear</a>
                  <a href="#" class="mega-link">Nightwear</a>
                  <a href="#" class="mega-link">Shoes</a>
                  <a href="#" class="mega-link">Beauty</a>


                </div>
                <div class="mega-item">
                  <h3 class="mega-title">Women</h3>
                  <a href="#" class="mega-link">Dresses</a>
                  <a href="#" class="mega-link">Tops</a>
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                  <a href="#" class="mega-link">Blazers</a>
                  <a href="#" class="mega-link">Denim</a>
                  <a href="#" class="mega-link">Leggings/Pants</a>
                  <a href="#" class="mega-link">Skirts/Shorts</a>
                  <a href="#" class="mega-link">Accessories</a>
                  <a href="#" class="mega-link">Bags/Purses</a>
                  <a href="#" class="mega-link">Swimwear/Underwear</a>
                  <a href="#" class="mega-link">Nightwear</a>
                  <a href="#" class="mega-link">Shoes</a>
                  <a href="#" class="mega-link">Beauty</a>


                </div>
                <div class="mega-item">
                  <h3 class="mega-title">Women</h3>
                  <a href="#" class="mega-link">Dresses</a>
                  <a href="#" class="mega-link">Tops</a>
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                  <a href="#" class="mega-link">Blazers</a>
                  <a href="#" class="mega-link">Denim</a>
                  <a href="#" class="mega-link">Leggings/Pants</a>
                  <a href="#" class="mega-link">Skirts/Shorts</a>
                  <a href="#" class="mega-link">Accessories</a>
                  <a href="#" class="mega-link">Bags/Purses</a>
                  <a href="#" class="mega-link">Swimwear/Underwear</a>
                  <a href="#" class="mega-link">Nightwear</a>
                  <a href="#" class="mega-link">Shoes</a>
                  <a href="#" class="mega-link">Beauty</a>


                </div>
              </div>
            </li>
            <li class="menu-list last"><a href="#" class="link-mega-menu">Hot deals</a>
              <div class="mega-box">
                <div class="mega-item">
                  <h3 class="mega-title">Women</h3>
                  <a href="#" class="mega-link">Dresses</a>
                  <a href="#" class="mega-link">Tops</a>
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                  <a href="#" class="mega-link">Blazers</a>
                  <a href="#" class="mega-link">Denim</a>
                  <a href="#" class="mega-link">Leggings/Pants</a>
                  <a href="#" class="mega-link">Skirts/Shorts</a>
                  <a href="#" class="mega-link">Accessories</a>
                  <a href="#" class="mega-link">Bags/Purses</a>
                  <a href="#" class="mega-link">Swimwear/Underwear</a>
                  <a href="#" class="mega-link">Nightwear</a>
                  <a href="#" class="mega-link">Shoes</a>
                  <a href="#" class="mega-link">Beauty</a>


                </div>
                <div class="mega-item">
                  <h3 class="mega-title">Women</h3>
                  <a href="#" class="mega-link">Dresses</a>
                  <a href="#" class="mega-link">Tops</a>
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                  <a href="#" class="mega-link">Blazers</a>
                  <a href="#" class="mega-link">Denim</a>
                  <a href="#" class="mega-link">Leggings/Pants</a>
                  <a href="#" class="mega-link">Skirts/Shorts</a>
                  <a href="#" class="mega-link">Accessories</a>
                  <a href="#" class="mega-link">Bags/Purses</a>
                  <a href="#" class="mega-link">Swimwear/Underwear</a>
                  <a href="#" class="mega-link">Nightwear</a>
                  <a href="#" class="mega-link">Shoes</a>
                  <a href="#" class="mega-link">Beauty</a>


                </div>
                <div class="mega-item">
                  <h3 class="mega-title">Women</h3>
                  <a href="#" class="mega-link">Dresses</a>
                  <a href="#" class="mega-link">Tops</a>
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                  <a href="#" class="mega-link">Blazers</a>
                  <a href="#" class="mega-link">Denim</a>
                  <a href="#" class="mega-link">Leggings/Pants</a>
                  <a href="#" class="mega-link">Skirts/Shorts</a>
                  <a href="#" class="mega-link">Accessories</a>
                  <a href="#" class="mega-link">Bags/Purses</a>
                  <a href="#" class="mega-link">Swimwear/Underwear</a>
                  <a href="#" class="mega-link">Nightwear</a>
                  <a href="#" class="mega-link">Shoes</a>
                  <a href="#" class="mega-link">Beauty</a>


                </div>
              </div>
            </li>
          </ul>
        </nav> */}
        <div className={s.container_main_img}>
          <div className={s.container_header}>
            <h1 className={s.header_title}>THE BRAND<br></br>
              <span className={s.bigger}>OF LUXERIOUS <span style={{ color: '#F16D7F' }}>FASHION</span></span>
            </h1>
          </div>


        </div>
      </div >
      <div className={s.menu}>
        <div className={s.grid}>
          <Category customStyle={s.item_menu_1} img={categorys[0].image} txt1={"LUXIROUS & trendy"} txt2={"women"}> </Category>
          <Category customStyle={s.item_menu_2} st={{ top: '-81%' }} img={categorys[1].image} txt1={"30% offer"} txt2={"men"}> </Category>
          <Category customStyle={s.item_menu_3} st={{ top: '-88%' }} img={categorys[2].image} txt1={"LUXIROUS & trendy"} txt2={"ACCESORIES"}> </Category>
          <Category customStyle={s.item_menu_4} img={categorys[3].image} txt1={"new arrivals"} txt2={"FOR kids"}> </Category>

        </div>
      </div>

      <div className={s.content}>
        <h2 className={s.content_font}>Fetured Items</h2>
        <p className={s.content_font_sub}> Shop for items based on what we featured in this week</p>
        <div className={s.grid_feature}>

          <div className={s.item_content}>
            <a className={s.item_img} href="single_page.html">

              <img className={s.item_img_pic} src={products[0].image} alt="" />
              <div className={s.txt_box}>
                <p className={s.item_dsc}>Mango People T-shirt</p>
                <p className={s.item_price}>$52.00</p>
              </div>

            </a>

            <div className={s.add_box}>
              <a className={s.add}> <span> Add to Cart</span></a>
              {/* <i class="fa fa-solid fa-cart-shopping" style={{ font: '14px' }}></i> */}

            </div>
          </div>

          {/* <div class="item_content">
            <a class="item-img" href="single_page.html">

              <img class="item-img-pic" src="img/product/product_(6).png" alt="" />
              <div class="txt-box">
                <p class="item-dsc">Mango People T-shirt</p>
                <p class="item-price">$52.00</p>
              </div>

            </a>

            <div class="add-box">
              <a class="add"> <i class="fa fa-solid fa-cart-shopping" style={{font: '14px'}}><span
                > Add to
                Cart</span></i> </a>
            </div>
          </div>

          <div class="item_content">
            <a class="item-img" href="single_page.html">

              <img class="item-img-pic" src="img/product/product_(6).png" alt="" />
              <div class="txt-box">
                <p class="item-dsc">Mango People T-shirt</p>
                <p class="item-price">$52.00</p>
              </div>

            </a>

            <div class="add-box">
              <a class="add"> <i class="fa fa-solid fa-cart-shopping" style={{font: '14px'}}><span
                > Add to
                Cart</span></i> </a>
            </div>
          </div>


          <div class="item_content">
            <a class="item-img" href="single_page.html">

              <img class="item-img-pic" src="img/product/product_(6).png" alt="" />
              <div class="txt-box">
                <p class="item-dsc">Mango People T-shirt</p>
                <p class="item-price">$52.00</p>
              </div>

            </a>

            <div class="add-box">
              <a class="add"> <i class="fa fa-solid fa-cart-shopping" style="font-size: 14px;"><span
                style="    font-family: Lato, sans-serif;"> Add to
                Cart</span></i> </a>
            </div>
          </div>


          <div class="item_content">
            <a class="item-img" href="single_page.html">

              <img class="item-img-pic" src="img/product/product_(6).png" alt="" />
              <div class="txt-box">
                <p class="item-dsc">Mango People T-shirt</p>
                <p class="item-price">$52.00</p>
              </div>

            </a>

            <div class="add-box">
              <a class="add"> <i class="fa fa-solid fa-cart-shopping" style="font-size: 14px;"><span
                style="    font-family: Lato, sans-serif;"> Add to
                Cart</span></i> </a>
            </div>
          </div>

          <div class="item_content">
            <a class="item-img" href="single_page.html">

              <img class="item-img-pic" src="img/product/product_(6).png" alt="" />
              <div class="txt-box">
                <p class="item-dsc">Mango People T-shirt</p>
                <p class="item-price">$52.00</p>
              </div>

            </a>

            <div class="add-box">
              <a class="add"> <i class="fa fa-solid fa-cart-shopping" style="font-size: 14px;"><span
                style="    font-family: Lato, sans-serif;"> Add to
                Cart</span></i> </a>
            </div>
          </div>

          <div class="item_content">
            <a class="item-img" href="single_page.html">

              <img class="item-img-pic" src="img/product/product_(6).png" alt="" />
              <div class="txt-box">
                <p class="item-dsc">Mango People T-shirt</p>
                <p class="item-price">$52.00</p>
              </div>

            </a>

            <div class="add-box">
              <a class="add"> <i class="fa fa-solid fa-cart-shopping" style="font-size: 14px;"><span
                style="    font-family: Lato, sans-serif;"> Add to
                Cart</span></i> </a>
            </div>
          </div>

          <div class="item_content">
            <a class="item-img" href="single_page.html">

              <img class="item-img-pic" src="img/product/product_(6).png" alt="" />
              <div class="txt-box">
                <p class="item-dsc">Mango People T-shirt</p>
                <p class="item-price">$52.00</p>
              </div>

            </a>

            <div class="add-box">
              <a class="add"> <i class="fa fa-solid fa-cart-shopping" style="font-size: 14px;"><span
                style="    font-family: Lato, sans-serif;"> Add to
                Cart</span></i> </a>
            </div>
          </div> */}

        </div>
        <br />
        <br />
        <div class="block-line">
          <a class="content-font-card button" href="">Browse All Product
            <i class="fa fa-solid fa-arrow-right"></i></a>
        </div>

        <div class="footer-block">
          <div class="grid-delivery">
            <div class="item_delivery1">
              <div>
                {/* // style={{position: 'relative'}} */}
                <img src="img/discount.png" alt="discount" />

                <img class="on_top" src="img/alpha_blend.png" alt="alpha_blend" />
              </div>
            </div>
            <div class="item_delivery2">
              <img src="img/ic_truck.svg" alt="" />
            </div>
            <div class="item_delivery5">
              <p class="icon_content-header">Free Delivery</p>

              <p class="item_content-text">Worldwide delivery on all. Authorit tively morph next-generation innov
                tion with extensive models.</p>
            </div>
            <div class="item_delivery3">
              <img src="img/ic_percent.svg" alt="" />
            </div>
            <div class="item_delivery6">
              <p class="icon_content-header">Sales & discounts</p>

              <p class="item_content-text">Worldwide delivery on all. Authorit tively morph next-generation innov
                tion with extensive models.</p>
            </div>
            <div class="item_delivery4">
              <img src="img/ic_crown.svg" alt="" />
            </div>
            <div class="item_delivery7">
              <p class="icon_content-header">Quality assurance</p>

              <p class="item_content-text">Worldwide delivery on all. Authorit tively morph next-generation innov
                tion with extensive models.</p>
            </div>
          </div>

        </div>

      </div>

      <footer>
        <div class="subscribe center-elements">
          <div class="container-subscribe-left flex_direct">
            <div class="elem_1">
              <img src="img/Intersect.png" alt="author picture" style={{ width: '96px' }} />
            </div>
            <div class="elem_2">
              <p class="author-text">“Vestibulum quis porttitor dui! Quisque viverra
                nunc mi, <i>a pulvinar
                  purus
                  condimentum“</i></p>
            </div>
            <div class="elem_3">
              <p class="author-text-name">Bin Burhan</p>
              <p class="author-text-name __location">Dhaka, Bd</p>
            </div>
            <div class="elem_4">
              <p><span class="dash" style={{ color: '#d6d6d6' }}> &#8722; <span class="dash">&#8722; </span><span
                class="dash" style={{ color: '#d6d6d6' }}>&#8722; </span></span></p>

            </div>
          </div>
          <div class=" container-subscribe-right flex_direct">


            <h2 class="text-subscribe-header"><b>SUBSCRIBE</b></h2>
            <h3 class="text-subscribe-header __subheader" > FOR OUR
              NEWLETTER AND
              PROMOTION
            </h3>
            <div class="wrapper">
              <input type="text" placeholder="Enter your email" />
              <button>
                <span >Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="col_1">
            <div class="flex-center">
              <a href="index.html">
                <img src="img/logo.png" alt="logo" style={{ width: '44px' }} /></a>
              <h3 class="logo-brand">BRAN<span class="letter_d">D</span></h3>
            </div>
            <p class="col-text">Objectively transition extensive data rather than cross functional solutions.
              Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly
              syndicate an expanded array of processes and cross-unit partnerships.
              <br />
              <br />
              Efficiently 24/365 action items and focused infomediaries.
              Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.

              Objectively strategize seamless relationships via resource sucking testing procedures. Proactively
              cultivate next-generation results for value-added methodologies. Dynamically plagiarize unique
              methodologies after performance based methodologies. Monotonectally empower stand-alone mindshare
              rather than ubiquitous opportunities. Dynamically orchestrate resource sucking scenarios after
              alternative synergy.

              Compellingly envisioneer corporate methods of empowerment before standards compliant technologies.
              Objectively facilitate progressive.
            </p>
          </div>
          <div class="col_2">
            <p class="col-text-header">COMPANY</p>
            <a href="" class="col_ref">Home</a>
            <a href="" class="col_ref">Shop</a>
            <a href="" class="col_ref">About</a>
            <a href="" class="col_ref">How It Works</a>
            <a href="" class="col_ref">Contact</a>
          </div>
          <div class="col_3">
            <p class="col-text-header">INFORMATION</p>
            <a href="" class="col_ref">Home</a>
            <a href="" class="col_ref">Shop</a>
            <a href="" class="col_ref">About</a>
            <a href="" class="col_ref">How It Works</a>
            <a href="" class="col_ref">Contact</a>
          </div>

          <div class="col_4">

            <p class="col-text-header">SHOP CATEGORY</p>
            <a href="" class="col_ref">Home</a>
            <a href="" class="col_ref">Shop</a>
            <a href="" class="col_ref">About</a>
            <a href="" class="col_ref">How It Works</a>
            <a href="" class="col_ref">Contact</a>
          </div>
        </div>

        <div class="logos">
          <div class="container-left">
            <p class="brand-text">© 2022 Brand All Rights Reserved.</p>
          </div>
          <div class="container-right center-elements">
            <div class="element">
              <i class="fa fa-brands fa-facebook-f"></i>
            </div>
            <div class="element">
              <i class="fa fa-brands fa-instagram"></i>
            </div>
            <div class="element">
              <i class="fa fa-brands fa-pinterest-p"></i>
            </div>
            <div class="element">
              <i class="fa fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
};

