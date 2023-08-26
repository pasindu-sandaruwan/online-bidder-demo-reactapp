import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { onShowBiddingCart } from "../../store/BiddingCartSlice";

const BiddingCartBadge = () => {
    const dispatch = useDispatch();
    const cartItemCount = useSelector((state : any)=> state.biddingCart.items.length );

    const onClickCart = () =>{
        dispatch(onShowBiddingCart());
    }

    return (
        <IconButton
            onClick={() => onClickCart()}
            style={{
                marginTop : 24,
                marginRight: 10,
                float: "right",
            }}
        >
            <Badge badgeContent={cartItemCount} color="primary">
                <ShoppingCartIcon fontSize="large" color="action" />
            </Badge>
        </IconButton>
    );
};

export default BiddingCartBadge;
