// Copyright (c) 2020 FHNW, Switzerland. All rights reserved.
// Licensed under MIT License. Initiated by HB9RYZ and HB9CQK.
import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";

const centerStyle = {
  textAlign: 'center'
};

const Loader = () => 
    <div style={centerStyle}>
      <CircularProgress color="primary" size={200}/>;
    </div>;


export default Loader;
