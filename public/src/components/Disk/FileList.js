import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentDirAC, setParentDirAC } from '../../redux/actionCreators';

import { Folder, Delete } from '@material-ui/icons/';
import {
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Avatar,
  IconButton
} from '@material-ui/core';


export default function FileList(props) {
  const dispatch = useDispatch()
  const { file,
    setCurrentDirName,
    currentDir,
  } = props
  const { files, parentDir } = useSelector(store => store.files)

  const { name, path, size, date } = file

  let _id
  name === '..' ? _id = parentDir : _id = file._id

  const setCurrentDirHandler = () => {

    setCurrentDirName(name)
    dispatch(setCurrentDirAC(_id))
    dispatch(setParentDirAC(currentDir))

  }

  return (
    <>
      <ListItem onClick={setCurrentDirHandler}>
        <ListItemAvatar>
          <Avatar>
            <Folder />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={false ? 'Secondary text' : null}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>,
    </>

  );
}
