import { Typography } from "@mui/material"
import { Box } from "@mui/system"



interface ShopGoodsProps {
    name: string
    cost: number
    image: string
}


const ShopGoods = (props: ShopGoodsProps) => {
            return <Box sx={{
                width: "250px",
                height: "250px",
                padding: "10px",
                border: "2px solid black",
                borderRadius: "20px",
            }} >
                <Typography>{props.name}</Typography>
                <Box sx={{background: `url(${props.image})` }}>
                </Box>
                <Typography>{props.cost}</Typography>
            </Box>
}


export default ShopGoods