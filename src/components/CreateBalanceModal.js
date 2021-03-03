import './CreateBalanceModal.css';
import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Input } from '@material-ui/core';
import { UserContext } from './UserContext'




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


    useEffect(() => {

    })

    const handleCategory = (event) => {
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
            .then(data => { console.log(data) })
            .catch((err) => {
                console.error(err);
            })

    }

    return (
        <div className="ccm">

            <button onClick={() => setOpen(true)}>Add Balance</button>

            <Modal
                open={open}
                onClose={() => setOpen(false)} >

                <div style={modalStyle} className={classes.paper}>
                    <form className="ccm__createcategory">





                        <Input
                            placeholder="BalanceLabel"
                            type="text"
                            value={balanceLabel}
                            onChange={(e) => setBalanceLabel(e.target.value)} />



                        <Input
                            placeholder="Sum"
                            type="number"
                            value={sum}
                            onChange={(e) => setSum(e.target.value)} />

                        <Input
                            placeholder="Date"
                            type="text"
                            value={date}
                            onChange={(e) => setDate(e.target.value)} />

                        <button variant="contained" className="ccm__SubmitCategory" onClick={handleCategory} disableElevation>Submit</button>


                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default CreateBalanceModal;

