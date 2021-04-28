import '../styling/CreateBalanceModal.css';
import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Input } from '@material-ui/core';
import { UserContext } from '../contexts/UserContext'

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

function CreateBalanceModal() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const user = useContext(UserContext)
    const [open, setOpen] = useState(false);
    const [sum, setSum] = useState('');
    const [date, setDate] = useState('')
    const [balanceLabel, setBalanceLabel] = useState('')
    const [summary, setSummary] = useState("");

    useEffect(() => {

    })

    const afterUpload = () => {
        setBalanceLabel('')
        setSum('')
        setDate('')
        setOpen(false)
        window.alert('Your income has succesfully been uploaded!')

    }

    const handleBalance = (event) => {
        event.preventDefault();

        let requestObject = {

            Sum: sum,
            Date: date,
            BalanceLabel: balanceLabel,
            User: {
                Username: user,
            }
        }

        fetch('http://localhost:65424/api/Balance/SetBalanceByUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestObject)
        })
            .then(data => data.json())
            .then(afterUpload())
            .catch((err) => {
                console.error(err);
            })
    }

    const setBalanceLabel1 = (e) => {
        if (purchaseRegex.exec(e.target.value)) {
            setSummary("");
            setBalanceLabel(e.target.value);
        } else {
            setSummary("no numbers allowed");
        }
    };

    const purchaseRegex = new RegExp("^[A-ZÅÄÖÈa-zåäöé ]{0,29}$");

    return (


        <div className="ccm">

            <button onClick={() => setOpen(true)}>Add Balance</button>

            <Modal
                open={open}
                onClose={() => setOpen(false)} >

                <div style={modalStyle} className={classes.paper}>
                    <form className="cbm__createBalance">
                        <center>
                            <h2 className="cbm__balancetext">
                                Add Balance
                            </h2>
                        </center>
                        {summary}
                        <input
                            required
                            placeholder="BalanceLabel"
                            type="text"
                            value={balanceLabel}
                            // onChange={(e) => setBalanceLabel(e.target.value)}
                            onChange={setBalanceLabel1}
                        />

                        <Input
                            required
                            placeholder="Sum"
                            type="number"
                            value={sum}
                            onChange={(e) => setSum(e.target.value)} />

                        <Input
                            required
                            placeholder="Date"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)} />

                        <button variant="contained" className="cbm__SubmitBalance" onClick={handleBalance} disableElevation>Submit</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default CreateBalanceModal;
