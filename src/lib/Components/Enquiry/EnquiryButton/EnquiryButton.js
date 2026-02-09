"use client";
import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal"; // Adjust the path as necessary
import EnquiryForm from "../EnquiryForm/EnquiryForm";
import SectionButton from "@/lib/UI/SectionButton/SectionButton";
import Styles from "./EnquiryButton.module.css";

const EnquiryButton = ({ autoDuration = 0, closeButton=true, thankyoupage = false }) => {
  const [modalShow, setModalShow] = useState(false);
  const [pageName, setPageName] = useState("");
  useEffect(() => {
    // Set page pathname when component mounts
    setPageName(window.location.pathname);
  }, []);
  const handleOpenModal = () => {
    setModalShow(true);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  const handleCloseModal = () => {
    setModalShow(false);
    document.body.style.overflow = "unset"; // Disable scrolling
  };

  return (
    <>
      {pageName != "/contact-us" && (
        <div className={Styles.floatButton}>
          <SectionButton
            button={true}
            ButtonTrigger={handleOpenModal}
            text="ENQUIRY"
            auto={true}
            css="button"
            autoDuration={autoDuration}
          ></SectionButton>
        </div>
      )}
      <Modal show={modalShow} onClose={handleCloseModal}>
        <EnquiryForm onClose={handleCloseModal} closeButton={closeButton} thankyoupage={thankyoupage}></EnquiryForm>
      </Modal>
    </>
  );
};

export default EnquiryButton;
