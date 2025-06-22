import { Button, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useNavigate } from "react-router-dom"


interface ShopGoodsProps {
    name: string
    cost: number
    image: string
}


const ShopGoods = (props: ShopGoodsProps) => {
    const navigate = useNavigate();

    return <Button onClick={() => navigate('/product/${item.id}')}>
        <Box sx={{
            width: "250px",
            height: "250px",
            padding: "10px",
            border: "2px solid black",
            borderRadius: "20px",
        }} >
            <Typography>{props.name}</Typography>
            <Box sx={{

                width: "200px",
                height: "200px",
                display: "flex",
                flexWrap: 'wrap',
                alignContent:'flex-start',
                justifyContent: 'flex-end',
                background: `url(${props.image})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",

            }}>
            </Box>
            <Typography>{props.cost}</Typography>
            <Button></Button>
        </Box>
    </Button>
}


export default ShopGoods