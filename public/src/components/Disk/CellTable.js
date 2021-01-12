import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { makeStyles } from '@material-ui/core/styles';

import TableCell from '@material-ui/core/TableCell';

import { useDispatch, useSelector } from 'react-redux';
import { FileCopy, Folder, InsertDriveFile } from '@material-ui/icons';
import { fetchFilesAC, setCurrentDirAC, setParentDirAC } from '../../redux/actionCreators';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const bringing = (value) => {
  switch (value) {
    case 'dir':
      return <Folder />

    
    default:
      return <InsertDriveFile />
  }
}

function CellTable({props}) {
  const { property, value } = props
  return (
    <>
      <TableCell key={uuidv4()} align={'left'}>
        {property === 'type' ? bringing(value) : value}
      </TableCell>
    </>
  );
}

export default CellTable;
