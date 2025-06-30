


import { useNavigate } from "react-router-dom";
import { getId } from "../api/controllers/new-controller";
import { Box, Button, TextField } from "@mui/material";

const IdPage = () => {
    const navigate = useNavigate();
    


    return <Box>
        <Button
        onClick={() => getId(1)}
        >
            jnhn
        </Button>
    </Box>
}

export default IdPage
