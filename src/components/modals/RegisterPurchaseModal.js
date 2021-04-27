import '../styling/RegisterPurchaseModal.css';
import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Input } from '@material-ui/core';
import { UserContext } from '../contexts/UserContext';

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
    const [budgets, setBudgets] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');



    useEffect(() => {

        fetch('http://localhost:65424/api/Budget/GetBudgetList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(data => data.json())
            .then(data => { setBudgets(data) })
            .catch((err) => {
                console.error(err);
            })






    }, [])

    const handlePurchase = (event) => {
        event.preventDefault();
        console.log(selectedCategory)
        let requestObject = {

            Price: price,
            PurchaseName: purchaseName,
            Date: date,
            User: {
                Username: user,
            },
            Category: {
                Id: selectedCategory
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

    const handleBudgetChange = (e) => {
        e.preventDefault();


        let requestObject = {

            Price: price,
            PurchaseName: purchaseName,
            Date: date,
            User: {
                Username: user,
            },
            Budget: {
                Id: e.target.value
            }
        }

        fetch('http://localhost:65424/api/Category/GetCategoryForPurchase', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestObject)
        })
            .then(data => data.json())
            .then(data => { setCategories(data) })
            .catch((err) => {
                console.error(err);
            })
    }



    return (
        <div className="rpm">
            <button onClick={() => setOpen(true)}>Register Purchase</button>

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

                    <select
                            onChange={handleBudgetChange}>
                            <option selected disabled hidden>--Choose Budget--</option>
                            {budgets.map(x => <option value={x.Id}>{x.BudgetName}</option>)}
                        </select>
                        <select
                            onChange={(e) => setSelectedCategory(e.target.value)}>
                            <option selected disabled hidden>--Choose Category--</option>
                            {categories.length ? categories.map(x => <option value={x.Id}>{x.Name}</option>) : undefined}
                        </select>

                        <button variant="contained" className="rpm__submitpurchase" onClick={handlePurchase} disableElevation>Submit</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default RegisterPurchaseModal
