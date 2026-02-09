"use client";
import React, { useState } from "react";
import SectionHeading from "@/lib/UI/SectionHeading/SectionHeading";
import Styles from "./EnquiryForm.module.css";
import SectionButton from "@/lib/UI/SectionButton/SectionButton";
import ALL_URL from "@/app/apiConfig";

interface EnquiryFormProps {
  heading?: string;
  closeButton?: boolean;
  labelSize?:string;
  labelColor?:string;
  thankyoupage?:boolean;
  onClose: () => void; // Define the type of onClose as a function that returns void
}

interface Errors {
  fullname?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({
  heading = "Enquiry",
  closeButton = true,
  labelSize = "16px", // Default label size
  labelColor = "#000", // Default label color
  thankyoupage=false,
  onClose,
}) => {
  const [name, setName] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});

  const validateEmail = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };
  const validatePhone = (phone: string): boolean => {
    return /^[4-9](?!(\d)\1{9})\d{9}$/.test(phone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let validationErrors: Errors = {};

    if (!name.trim()) validationErrors.fullname = "Enter your Name";
    if (!phone.trim()) validationErrors.phone = "Phone number is required.";
    if (!validatePhone(phone)) validationErrors.phone = "Invalid phone number";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const formData = {
        Name: name,
        email: email,
        phone: phone,
        website:"curatedliving.in",
        websiteid:"6",
        message: message,
        FromTag: "WEBSITE",
        key:ALL_URL.websitekey
      };
      postDataToServer(formData);
      
      if(thankyoupage)
        {
          window.location.href = "./thankyou";
        }
        else
        {
          setIsSuccess(true);
        }
      //onClose();
    }
  };

  return (
    <>
      <div className={Styles.form}>
        <div className="row">
          <div className="col-10">
            {!isSuccess && <SectionHeading color={labelColor} bg="#FFFFFF" heading={heading} />}
          </div>
          {closeButton && (
            <div className="col-2 text-end">
              <a className={Styles.closeButton} onClick={onClose}>
                X
              </a>
            </div>
          )}
        </div>
        {!isSuccess ? (
          <>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label
                      htmlFor="fullName"
                      className={Styles["label-custom"]}
                      style={{
                        fontSize: labelSize,
                        color: labelColor,
                      }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${Styles.formControl}`}
                      id="fullName"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {errors.fullname && (
                      <small className="text-danger">{errors.fullname}</small>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="phone" className={Styles["label-custom"]}
                     style={{
                      fontSize: labelSize,
                      color: labelColor,
                    }}>
                      
                      Phone No.
                    </label>
                    <input
                      type="text"
                      className={`form-control ${Styles.formControl}`}
                      id="phone"
                      placeholder="Enter your Phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {errors.phone && (
                      <small className="text-danger">{errors.phone}</small>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="email" className={Styles["label-custom"]}  style={{
                        fontSize: labelSize,
                        color: labelColor,
                      }}>
                      {" Email Address (Optional)"}
                    </label>
                    <input
                      type="email"
                      className={`form-control ${Styles.formControl}`}
                      id="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                      <small className="text-danger">{errors.email}</small>
                    )}
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="query" className={Styles["label-custom"]}  style={{
                        fontSize: labelSize,
                        color: labelColor,
                      }}>
                      {"Your Query (Optional)"}
                    </label>
                    <textarea
                      className={`form-control ${Styles.formControl}`}
                      id="query"
                      placeholder="Enter your query"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    {errors.message && (
                      <small className="text-danger">{errors.message}</small>
                    )}
                  </div>
                </div>

                <div className="col-md-12 mt-4 text-end">
                  <SectionButton text="Submit" button={true} />
                </div>
              </div>
            </form>
          </>
        ) : (
          <>
            <h5>Thank you! Your details have been submitted successfully.</h5>
            <br></br>
            {closeButton&&(<a className={Styles.closeButton} onClick={onClose}>
              Close
            </a>)}
            
          </>
        )}
      </div>
    </>
  );
};
export default EnquiryForm;

const postDataToServer = async (data: any) => {
  try {
    const response = await fetch(ALL_URL.api_url + "enquiryForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
  } catch (error: any) {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
  }
};
