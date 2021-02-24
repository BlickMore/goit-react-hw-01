import { randColor } from "../../utils/utils";
import css from './Sitem.module.css'


const Sitem = ({label, percentage})=>(
    <li className={css.item} style={{backgroundColor:randColor()}}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
    </li>);

    export default Sitem;

