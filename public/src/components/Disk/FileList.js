import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentDirAC, setParentDirAC } from '../../redux/actionCreators';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

function FileList(props) {
  const { file, setCurrentDirName, currentDir, parent } = props
  const { files,  parentDir } = useSelector(store => store.files)

  const dispatch = useDispatch()
  const { name, path, size } = file
  console.log(parent);

  let _id = file._id
  if (name === '..') {
    _id = parentDir
  } 

  
  const setCurrentDirHandler = () => {
    // setParent(prev => {
      //   // const arr = prev.slice().push(currentDir)
      //   console.log(prev);
      // });
      setCurrentDirName(name || 'Home')
      dispatch(setCurrentDirAC(_id))
      dispatch(setParentDirAC(currentDir))
  }
  return (
    <>
      <ListItem onClick={setCurrentDirHandler}>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={false ? 'Secondary text' : null}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>,
    </>

  );
}


export default FileList;
