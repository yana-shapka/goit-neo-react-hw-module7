import React from 'react';
import {ClipLoader} from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <ClipLoader color="black" size={50} />
      <p>Loading contacts...</p>
    </div>
  );
};

export default Loader;
