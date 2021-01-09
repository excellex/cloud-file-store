import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentDirAC } from '../../redux/actionCreators';

function FileList({file}) {
  const dispatch = useDispatch()
  const { currentDir} = useSelector(store => store.files)
  const { name, path, size, parent, _id } = file
  console.log( name, path, size, parent);
  return (
    <li>
      
      <span onClick={()=> dispatch(setCurrentDirAC(_id))}>{name}</span> <span>{path}</span> <span>{size}</span> <span>{parent}</span>
    </li>
  );
}

export default FileList;
