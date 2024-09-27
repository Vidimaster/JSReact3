import s from "./Cart.module.scss";

export const Cart = (props) => (


    <details className={s.checkout}>
        <summary className={s.button_account}>
            My
            Account&nbsp;</summary>
        {/* <span><i className={s.fa + s.fa_solid + s.fa_caret_down}></i></span> */}


        <div className={s.checkout__content}>

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
                    {/* <i className={s.fa + s.fa_solid + s.fa_circle_xmark}></i> */}
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
                    {/* <i class="fa fa-solid fa-circle-xmark"></i> */}
                </div>
            </div>

            <p className={s.total_text}>TOTAL&nbsp;&nbsp;&nbsp;&nbsp; $500.00</p>

            {/* <div><a className={s.button_account} href="checkout.html"
                  >CHECKOUT&nbsp;</a></div> */}
            <div><a className={s.button_account} href="cart.html">GO TO
                CART&nbsp;</a></div>
        </div>
    </details >
);
