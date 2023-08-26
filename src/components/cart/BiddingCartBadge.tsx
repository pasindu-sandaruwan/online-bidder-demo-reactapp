import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";

const BiddingCartBadge = () => {
    const cartItemCount = useSelector((state : any)=> state.biddingCart.items.length );
    return (
        <IconButton
            onClick={() => alert("TODO : Open the list modal")}
            style={{
                marginBottom: 10,
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
