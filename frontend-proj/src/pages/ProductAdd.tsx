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
            variant='contained'
            color='success'
            onClick={() => navigate('/product-add/new/')}
            sx={{
                my: 1
            }}
        >
            Создать новую запись
        </Button>
        <List>
            {
                data?.map((item, key) => (
                    <ListItem
                        key={`listItem-${key}`}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            border: '1px solid #007dea'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <Typography
                                component={'h3'}
                            >
                                Имя: {item.name}
                            </Typography>
                            <Typography
                                component={'h4'}
                            >
                                Цена: {item.cost}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <Button
                                color='info'
                                variant='contained'
                                onClick={() => navigate(`/product-add/edit/${item.id}`)}
                            >
                                Изменить
                            </Button>
                            <Button
                                color='error'
                                variant='contained'
                                onClick={() => deleteRecord(Number(item.id))}
                                sx={{
                                    mt: 1
                                }}
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