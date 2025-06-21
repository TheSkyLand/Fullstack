import React from "react";
import { useNavigate } from "react-router-dom";
import { MusicShopData } from "../helpers/MusicShopData";
import ShopGoods from "../components/ShopGoods";



import {
    Box,
    Button,
    Typography,
    Input,
    TextField
} from "@mui/material";


const ShopPage = () => {
    const navigate = useNavigate();

    return <Box>
        <Box>
            <Button>
                домашняя страница
            </Button>
            <Button>
                каталог
            </Button>
            <Box>
                <TextField>

                </TextField>
                <Button>

                </Button>
            </Box>

            <Button
            >
                учётная запись
            </Button>
            <Button>
                контакты
            </Button>
        </Box>

        {MusicShopData.map((item, key) => (
            <ShopGoods
                name={item.name}
                cost={item.cost}
                image={`${process.env.PUBLIC_URL + item.image}`}

            />


            /*<Box sx={{
                width: "250px",
                height: "250px",
                border: "2px solid black",
                borderRadius: "20px",
                padding: "10px",
                margin: "20px"
            }}>
                <Typography sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "25px",
                    color: "orange"
                }}>{item.name}</Typography>
                <Box>{item.image}</Box>
                <Typography sx={{
                    color: "green",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "20px",
                }}>{item.cost}₽</Typography>
            </Box> */


        ))}
    </Box>
};

export default ShopPage;