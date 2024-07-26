import { Avatar, Box, Button, Typography } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
export default function Navbar() {
    return (
        <Box component='nav' sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, borderBottom: '1px solid grey' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <Typography sx={{fontSize:'30px', fontWeight:'bold'}}>sneakers</Typography>
                <Button sx={{color:'hsl(219, 9%, 45%)', textTransform:'none'}}>Collections</Button>
                <Button sx={{color:'hsl(219, 9%, 45%)', textTransform:'none'}}>Men</Button>
                <Button sx={{color:'hsl(219, 9%, 45%)', textTransform:'none'}}>Woman</Button>
                <Button sx={{color:'hsl(219, 9%, 45%)', textTransform:'none'}}>About</Button>
                <Button sx={{color:'hsl(219, 9%, 45%)', textTransform:'none'}}>Contact</Button>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <ShoppingCartOutlinedIcon />
                <Avatar src='image-avatar.png' />
            </Box>
        </Box>
    );
}
