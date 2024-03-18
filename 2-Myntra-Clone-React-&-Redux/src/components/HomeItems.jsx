import { useDispatch, useSelector } from "react-redux"
import { bagAction } from "../store/bagSlice"
import { FcAddImage } from "react-icons/fc";
import { FcDisapprove } from "react-icons/fc";


const HomeItems = ({ item }) => {
    const dispatch = useDispatch()
    const bagItems = useSelector((store) => store.bag)
    const elementFound = bagItems.indexOf(item.id) >= 0;

    const handleAddtoBag = () => {
        dispatch(bagAction.addToBag(item.id))
    }

    const handleRemove = () => {
        dispatch(bagAction.removeToBag(item.id))
    }
    return (
        <>
            <div className="item-container">
                <img className="item-image" src="{item.image}" alt="item image" />
                <div className="rating">
                    {item.rating.stars} ⭐ | {item.rating.count}
                </div>
                <div className="company-name">{item.company}</div>
                <div className="item-name">{item.item_name}</div>
                <div className="price">
                    <span className="current-price">Rs {item.current_price}</span>
                    <span className="original-price">Rs {item.original_price}</span>
                    <span className="discount">({item.discount_percentage}% OFF)</span>
                </div>
                {elementFound ? (
                    <button type="button" className="btn-add-bag btn btn-danger" onClick={handleRemove}><FcDisapprove />  Remove</button>
                ) : (
                    <button type="button" className="btn-add-bag btn btn-success" onClick={handleAddtoBag}><FcAddImage />  Add to Bag</button>
                )
                }
            </div>
        </>
    )
}

export default HomeItems