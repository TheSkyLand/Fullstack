import { Box, Button, List, ListItem, TextField, Typography } from "@mui/material"
import { getData, deleteDataId, getDataId } from "../api/controllers/new-controller"
import { useNavigate } from "react-router-dom";
import React from "react";
import { shopDto } from "../types/common/data.types";
import { useEffect } from "react";

const IdPage = () => {
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


    return (<Box>
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

        <Typography>Название</Typography>
        <TextField>

        </TextField>

        <Typography>Цена</Typography>
        <TextField>

        </TextField>

        <Typography>Информация</Typography>
        <TextField>

        </TextField>

        <Typography>Ссылка на картинку</Typography>
        <TextField>

        </TextField>





        <Button
            onClick={() => getDataId(0)}
        >
            jnhn
        </Button>
    </Box>
    )

}

export default IdPage