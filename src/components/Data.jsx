import { Box, Button, Typography, ButtonGroup } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react'

export default function Data() {
    return (
        <Box sx={{ flex: 1, maxHeight: '550px', height: '100%', margin: 'auto', pt: 2, px: 3, textAlign: 'left' }}>
            <Box sx={{ p: 2, mt: '20px' }}>
                <Typography sx={{ color: 'hsl(219, 9%, 45%)', fontSize: '14px', }}>SNEAKER COMPANY</Typography>
                <Typography sx={{ fontWeight: 'bold', fontSize: '44px', }}>Fall Limited Edition Sneakers</Typography>
                <Typography sx={{ color: 'hsl(219, 9%, 45%)', fontSize: '14px', mb: 2, }}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</Typography>
            </Box>
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '24px' }}>$125.00</Typography>
                    <Button sx={{ fontSize: '24px', backgroundColor: 'black', color: 'white', fontWeight: 'bold', width: '100px', height: '30px' }}>50%</Button>
                </Box>
                <Typography sx={{ textDecoration: 'line-through', color: 'hsl(219, 9%, 45%)', mb: 2, }}>$250.00</Typography>
            </Box>
            <Box sx={{ p: 2, display: 'flex', gap: '50px' }}>
                <ButtonGroup>
                    <Button sx={{ color: 'orange', border: '1px solid #CFD8D9', fontWeight: 'bold', fontSize: '15px' }}>+</Button>
                    <Button sx={{ color: 'black', border: '1px solid #CFD8D9', fontWeight: 'bold', fontSize: '15px' }}>0</Button>
                    <Button sx={{ color: 'orange', border: '1px solid #CFD8D9', fontWeight: 'bold', fontSize: '15px' }}>-</Button>
                </ButtonGroup>
                <Button sx={{ backgroundColor: '#FF7D1B', color: 'black', p: 2, width: '200px', height: '40px' }}><ShoppingCartOutlinedIcon />Add to cart</Button>
            </Box>
        </Box>
    )
}
