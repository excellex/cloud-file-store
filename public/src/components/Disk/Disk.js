import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilesAC, setCurrentDirAC } from '../../redux/actionCreators';
import FileList from './FileList';

function Disk(props) {
  const dispatch = useDispatch()
  const { files, currentDir } = useSelector(store => store.files)
  useEffect(() => {
    dispatch(fetchFilesAC(currentDir))
  }, [currentDir])
  return (
    <div>
      {currentDir && <p onClick={() => dispatch(setCurrentDirAC(null))}>Up..</p>}
      <ul>
        {files?.map(file => <FileList key={file._id} file={file} />)}
      </ul>
    </div>
  );
}

export default Disk;
