import { FaEdit,FaTrash } from "react-icons/fa";
import style from './List.module.css';

function List({list, removeItem, editItem}){
    return(
        <div className={style.groceryList}>
            {list.map((item, index)=>{
                const {id, title} = item;
                return(
                    <section key={id} className={style.itemPanel}>
                        <p className={style.itemName}>{index+1}. {title}</p>
                        <div className={style.btnContainer}>
                            <button className={style.editBtn} onClick={()=>editItem(id)}>
                                <FaEdit />
                            </button>
                            <button className={style.deleteBtn} onClick={()=> removeItem(id)}>
                                <FaTrash />
                            </button>
                        </div>
                    </section>
                );
            })}
           
        </div>
    );
}
export default List;