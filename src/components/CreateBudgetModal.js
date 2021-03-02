import './CreateBudgetModal.css';
import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';
import { UserContext } from './UserContext'
import CreateBudgetModalHeader from '../images/CreateBudgetModalHeader.png'



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

function CreateBudgetModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const user = useContext(UserContext)
  const [open, setOpen] = useState(false);
  const [budgetName, setBudgetName] = useState('');
  const [budgetSum, setBudgetSum] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')



  useEffect(() => {

  })

  const handleCategory = (event) => {
    event.preventDefault();

    let requestObject = {

      BudgetSum: budgetSum,
      StartDate: startDate,
      EndDate: endDate,
      User: {
        Username: user,
      },
      BudgetName: budgetName




    }



    fetch('http://localhost:65424/api/Budget/CreateBudget/', {
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

      <Button onClick={() => setOpen(true)}>Create Budget</Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)} >

        <div style={modalStyle} className={classes.paper}>
          <form className="cbm__createBudget">
            <center>

              <img className="ImageHeader"
                src={CreateBudgetModalHeader}
                alt="" />
            </center>


              <Input
                placeholder="Budget Name"
                type="text"
                value={budgetName}
                onChange={(e) => setBudgetName(e.target.value)} />

            <Input
                placeholder="Budget Max To Spend"
                type="text"
                value={budgetSum}
                onChange={(e) => setBudgetSum(e.target.value)} />

                <Input
                placeholder="Budget Start Date"
                type="text"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)} />

                <Input
                placeholder="Budget End Date"
                type="text"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)} />



              

              <Button variant="contained" className="ccm__SubmitBudget" onClick={handleCategory} disableElevation>Submit</Button>

            
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default CreateBudgetModal;