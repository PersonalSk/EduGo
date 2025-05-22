import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

const Dynamicpage = () => {
    const { childItem } = useParams<{ childItem: string }>();
    const stateobj = useSelector((state:any) => state);


    console.log("state" ,stateobj);
    // const token = useSelector((state:any) => state.reducer.accesstoken);

    return (
      <div className="page-container">
        <h2>{childItem} Page</h2>
        <p>Content for {childItem} will be displayed here.</p>
        <p>role:{stateobj.reducer.dobj.role}</p>
        <p>email:{stateobj.reducer.dobj.email}</p>
        <p>token:{stateobj.reducer.dobj.token}</p>
      </div>
    );
}

export default Dynamicpage