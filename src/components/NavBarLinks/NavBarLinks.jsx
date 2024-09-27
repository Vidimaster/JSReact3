
import s from "./NavBarLinks.module.scss";

export const NavBarLinks = (prop) => {

    return (


        <div className={s.nav_menu}>
            <ul className={s.breadcrumb}>
                <li className={s.menu_list}><a href="#">Home</a>

                </li>
                <li className={s.menu_list}><a href="#" className={s.link_mega_menu}>Men</a>
                    <div className={s.mega_box}>


                        {[...Array(3)].map((_, index) => <div className={s.mega_item} key={crypto.randomUUID()}>
                            <h3 className={s.mega_title}>Men</h3>
                            {prop.itm.map((value) => (
                                <a href="#" className={s.mega_link} key={crypto.randomUUID()}>{value}</a>
                            ))}



                        </div>)}

                    </div>
                </li>
                <li className={s.menu_list}><a href="#" className={s.link_mega_menu}>Women</a>
                    <div className={s.mega_box}>


                        {[...Array(3)].map((_, index) => <div className={s.mega_item} key={crypto.randomUUID()}>
                            <h3 className={s.mega_title}>Women</h3>
                            {prop.itm.map((value) => (
                                <a href="#" className={s.mega_link} key={crypto.randomUUID()}>{value}</a>
                            ))}



                        </div>)}

                    </div>
                </li>
                <li className={s.menu_list}><a href="#" className={s.link_mega_menu}>Kids</a>
                    <div className={s.mega_box}>


                        {[...Array(3)].map((_, index) => <div className={s.mega_item} key={crypto.randomUUID()}>
                            <h3 className={s.mega_title}>Kids</h3>
                            {prop.itm.map((value) => (
                                <a href="#" className={s.mega_link} key={crypto.randomUUID()}>{value}</a>
                            ))}



                        </div>)}

                    </div>
                </li>
                <li key={crypto.randomUUID()} className={s.menu_list}><a href="#" className={s.link_mega_menu}>Accoseriese</a>

                </li>
                <li key={crypto.randomUUID()} className={s.menu_list + s.second_last}><a href="#" className={s.link_mega_menu}>Featured</a>

                </li>
                <li key={crypto.randomUUID()} className={s.menu_list + s.last}><a href="#" className={s.link_mega_menu}>Hot deals</a>

                </li>
            </ul>
        </div>

    );
};