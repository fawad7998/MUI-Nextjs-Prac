'use client'

import React from 'react'
import {
    AppBar,
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    Rating,
    Stack,
    TextField,
    ThemeProvider,
    Toolbar,
    Typography,
    createTheme,
    alpha,
} from '@mui/material'
import Image from 'next/image'
import { styled } from '@mui/material/styles'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import ChatIcon from '@mui/icons-material/Chat'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { motion } from 'framer-motion'

// Create custom dark theme with purple accents
const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#9333EA',
        },
        background: {
            default: '#0A0A0A',
            paper: '#111111',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '3.5rem',
            fontWeight: 700,
            lineHeight: 1.2,
        },
        h2: {
            fontSize: '2.5rem',
            fontWeight: 700,
            lineHeight: 1.3,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontSize: '1rem',
                    padding: '8px 24px',
                },
                contained: {
                    boxShadow: '0 4px 14px 0 rgba(147, 51, 234, 0.39)',
                },
            },
        },
    },
})

const GlowingCard = styled(Card)(({ theme }) => ({
    background: 'linear-gradient(145deg, rgba(26, 26, 26, 0.9) 0%, rgba(42, 42, 42, 0.8) 100%)',
    borderRadius: '24px',
    backdropFilter: 'blur(10px)',
    boxShadow: `0 0 30px ${alpha(theme.palette.primary.main, 0.3)}`,
    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
    overflow: 'hidden',
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.3), transparent)',
    },
}))

