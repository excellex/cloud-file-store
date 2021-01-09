import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilesAC } from '../../redux/actionCreators';
import File from './File';

function Disk(props) {
  const dispatch = useDispatch()
  const currentDir = useSelector(store => store.files.currentDir)

  useEffect(() => {
    dispatch(fetchFilesAC(currentDir))
  }, [currentDir])
  return (
    <div>
      
      <File />
    </div>
  );
}

export default Disk;
