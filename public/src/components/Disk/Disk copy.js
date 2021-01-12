import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilesAC, setCurrentDirAC } from '../../redux/actionCreators';
import FileList from './FileList';

function Disk() {
  const dispatch = useDispatch()
  const { files, currentDir } = useSelector(store => store.files)
  useEffect(() => {
    dispatch(fetchFilesAC(currentDir))
  }, [currentDir])
  return (
    <div>
      <ul>
        {currentDir && <li onClick={() => dispatch(setCurrentDirAC(null))}>Up..</li>}
        {files?.map(file => <FileList key={uuidv4()} file={file} />)}
      </ul>
    </div>
  );
}

export default Disk;
