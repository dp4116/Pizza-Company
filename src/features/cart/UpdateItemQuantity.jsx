import Button from "../../ui/Button";
import {useSelector, useDispatch} from 'react-redux';
import {  getCurrentQuantityById, incrementItemQuantity} from "./cartSlice";
import { decrementItemQuantity } from "./cartSlice";

const UpdateItemQuantity = ({pizzaId}) => {
    const dispatch = useDispatch();
    const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

    function handleIncrement(prop){
        dispatch(incrementItemQuantity(prop));
    }
    function handleDecrement(prop){
        dispatch(decrementItemQuantity(prop));
    }
    return (
        <div className="flex items-center gap-1 md:gap-3">
        <Button type='round' onClick={()=>handleIncrement(pizzaId)} >+</Button>
        <span className="text-l font-medium">
            {currentQuantity}
        </span>
        <Button type='round' onClick={()=>handleDecrement(pizzaId)}>-</Button>
      </div>
    );
}

export default UpdateItemQuantity;
