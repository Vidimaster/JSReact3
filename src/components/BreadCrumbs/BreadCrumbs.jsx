
import s from "../CartCheckout/CartCheckout.module.scss";

export const BreadCrumbs = (prop) => {

  return (


    <div className={s.bread_block}>

      <div className={s.container_left_single_page_header}>
        <h3 className={""}>New Arrivals</h3>
      </div>

      <nav className={s.container_right}>
        <ul className={s.breadcrumb_single}>
          <li><a href="/">Home</a></li>
          <li><a href="/catalogue">Men</a></li>
          <li><a href="/catalogue">New Arrivals</a></li>

        </ul>
      </nav>
    </div>

  );
};