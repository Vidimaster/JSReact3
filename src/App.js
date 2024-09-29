import s from './styles/App.module.scss';
import { HomePage } from "./components/HomePage/HomePage";
import { CartCheckout } from "./components/CartCheckout/CartCheckout";
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import { ColumnLinks } from "./components/ColumnLinks/ColumnLinks";
import { NavBarLinks } from "./components/NavBarLinks/NavBarLinks";
import { Cart } from "./components/Cart/Cart";

import author_img from './img/Intersect.png'
import { Catalogue } from "./components/Catalogue/Catalogue";

import { useState } from "react";
import { fetchProducts } from './redux/services/showListThunk';

import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const logo = require('./img/logo.png')

function App() {

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

  const routes = [
    {
      path: "/",
      element: <HomePage prop={state} />,
    },
    {
      path: "/cart_checkout",
      element: <CartCheckout prop={state} />,

    },
    {
      path: "/catalogue",
      element: <Catalogue prop={state} />,
    },
  ];

  const listColumn = {
    items: [
      { title: 'COMPANY', links: ['Home', 'Shop', 'About', 'How It Works', 'Contact'], cl: s.col_2 },
      { title: 'INFORMATION', links: ['Home', 'Shop', 'About', 'How It Works', 'Contact'], cl: s.col_3 },
      { title: 'SHOP CATEGORY', links: ['Home', 'Shop', 'About', 'How It Works', 'Contact'], cl: s.col_4 },
    ]
  }

  const listNavBar = {
    links: [
      'Tops', 'Sweaters/Knits', 'Blazers', 'Denim', 'Leggings/Pants', 'Skirts/Shorts', 'Accessories', 'Bags/Purses', 'Swimwear/Underwear', 'Nightwear', 'Shoes', 'Beauty',
    ]
  }

  return (
    <>
      <div className={s.top}>
        <div className={s.navbar}>
          <div className={s.container}>
            <div className={s.container_left}>
              <a href="/">
                <img src={logo} alt="logo" style={{ width: '44px' }} /></a>

              <a href="/">
                <h3 className={s.logo_brand}>BRAN<span className={s.letter_d}>D</span></h3>
              </a>
              <div className={s.dropdown}>

                <button className={s.dropbtn}>
                  <span className={s.browse_text}>Browse </span></button>
                {/* <span><i className={s.fa + s.fa_solid + s.fa_caret_down}></i></span> */}
                <div className={s.dropdown_content}>
                  <p className={s.text_menu_subhader}>WOMEN</p>
                  <hr className={s.hr_custom}></hr>

                  {listNavBar.links.map((value) => (
                    <a href="/catalogue" className={s.mega_link} key={crypto.randomUUID()}>{value}</a>
                  ))}
                  <br></br>
                  <p className={s.text_menu_subhader}>MEN</p>
                  <hr className={s.hr_custom}></hr>
                  <a href="/catalogue" className={s.mega_link}>Tees/Tank tops</a>
                  <a href="/catalogue" className={s.mega_link}>Shirts/Polos</a>
                  <a href="/catalogue" className={s.mega_link}>Sweaters</a>
                  <a href="/catalogue" className={s.mega_link}>Sweatshirts/Hoodies</a>
                  <a href="/catalogue" className={s.mega_link}>Blazers</a>
                  <a href="/catalogue" className={s.mega_link}>Jackets/vests</a>

                </div>
              </div>

              {/* <div className={s.wrapper_email}>
            <input type="text" placeholder="Search for Item... "></input>
            <span><i class="fa fa-solid fa-magnifying-glass"></i></span>
          </div> */}
            </div>
            <div className={s.container_right}>
              {/* <i className={s.fa + s.fa_solid + s.fa_cart_shopping + s.nav_icon_color}></i> */}
              <Cart prop={state} />

            </div >
          </div >
        </div >
        <NavBarLinks itm={listNavBar.links} />
        <div className={s.container_main_img}>
          <div className={s.container_header}>
            <h1 className={s.header_title}>THE BRAND<br></br>
              <span className={s.bigger}>OF LUXERIOUS <span style={{ color: '#F16D7F' }}>FASHION</span></span>
            </h1>
          </div>
        </div>

      </div>
      <BrowserRouter>

        <div>

          <Routes>
            {routes.map(item => <Route key={item.path} element={item.element} path={item.path} />)}
          </Routes>
        </div>
      </BrowserRouter>

      <footer>
        <div className={s.subscribe}>
          <div className={s.container_subscribe_left + s.flex_direct}>
            <div className={s.elem_1}>
              <img src={author_img} alt="author picture" style={{ width: '96px' }} />
            </div>
            <div className={s.elem_2}>
              <p className={s.author_text}>“Vestibulum quis porttitor dui! Quisque viverra
                nunc mi, <i>a pulvinar
                  purus
                  condimentum“</i></p>
            </div>
            <div className={s.elem_3}>
              <p className={s.author_text_name}>Bin Burhan</p>
              <p className={s.author_text_name + s.__location}>Dhaka, Bd</p>
            </div>
            <div className={s.elem_4}>
              <p><span className={s.dash} style={{ color: '#d6d6d6' }}> &#8722; <span className={s.dash}>&#8722; </span><span
                className={s.dash} style={{ color: '#d6d6d6' }}>&#8722; </span></span></p>

            </div>
          </div>
          <div className={s.container_subscribe_right + s.flex_direct}>


            <h2 className={s.text_subscribe_header}><b>SUBSCRIBE</b></h2>
            <h3 className={s.text_subscribe_header + s.__subheader} > FOR OUR
              NEWLETTER AND
              PROMOTION
            </h3>
            <div className={s.wrapper}>
              <input type="text" placeholder="Enter your email" />
              <button>
                <span >Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        <div className={s.columns}>
          <div className={s.col_1}>
            <div className={s.flex_center}>
              <a href="/">
                <img src={logo} alt="logo" style={{ width: '44px' }} /></a>
              <h3 className={s.logo_brand}>BRAN<span className={s.letter_d}>D</span></h3>
            </div>
            <p className={s.col_text}>Objectively transition extensive data rather than cross functional solutions.
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
          <ColumnLinks prop={listColumn.items} />




        </div>
        <div className={s.logos}>
          <div className={s.container_left}>
            <p className={s.brand_text}>© 2022 Brand All Rights Reserved.</p>
          </div>
          <div className={s.container_right + s.center_elements}>
            {/* <div class="element">
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
              </div> */}
          </div>
        </div>
      </footer>

    </>

  );
}

export default AppWrapper;
