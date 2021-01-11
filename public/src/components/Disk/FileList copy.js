import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentDirAC } from '../../redux/actionCreators';

function FileList({file}) {
  
  const dispatch = useDispatch()
  const { name, path, size,  _id } = file
  return (
    <li>      
      <span onClick={()=> dispatch(setCurrentDirAC(_id))}>{name}</span> <span>{path}</span> <span>{size}</span>
    </li>
  );
}


export default FileList;
