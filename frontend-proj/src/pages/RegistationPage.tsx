import React from "react"
import { useEffect } from "react";
import { Box, Button, Grid, Input, TextField, Typography } from "@mui/material"
import { deleteDataId, getData } from "../api/controllers/common-contreller";
import { dataDto } from "../types/common/data.types";

const RegistrationPage = () => {
    const [data, setData] = React.useState<dataDto[]>();

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
        <Typography>
            регистрация
        </Typography>
        <Box>
            <Typography>логин</Typography>
            <TextField></TextField>
            <Typography>имя</Typography>
            <TextField></TextField>
            <Typography>фамилия</Typography>
            <TextField></TextField>
            <Typography>пароль</Typography>
            <TextField></TextField>
            <Typography>почта</Typography>
            <TextField></TextField>
            <Typography>телефон</Typography>
            <TextField></TextField>
        </Box>
        <Button>зарегистрироваться</Button>
        <Typography>уже зарегистрированы? войдите в свой аккаунт</Typography>
        <Button>войти</Button>
    </Box>
}

export default RegistrationPage