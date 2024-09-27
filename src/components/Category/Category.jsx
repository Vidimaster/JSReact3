
import s from "./Category.module.scss";
import React from "react";

export const Category = (props) => (

    <div className={props.customStyle}>
        <a href="product.html">
            <div className={props.customStyle + s.hoverable_img}>
                <img className={s.hoverable_img_img} src={props.img} alt="img" />

            </div>
            <div className={s.offer} style={props.st}>

                <p className={s.offer_text}>{props.txt1}</p>
                <p className={s.__subtext}>{props.txt2}</p>
            </div>
        </a>
    </div>

);
