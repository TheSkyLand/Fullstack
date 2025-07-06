import { Box, Button } from "@mui/material"

import { getCommon, getDataTest, getId, getIdTest } from "../api/controllers/new-controller"

const IdPage = () => {
    return (<Box>
        <Button
            onClick={() => getId(0)}
        >
            jnhn
        </Button>
    </Box>
    )

}

export default IdPage