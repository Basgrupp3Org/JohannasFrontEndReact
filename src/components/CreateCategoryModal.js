import './CreateCategoryModal.css';
import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';
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

function CreateCategoryModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const user = useContext(UserContext)
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [maxSpent, setMaxSpent] = useState('')


  useEffect(() => {

  })

  const handleCategory = (event) => {
    event.preventDefault();

    let requestObject = {

      MaxSpent: maxSpent,
      Name: name,
      User: {
        Username: user,
      }




    }



    fetch('http://localhost:65424/api/Category/CreateCategory', {
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

    console.log(requestObject)
  }

  return (
    <div className="ccm">

      <Button onClick={() => setOpen(true)}>CreateCategory</Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)} >

        <div style={modalStyle} className={classes.paper}>
          <form className="ccm__createcategory">
            <center>


              <Input
                placeholder="Category Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} />



              <Input
                placeholder="Max To Spend"
                type="number"
                value={maxSpent}
                onChange={(e) => setMaxSpent(e.target.value)} />

              <Button onClick={handleCategory}>Submit Category</Button>

            </center>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default CreateCategoryModal;

