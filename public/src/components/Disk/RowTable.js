import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { FileCopy, Folder, InsertDriveFile } from '@material-ui/icons';
import { fetchFilesAC, setCurrentDirAC, setHistoryAC, setParentDirAC, updateHistoryAC } from '../../redux/actionCreators';
import CellTable from './CellTable';


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

function RowTable({ props }) {
  const dispatch = useDispatch()
  const { files, currentDir, parentDir, history } = useSelector(store => store.files)
  const { file, properties, setCurrentDirName } = props
  const { name } = file
  const pathhistory = history?.slice()
  let _id
  name === '..' ? _id = parentDir : _id = file._id

  const setCurrentDirHandler = (e) => {
    setCurrentDirName(name)
    if (name === '..') {
      dispatch(setCurrentDirAC(pathhistory && pathhistory?.splice(-1,1)) || null)
      // dispatch(updateHistoryAC(pathhistory || []))

    } else {
      dispatch(setHistoryAC(currentDir))
      dispatch(setCurrentDirAC(_id))
    }
    // dispatch(setParentDirAC(currentDir))

  }

  return (
    <>
    {/* {history.map(el=> <span>{el}; </span>)} */}
      <TableRow hover role="checkbox" tabIndex={-1} key={uuidv4()} onClick={setCurrentDirHandler}>
        {properties?.map((property) => {
          let value = file[property];
          if (property === 'date') {
            value = value?.slice(0, 10)
          }
          return (
            <>
              <CellTable key={uuidv4()} props={{ value, property }} />
              {/* <TableCell key={property + ''} align={'left'}> */}
              {/* { property === 'type' ? bringing(value) : value} */}
              {/* {property.format && typeof value === 'number' ? property.format(value) : value} */}
              {/* </TableCell> */}
            </>
          );
        })}
      </TableRow>
    </>
  );
}

export default RowTable;
