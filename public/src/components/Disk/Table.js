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
import { fetchFilesAC, setCurrentDirAC, setParentDirAC } from '../../redux/actionCreators';
import RowTable from './RowTable';


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const dispatch = useDispatch()

  const { files, properties, currentDir, parentDir } = useSelector(store => store.files)
  const [currentDirName, setCurrentDirName] = React.useState(null)

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  useEffect(() => {
    dispatch(fetchFilesAC(currentDir))
    dispatch(setParentDirAC(parentDir))
  }, [currentDir])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const bringing = (value) => {
    switch (value) {
      case 'dir':
        return <Folder />


      default:
        return <InsertDriveFile />
    }
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow />
            <TableRow>
              {properties?.map((property) => (
                <TableCell
                  key={uuidv4()}
                // align={property.align}
                // style={{ minWidth: property.minWidth }}
                >
                  {property}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentDir && <RowTable key={uuidv4()} props={{ file: { name: '..', _id: null }, properties, currentDir, setCurrentDirName }} />}
            {files.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((file) => {
              return (
                // <></>
                <RowTable key={uuidv4()} props={{ file, properties, currentDir, setCurrentDirName }} />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[3, 10, 25, 100]}
        component="div"
        count={files.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
