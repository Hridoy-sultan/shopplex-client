import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './giftItem.css'
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});


const GiftItem = (props) => {
    const classes = useStyles();
    const { name, price, url } = props.gift;
    const handleButton = props.handleButton;

    return (

        <div className=' m-5 itemContinar'>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className='w-100'
                        className={classes.media}
                        image={url}
                        title="Contemplative Reptile"
                    />
                    <CardContent>

                        <Typography variant="body2" color="textSecondary" component="p">
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        ${price}
                    </Button>
                    <Button size="small" color="primary">
                        <button className='btn btn-primary' onClick={handleButton} >Shop Now</button>
                    </Button>
                </CardActions>


                {/* 
            <div>

                <img src={url} alt="" />
                <h2>{name}</h2>
                <h2>{price}</h2>
                <button onClick={handleButton} >Shop Now</button>
            </div> */}
            </Card>
        </div>



    );
};

export default GiftItem;