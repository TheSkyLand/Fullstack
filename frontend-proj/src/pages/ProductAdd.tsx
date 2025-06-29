import { shopDto } from "../types/common/data.types";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { getData, deleteDataId } from "../api/controllers/new-controller";


import {
    Box,
    Button,
    List,
    ListItem,
    Typography,
    TextField
} from "@mui/material";

const ProductAdd = () => {
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
    return <Box
        sx={{
            width: '900px',
            m: '0 auto'
        }}
    >
        <Button
            onClick={() => navigate('/product-add/new/')}
        >
            Создать новую запись
        </Button>
        <List>
            {
                data?.map((item, key) => (
                    <ListItem
                        key={`listItem-${key}`}
                    >
                        <Box
                        >
                            <Typography
                            >
                                Имя: {item.name}
                            </Typography>
                            <Typography
                            >
                                Цена: {item.cost}
                            </Typography>
                            <Typography
                            >
                                Информация: {item.info}
                            </Typography>
                            <Typography>
                                Ссылка на изображение продукта: {item.image}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <Button

                                onClick={() => navigate(`/product-add/edit/${item.id}`)}
                            >
                                Изменить
                            </Button>
                            <Button
                                onClick={() => deleteRecord(Number(item.id))}
                            >
                                Удалить
                            </Button>
                        </Box>
                    </ListItem>
                ))
            }
        </List>
    </Box>
}


export default ProductAdd