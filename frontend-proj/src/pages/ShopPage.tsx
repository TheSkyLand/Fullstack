import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShopGoods from "../components/ShopGoods";

import { deleteDataId, getData } from "../api/controllers/new-controller";

import { shopDto } from "../types/common/data.types";

import {
    Box,
    Button,
    Typography,
    Input,
    TextField,
    List,
    ListItem
} from "@mui/material";


const ShopPage = () => {
    const navigate = useNavigate();
    const [data, setData] = React.useState<shopDto[]>();

    useEffect(() => {
        getData()
            .then((response) => {
                setData(response.data);
            })
            .catch(e => console.log(e));
    }, []);

    const deleteRecord = (idRecord: number) => {
        deleteDataId(idRecord)
            .then((response) => {
                console.log(response);
                getData()
                    .then((response) => {
                        setData(response.data);
                    })
                    .catch(e => console.log(e));
            })
            .catch((e) => console.log(e));
    }

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
                onClick={() => navigate('/registration')}
            >
                учётная запись
            </Button>
            <Button>
                контакты
            </Button>
            <Button
                onClick={() => navigate('/main')}
            >admin</Button>
        </Box>
        <List
        sx={{display: 'flex',
            
        }}
        >
            {data?.map((item, key) => (
                <ListItem
                    key={`listItem-${key}`}
                >
                    <ShopGoods id={key} cost={item.cost} name={item.name} info={item.info} image={item.image} />

                </ListItem>
            ))}
        </List>
    </Box>

};

export default ShopPage;