const PricingCard = styled(Card)(({ theme }) => ({
    background: 'linear-gradient(145deg, rgba(26, 26, 26, 0.9) 0%, rgba(42, 42, 42, 0.8) 100%)',
    borderRadius: '24px',
    backdropFilter: 'blur(10px)',
    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.2)}`,
    },
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        borderRadius: '12px',
        backgroundColor: alpha(theme.palette.background.paper, 0.6),
        backdropFilter: 'blur(10px)',
        '& fieldset': {
            borderColor: alpha(theme.palette.primary.main, 0.2),
        },
        '&:hover fieldset': {
            borderColor: alpha(theme.palette.primary.main, 0.3),
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
        },
    },
}))

const FeatureCard = styled(Card)(({ theme }) => ({
    background: 'linear-gradient(145deg, rgba(26, 26, 26, 0.9) 0%, rgba(42, 42, 42, 0.8) 100%)',
    borderRadius: '16px',
    backdropFilter: 'blur(10px)',
    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: `0 10px 20px ${alpha(theme.palette.primary.main, 0.2)}`,
    },
}))

export default function Page() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ bgcolor: 'background.default', color: 'white' }}>
                {/* Navigation */}
                <AppBar position="fixed" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(10px)' }}>
                    <Toolbar>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <SmartToyIcon sx={{ color: 'primary.main', fontSize: 32 }} />
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
                                AI Chat
                            </Typography>
                        </Box>
                        <Stack direction="row" spacing={2} sx={{ ml: 'auto' }}>
                            <Button color="inherit">Features</Button>
                            <Button color="inherit">Pricing</Button>
                            <Button color="inherit">About</Button>
                            <Button variant="contained" color="primary">
                                Get Started
                            </Button>
                        </Stack>
                    </Toolbar>
                </AppBar>

                {/* Hero Section */}
                <Container maxWidth="lg" sx={{ pt: 15, pb: 10 }}>
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <Typography variant="h1" gutterBottom>
                                    Examine the Potential of{' '}
                                    <Box component="span" sx={{ color: 'primary.main', position: 'relative' }}>
                                        AI Chatting
                                        <Box
                                            component="span"
                                            sx={{
                                                position: 'absolute',
                                                bottom: -10,
                                                left: 0,
                                                right: 0,
                                                height: '2px',
                                                background: (theme) =>
                                                    `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
                                            }}
                                        />
                                    </Box>
                                </Typography>
                                <Typography variant="h6" sx={{ mb: 4, color: 'grey.400', lineHeight: 1.6 }}>
                                    Experience the next generation of AI-powered conversations. Smarter, faster, and more natural than ever
                                    before.
                                </Typography>
                                <StyledTextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="Try asking anything..."
                                    sx={{ mb: 3 }}
                                    InputProps={{
                                        endAdornment: (
                                            <Button variant="contained" color="primary" sx={{ borderRadius: '8px' }}>
                                                Ask AI
                                            </Button>
                                        ),
                                    }}
                                />
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                <GlowingCard>
                                    <CardContent sx={{ p: 0 }}>
                                        <Image
                                            src="/one.png"
                                            alt="Chat Interface Preview"
                                            width={200}
                                            height={200}
                                            style={{ width: '100%', height: '300px' }}
                                        />
                                    </CardContent>
                                </GlowingCard>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>

                {/* Features Section */}
                <Container maxWidth="lg" sx={{ py: 10 }}>
                    <Grid container spacing={4}>
                        {[
                            {
                                icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
                                title: 'Advanced AI',
                                description: 'Powered by cutting-edge language models for human-like conversations',
                                image: '/two.png',
                            },
                            {
                                icon: <ChatIcon sx={{ fontSize: 40 }} />,
                                title: 'Natural Conversations',
                                description: 'Engage in fluid, context-aware discussions that feel natural',
                                image: '/three.png',
                            },
                            {
                                icon: <RocketLaunchIcon sx={{ fontSize: 40 }} />,
                                title: 'Lightning Fast',
                                description: 'Get instant responses with our optimized infrastructure',
                                image: '/four.png',
                            },
                        ].map((feature, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <FeatureCard sx={{ height: '100%' }}>
                                        <CardContent>
                                            <Box sx={{ color: 'primary.main', mb: 2 }}>{feature.icon}</Box>
                                            <Typography variant="h5" gutterBottom>
                                                {feature.title}
                                            </Typography>
                                            <Typography color="text.secondary" sx={{ mb: 3 }}>
                                                {feature.description}
                                            </Typography>
                                            <Image
                                                src={feature.image}
                                                alt={feature.title}
                                                width={400}
                                                height={400}
                                                style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                                            />
                                        </CardContent>
                                    </FeatureCard>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                {/* Pricing Section */}
                <Container maxWidth="lg" sx={{ py: 10 }}>
                    <Typography variant="h2" align="center" gutterBottom>
                        Pricing plans for everyone
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
                        Choose the perfect plan for your needs
                    </Typography>
                    <Grid container spacing={4}>
                        {[
                            {
                                title: 'Free',
                                price: '$0',
                                description: 'Perfect for getting started',
                                features: ['5 AI conversations/day', 'Basic response time', 'Community support'],
                            },
                            {
                                title: 'Pro',
                                price: '$499',
                                description: 'For professional users',
                                features: ['Unlimited conversations', 'Priority response time', 'Premium support', 'Advanced features'],
                            },
                            {
                                title: 'Enterprise',
                                price: '$599',
                                description: 'For large organizations',
                                features: [
                                    'Custom solutions',
                                    'Dedicated support',
                                    'SLA guarantees',
                                    'Advanced analytics',
                                    'Custom integrations',
                                ],
                            },
                        ].map((plan, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <PricingCard>
                                        <CardContent sx={{ p: 4 }}>
                                            <Typography variant="h5" gutterBottom>
                                                {plan.title}
                                            </Typography>
                                            <Typography variant="h3" gutterBottom sx={{ color: 'primary.main' }}>
                                                {plan.price}
                                            </Typography>
                                            <Typography color="text.secondary" sx={{ mb: 3 }}>
                                                {plan.description}
                                            </Typography>
                                            <Stack spacing={2}>
                                                {plan.features.map((feature, featureIndex) => (
                                                    <Box key={featureIndex} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                        <CheckCircleIcon sx={{ color: 'primary.main' }} />
                                                        <Typography>{feature}</Typography>
                                                    </Box>
                                                ))}
                                            </Stack>
                                            <Button
                                                variant={index === 1 ? 'contained' : 'outlined'}
                                                color="primary"
                                                fullWidth
                                                sx={{ mt: 4 }}
                                            >
                                                {index === 2 ? 'Contact Sales' : 'Get Started'}
                                            </Button>
                                        </CardContent>
                                    </PricingCard>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                {/* Testimonials Section */}
                <Container maxWidth="lg" sx={{ py: 10 }}>
                    <Typography variant="h2" align="center" gutterBottom>
                        What our users say
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
                        Join thousands of satisfied users worldwide
                    </Typography>
                    <Grid container spacing={4}>
                        {[
                            {
                                name: 'Sarah Johnson',
                                role: 'Product Designer',
                                image: 'https://placehold.co/100x100/1a1a1a/9333EA?text=SJ',
                                comment:
                                    "The AI's understanding of context and nuance is remarkable. It's like chatting with a knowledgeable friend.",
                            },
                            {
                                name: 'Michael Chen',
                                role: 'Software Engineer',
                                image: 'https://placehold.co/100x100/1a1a1a/9333EA?text=MC',
                                comment:
                                    'The response speed and accuracy have significantly improved my workflow. A game-changer for developers.',
                            },
                            {
                                name: 'Emily Rodriguez',
                                role: 'Content Creator',
                                image: 'https://placehold.co/100x100/1a1a1a/9333EA?text=ER',
                                comment:
                                    'This AI chat platform has revolutionized how I brainstorm and develop content ideas. Absolutely love it!',
                            },
                        ].map((testimonial, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <Card sx={{ height: '100%', borderRadius: '16px' }}>
                                        <CardContent sx={{ p: 4 }}>
                                            <Rating value={5} readOnly sx={{ mb: 2 }} />
                                            <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                                                "{testimonial.comment}"
                                            </Typography>
                                            <Stack direction="row" spacing={2} alignItems="center">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    width={48}
                                                    height={48}
                                                    style={{ borderRadius: '50%' }}
                                                />
                                                <Box>
                                                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                                        {testimonial.name}
                                                    </Typography>
                                                    <Typography variant="caption" color="text.secondary">
                                                        {testimonial.role}
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                {/* Footer */}
                <Box sx={{ bgcolor: 'background.paper', mt: 8, py: 8 }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                    <SmartToyIcon sx={{ color: 'primary.main', fontSize: 32 }} />
                                    <Typography variant="h6">AI Chat</Typography>
                                </Box>
                                <Typography color="text.secondary" sx={{ mb: 2 }}>
                                    Advanced AI chatbot platform for seamless communication and enhanced productivity.
                                </Typography>
                                <Stack direction="row" spacing={2}>
                                    {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                                        <Button key={social} variant="outlined" size="small">
                                            {social}
                                        </Button>
                                    ))}
                                </Stack>
                            </Grid>
                            {[
                                {
                                    title: 'Product',
                                    links: ['Features', 'Pricing', 'API', 'Documentation'],
                                },
                                {
                                    title: 'Company',
                                    links: ['About', 'Blog', 'Careers', 'Press'],
                                },
                                {
                                    title: 'Resources',
                                    links: ['Community', 'Support', 'Terms', 'Privacy'],
                                },
                            ].map((section, index) => (
                                <Grid item xs={12} md={2} key={index}>
                                    <Typography variant="h6" gutterBottom>
                                        {section.title}
                                    </Typography>
                                    <Stack spacing={1}>
                                        {section.links.map((link) => (
                                            <Button key={link} color="inherit" sx={{ justifyContent: 'flex-start', px: 0 }}>
                                                {link}
                                            </Button>
                                        ))}
                                    </Stack>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    )
}