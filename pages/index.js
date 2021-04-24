import { Box, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import * as React from 'react';
import Review from '../components/Review';

export default function Index() {
    return (
        <Container maxWidth="sm" sx={{ display: 'grid', placeContent: 'center', height: '100vh' }}>
            <Typography variant="h2" fontWeight="bold" fontSize="2.5rem" textAlign='center'>
                Our Reviews
            </Typography>
            <Box width={80} mx="auto" backgroundColor="dodgerblue" height={4} />
            <Review />
        </Container>
    );
}
