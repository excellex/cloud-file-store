import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { fetchFilesAC,  setParentDirAC } from '../../redux/actionCreators';
import FileList from './FileList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function InteractiveList() {
  const dispatch = useDispatch()
  const { files, currentDir, parentDir } = useSelector(store => store.files)
  const [currentDirName, setCurrentDirName] = React.useState(null)

  useEffect(() => {
    dispatch(fetchFilesAC(currentDir))
    dispatch(setParentDirAC(parentDir))
  }, [currentDir])
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div className={classes.root}>

      <Grid container spacing={2}>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            {currentDir && currentDirName}
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {currentDir && <FileList key={uuidv4()} file={{ name: '..', parent: parentDir }}  setCurrentDirName={setCurrentDirName} />}
              {files?.map(file => <FileList key={uuidv4()} file={file}  currentDir={currentDir} setCurrentDirName={setCurrentDirName} />)}
            </List>
          </div>
        </Grid>
      </Grid>

      {/* <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Avatar with text and icon
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
              )}
            </List>
          </div>
        </Grid> */}
      <Grid container spacing={4}>


      </Grid>

{/* 
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox checked={dense} onChange={(event) => setDense(event.target.checked)} />
          }
          label="Enable dense"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={secondary}
              onChange={(event) => setSecondary(event.target.checked)}
            />
          }
          label="Enable secondary text"
        />
      </FormGroup> */}
      
    </div>
  );
}

