import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { createData, editDataId, getDataId } from "../api/controllers/common-contreller";

import {
    Box,
    Button,
    TextField,
    Typography
} from "@mui/material";

const CreateEditElement = () => {
    const { id } = useParams();
    const navigate = useNavigate();


    const [name, setName] = React.useState('');
    const [secondName, setSecondName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    

    useEffect(() => {
        if (id) {
            getDataId(+id)
                .then((response) => {
                    setName(response.data.name);
                    setSecondName(response.data.secondName);
                    setPhone(response.data.phone);
                    setEmail(response.data.email);
                    setPassword(response.data.password);
                })
                .catch((e) => console.log(e));
        }
    }, [id]);

    const processingRequest = () => {
        const data = {
            name: name,
            secondName: secondName,
            phone: phone,
            password: password,
            email: email,
        }

        id ?
            editDataId(+id, data)
                .then(() => {
                    navigate(-1);
                })
                .catch((e) => console.log(e))
            :
            createData(data)
                .then(() => {
                    navigate(-1);
                })
                .catch((e) => console.log(e))
    }

    return <Box
        sx={{
            width: '900px',
            m: '0 auto'
        }}
    >
        <Typography
            component={'h2'}
            sx={{
                fontSize: '26px',
                my: 1,
                textDecoration: 'underline'
            }}
        >
            {id ? 'Редактировать запись' : 'Создать новую запись'}
        </Typography>
        <Typography>
            Имя:
        </Typography>
        <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
                mb: 2
            }}
        />
        <Typography>
            фамилия:
        </Typography>
        <TextField
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
            sx={{
                mb: 2
            }}
        />
        <Typography>
            номер телефона:
        </Typography>
        <TextField
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            sx={{
                mb: 2
            }}
        />
        <Typography>
            почта:
        </Typography>
        <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
                mb: 2
            }}
        />
        <Button
            variant='contained'
            color='success'
            onClick={processingRequest}
            sx={{
                display: 'block',
                mt: 2
            }}
        >
            {id ? `Редактировать запись` : `Создать новую запись`}
        </Button>
    </Box>
}

export default CreateEditElement;