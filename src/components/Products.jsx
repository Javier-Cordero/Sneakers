import { Box } from "@mui/material";
import Card from '../components/Card'
import Data from '../components/Data'
export function Products() {
    return (
        <Box sx={{ display: "flex", justifyContent: 'space-between', gap: '1rem',width:'97%',margin:'auto', height:'560px'}}>
            <Card />
            <Data />
        </Box>
    )
}
