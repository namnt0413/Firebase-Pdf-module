import React, { useState, useEffect } from 'react'
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";
import {getDownloadURL, ref} from 'firebase/storage'
import {storage} from '../firebaseConfig'

function View() {

  const [modal, setModal]=useState(false);
  const [resume, setResume]=useState(null);

  useEffect(()=>{
    getDownloadURL(ref(storage,'CV/testcv.pdf')).then((url)=>{
      setResume(url);
    })
  },[])

  return (
    <div className="container">
      <br></br>

      <Button setModal={setModal}/>

      {modal===true&&(
        <Modal setModal={setModal} resume={resume}/>
      )}

    </div>
  );
}

export default View;