import './RegisterPurchaseModal.css';
import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';
import { UserContext } from './UserContext';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 800,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),

    },
}));

function RegisterPurchaseModal() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const user = useContext(UserContext)
    const [open, setOpen] = useState(false);
    const [price, setPrice] = useState('');
    const [purchaseName, setPurchaseName] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {

    })

    const handlePurchase = (event) => {
        event.preventDefault();

        let requestObject = {

            Price: price,
            PurchaseName: purchaseName,
            Date: date,
            User: {
                Username: user,
            }
        }

        fetch('http://localhost:65424/api/Purchase/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestObject)
        })
            .then(data => data.json())
            .then(data => { console.log(data) })
            .catch((err) => {
                console.error(err);
            })
    }

    return (
        <div className="rpm">
            <Button onClick={() => setOpen(true)}>Register Purchase</Button>

            <Modal
                open={open}
                onClose={() => setOpen(false)}>
                <div style={modalStyle} className={classes.paper}>
                    <form className="rpm__registerpurchase">
                        <center>
                            <h2 className="rpm__purchasetext">
                                Register Purchase
                            </h2>
                        </center>
                        <Input
                            placeholder="Purchase Name"
                            type="text"
                            value={purchaseName}
                            onChange={(e) => setPurchaseName(e.target.value)} />

                        <Input
                            placeholder="Price"
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)} />

                        <Input
                            placeholder="Date"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)} />

                        <Button variant="contained" className="rpm__submitpurchase" onClick={handlePurchase} disableElevation>Submit</Button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default RegisterPurchaseModal
