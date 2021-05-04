import '../styling/CreateCategoryModal.css';
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

function CreateCategoryModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [summary, setSummary] = useState("");
  const user = useContext(UserContext)
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [maxSpent, setMaxSpent] = useState('')


  const handleCategory = (event) => {
    event.preventDefault();

    let requestObject = {

      MaxSpent: maxSpent,
      Name: name,
      User: {
        Username: user,
      }
    }

    fetch('http://localhost:65424/api/Category', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestObject)
    })

      .then(data => {
        setOpen(false)
        props.onComplete && props.onComplete()
      })
      .catch((err) => {
        console.error(err);
      })
  }
  const setCategoryName1 = (e) => {
    if (CreateCategoryRegex.exec(e.target.value)) {
      setSummary("")
      setName(e.target.value);
    } else {
      setSummary("no numbers allowed");
    }
  };

  const CreateCategoryRegex = new RegExp("^[A-ZÅÄÖÈa-zåäöé ]{0,29}$");

  return (
    <div className="ccm">

      <button onClick={() => setOpen(true)}>Create Category</button>

      <Modal
        open={open}
        onClose={() => setOpen(false)} >

        <div style={modalStyle} className={classes.paper}>
          <form className="ccm__createcategory">
            <center>
              <h2 className="ccm__categorytext">
                Create Category
              </h2>
            </center>
            {summary}
            <input
              placeholder="Category Name"
              type="text"
              value={name}
              onChange={setCategoryName1}
              required

            //onChange={(e) => setName(e.target.value)} 
            />

            <input
              placeholder="Max To Spend"
              type="number"
              value={maxSpent}
              onChange={(e) => setMaxSpent(e.target.value)}
              onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
            />

            <button variant="contained" className="ccm__SubmitCategory" onClick={handleCategory} disableElevation>Submit</button>

          </form>
        </div>
      </Modal>
    </div>
  )
}

export default CreateCategoryModal;
