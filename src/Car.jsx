import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Car = (props) => {

const [open, setOpen] = React.useState(false);
const [info, setInfo] = React.useState("");

const handleClickOpen = (description) => {
    setInfo(description)
    setOpen(true);
  };

const handleClose = () => {
    setOpen(false);
  };

  
  
const columns = [
  { field: 'year', headerName: 'Year', width: 100 },
  { field: 'trim', headerName: 'Trim', width: 125 },
  { field: 'engine', headerName: 'Engine', width: 100 },
  { field: 'towing', headerName: 'Towing Capacity', width: 150 },
  { field: 'seats', headerName: 'Seats', width: 75 },
  { field: 'length', headerName: 'Length', width: 75 },
  { field: 'width', headerName: 'Width', width: 75 },
  { field: 'height', headerName: 'Height', width: 75 },
  { field: 'description', headerName: 'Description', width: 450 },
  { field: 'MSRP', headerName: 'Starting MSRP', width: 150 },
  { field: 'button', headerName: 'Button', width: 150, 
  renderCell: (params) => (
      <strong>
        <Button
          variant="contained"
          onClick={() => handleClickOpen(params.row.info)}
        >
        {params.row.trim}
        </Button>
      </strong>
    )
  }
  ];
	return (
		<div>
      <h1>
        {props.car.make} {props.car.model}
      </h1>
      <div style={{ height: 400, width: '100%' }}>
<DataGrid
        rows={props.car.versions}
        columns={columns}
        hideFooter
      />
      </div>
  <Button variant="contained" onClick={props.handleClick}>
    Remove
  </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Vehicle Details"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {info}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
		</div>
	);
};

export default Car;