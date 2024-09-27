
import s from "./ColumnLinks.module.scss";

export const ColumnLinks = ({ prop }) => {

    return (


        prop.map((value) => (
            <div className={value.cl} key={crypto.randomUUID()}>
                <p className={s.col_text_header}>{value.title}</p>
                {value.links.map((itm) => (
                    <a href="" className={s.col_ref} key={crypto.randomUUID()}>{itm}</a>
                ))}
            </div>
        ))


    );
};