import { useSideHeader } from "../../store";
import styles from "../MainHeader/index.module.css";

export default function SideHeader() {
    const { closeSideHeader } = useSideHeader();
    return (
        <div className='overlay d-flex d-md-none' onClick={closeSideHeader}>
            <div id={styles.content} onClick={e => e.stopPropagation()}></div>
        </div>
    )
}
