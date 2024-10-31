"use client"
import { AppBar, Box, Button, Drawer, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloseIcon from '@mui/icons-material/Close';

export default function ResponsiveAppBar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawerContent = (
        <Box
            sx={{ width: 250, p: 2 }}
            role="presentation"
        // onClick={handleDrawerToggle}
        // onKeyDown={handleDrawerToggle}
        >
            <IconButton edge="end" onClick={handleDrawerToggle}>
                <CloseIcon />
            </IconButton>
            <Stack spacing={2} mt={2}>
                <Button color="inherit">Features</Button>
                <Button color="inherit">Pricing</Button>
                <Button color="inherit">About</Button>
                <Button variant="contained" color="primary">
                    Get Started
                </Button>
            </Stack>
        </Box>
    );

    return (
        <>
            <AppBar position="fixed" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(10px)' }}>
                <Toolbar>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <SmartToyIcon sx={{ color: 'primary.main', fontSize: 32 }} />
                        <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                            AI Chat
                        </Typography>
                    </Box>

                    {/* Display menu on large screens */}
                    <Stack direction="row" spacing={2} sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}>
                        <Button color="inherit">Features</Button>
                        <Button color="inherit">Pricing</Button>
                        <Button color="inherit">About</Button>
                        <Button variant="contained" color="primary">
                            Get Started
                        </Button>
                    </Stack>

                    {/* Menu icon for mobile screens */}
                    <IconButton
                        color="inherit"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Drawer for mobile screens */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                {drawerContent}
            </Drawer>
        </>
    );
}
