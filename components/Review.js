/* eslint-disable prefer-const */
import { Avatar, Box, ButtonBase, makeStyles, Paper, Typography } from '@material-ui/core';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from '../data';

const useStyles = makeStyles((theme) => ({
    quoteIcon: {
        color: 'white',
    },
}));

const Review = () => {
    const classes = useStyles();
    const [index, setIndex] = useState(0);
    const { name, job, text, image } = people[index];

    const checkIndex = (idx) => {
        if (idx > people.length - 1) {
            return 0;
        }
        if (idx < 0) {
            return people.length - 1;
        }
        return idx;
    };

    const handlePrevBtn = () => {
        setIndex((prevIndex) => {
            let newIndex = prevIndex - 1;
            return checkIndex(newIndex);
        });
    };

    const handleNextBtn = () => {
        setIndex((prevIndex) => {
            let newIndex = prevIndex + 1;
            return checkIndex(newIndex);
        });
    };
    const handleRandomBtn = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkIndex(randomNumber));
    };
    return (
        <Paper
            elevation={5}
            sx={{ mt: 2, position: 'relative', mx: 'auto', textAlign: 'center', px: 3, pb: 3 }}
        >
            <Box
                sx={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '100%',
                    background: 'dodgerblue',
                    mx: 'auto',
                    my: 2,
                }}
            />
            <Avatar
                src={image}
                alt={name}
                sx={{
                    height: '100px',
                    width: '100px',
                    mx: 'auto',
                    my: 2,
                    position: 'absolute',
                    top: '3px',
                    left: '218px',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: '28px',
                    left: '217px',
                    background: 'dodgerblue',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <FaQuoteRight className={classes.quoteIcon} />
            </Box>
            <Typography
                variant="h4"
                fontSize="1rem"
                fontWeight="bold"
                gutterBottom
                sx={{ textTransform: 'capitalize' }}
            >
                {name}
            </Typography>
            <Typography marginBottom sx={{ textTransform: 'uppercase', color: 'dodgerblue' }}>
                {job}
            </Typography>
            <Typography>{text}</Typography>
            <Box mb={1}>
                <ButtonBase onClick={handlePrevBtn} disableRipple>
                    <FaChevronLeft />
                </ButtonBase>
                <Box component="span" mx={1} />
                <ButtonBase onClick={handleNextBtn} disableRipple>
                    <FaChevronRight />
                </ButtonBase>
            </Box>
            <ButtonBase
                onClick={handleRandomBtn}
                sx={{
                    background: '#eef',
                    transition: '0.2s',
                    ':hover': {
                        background: '#A4DDED',
                        color: 'black',
                    },
                    px: 1,
                    py: 0.5,
                    color: 'cornflowerblue',
                }}
            >
                Surprise Me
            </ButtonBase>
        </Paper>
    );
};

export default Review;
