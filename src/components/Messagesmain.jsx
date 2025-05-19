import React, { useEffect, useState } from "react";
import Message from "./Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../redux/appSlice";

const Messagesmain = () => {
  const { emails, searchText } = useSelector((state) => state.appSlice);

  const [tempemail, setTempEmail]= useState(emails)
  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(setEmails(allEmails));
    });

    //cleanup-------
    return () => unsubscribe();
  }, []);

  

  useEffect(()=>{

    const filterdEmail = emails.filter((email)=>{
      return email?.to?.toLowerCase().includes(searchText) ||email?.subject?.toLowerCase().includes(searchText) ||email?.message?.toLowerCase().includes(searchText)
    })
    setTempEmail(filterdEmail)
  },[emails,searchText])

  return (
    <div>{tempemail && tempemail?.map((email) => <Message email={email} />)}</div>
  );
};

export default Messagesmain;
