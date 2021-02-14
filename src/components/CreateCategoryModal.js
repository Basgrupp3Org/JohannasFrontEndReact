import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';
import {UserContext} from './UserContext'


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

function CreateCategoryModal(){

    const user = useContext(UserContext)
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [maxSpent, setMaxSpent] = useState('')
    
    useEffect(() => {
        
     }) 

    const handleCategory = (event) => {
        event.peventDefault();

        let requestObject = {
            : this.state.Username,
            : this.state.Password,
              
          }
      
         
      
          fetch('http://localhost:65424/api/User/Login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(requestObject)
          })
          .then(data => data.json())
          .then(data =>  { this.HandleLoginFailOrSuccess(data)}) 
          .catch((err) => {
              console.error(err);
          })
      
          console.log(requestObject)
    } 

     return (
         <div className="ccm">

             <Modal open={open}
                onClose={() => setOpen(false)} 
                
                />
                <div>
                    <form className="ccm__createcategory">
                        <center>

                            <Input
                            placeholder="CategoryName"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />

                        

                            <Input
                            placeholder="MaxSpent"
                            type="number"
                            value={maxSpent}
                            onChange={(e) => setMaxSpent(e.target.value)} />

                            <Button onClick={handleCategory}/>
                           

                        </center>
                    </form>
                </div>
         </div>
     )
}

export default CreateCategoryModal;