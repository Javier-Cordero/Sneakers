import { useState } from 'react';
import { Box, ImageList, ImageListItem } from '@mui/material';

export default function Card() {
    // Estado para la imagen seleccionada
    const [selectedImage, setSelectedImage] = useState('image-product-1.jpg');

    // Función para manejar el clic en una imagen
    const handleImageClick = (src) => {
        setSelectedImage(src);
    };
    return (
        <Box sx={{ flex: 1, maxHeight: '550px', height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', margin: 'auto', pt: 2 }}>
            <Box sx={{ width: '500px', height: '400px', mx: 'auto' }}>
                <img src={selectedImage} alt="Selected" style={{ width: '100%', height: '100%', objectFit: 'cover',border:'0 solid',borderRadius:'10px' }} />
            </Box>
            <Box sx={{ width: '500px', height: '100px', mx: 'auto' }}>
                <ImageList sx={{ width: '100%', height: '100%' }} cols={4} rowHeight={100}>
                    {[1, 2, 3, 4].map((item) => {
                        const imgSrc = `image-product-${item}.jpg`;
                        return (
                            <ImageListItem key={item} onClick={() => handleImageClick(imgSrc)} sx={{ width: '120px', height: '100px', padding: 0 }}>
                                <img src={imgSrc} alt={item} style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer',border:'0 solid',borderRadius:'10PX' }} />
                            </ImageListItem>
                        );
                    })}
                </ImageList>
            </Box>
        </Box>
    )
}
