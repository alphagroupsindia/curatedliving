"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./ChatEngine.module.css";
import ChatOptionButton from "../ChatOptionButton/ChatOptionButton";
import useTypingEffect from "@/lib/Hooks/useTypingEffect/useTypingEffect";
import ChatTextBox from "../ChatTextBox/ChatTextBox";
import ChatTypingAnimation from "../ChatTypingAnimation/ChatTypingAnimation";
import ALL_URL from "@/app/apiConfig";
import WhatssappButton from "@/lib/UI/WhatsappButton/WhatsappButton";

const ChatEngine = () => {
  const [textBoxON, setTextBoxON] = useState("");
  const [typing, setTyping] = useState(false);
  const [whatsapp, setWhatsapp] = useState(false);
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agentOrg, setAgentOrg] = useState("");

  function playSound(file) {
    const audio = new Audio(`/sounds/${file}.mp3`);
    audio.play();
  }
  const handleTextBoxSend = (value) => {
    const newLogA13 = {
      answer: value,
    };
    setChatLogs((prevLogs) => [...prevLogs, newLogA13]);
    playSound("soundc");
    switch (textBoxON) {
      case "AGENTORG":
        setAgentOrg(value);
        handleNameON();
        break;
      case "NAME":
        setName(value);
        handlePhoneON();
        break;
      case "PHONE":
        setPhone(value);
        handleEmailON();
        break;
      case "EMAIL":
        setEmail(value);
        switch (type) {
          case "SALE":
            setTextBoxON("");
            goToTransition("", "A18");
            break;

          default:
            handleEndChat();
        }
        //handleThankON();
        break;
    }
  };

  const askQuestion = (qtxt,sty) => {
    setTyping(true); // Set typing to true before the delay

    setTimeout(() => {
      const newLogA13 = {
        question: qtxt,
        style: sty,
      };
      playSound("soundq");
      setChatLogs((prevLogs) => [...prevLogs, newLogA13]);
      setTyping(false);
    }, 2400); //2400
  };
  const askOptions = (options) => {
    setOptions({});
    setTimeout(() => {
      setOptions(options);
    }, 2700); // 2700
  };

  const handleNameON = () => {
    askQuestion("May I have your First and Last Name ?","reg");
    setTimeout(() => {
      setTextBoxON("NAME");
    }, 2850); // Delay of 5 seconds (5000 milliseconds)
  };
  const handlePhoneON = () => {
    askQuestion("Please share your phone number","reg");
    setTimeout(() => {
      setTextBoxON("PHONE");
    }, 2850); // Delay of 5 seconds (5000 milliseconds)
  };
  const handleEmailON = () => {
    askQuestion("Please share your e-mail id ","reg");
    setTimeout(() => {
      setTextBoxON("EMAIL");
    }, 2850); // Delay of 5 seconds (5000 milliseconds)
  };
  const handleAgentOrgName = () => {
    askQuestion("May I have your Organization name ? ","reg");
    setTimeout(() => {
      setTextBoxON("AGENTORG");
    }, 2850); // Delay of 5 seconds (5000 milliseconds)
  };

  const handleMessageON = () => {
    askQuestion("May I have your Message ","reg");
    setTimeout(() => {
      setTextBoxON("MESSAGE");
    }, 2850); // Delay of 5 seconds (5000 milliseconds)
  };


  const [options, setOptions] = useState({
    options: [
      { option: "Home Interior", handle: "RES", settings: "OPT" },
      { option: "Office Interior", handle: "COM", settings: "OPT" },
    ],
  });
  const [chatLogs, setChatLogs] = useState([
    {
      question: "Select one of the options below that specifies your query",
      answer: "",
    },
  ]);
  const welcomeMessage = "Hi! 👋 Welcome to Curated Living.";
  



  const handleButtonClick = (option, handle,settings) => {
    playSound("soundc");
    goToTransition(option, handle,settings);
  };
  const [chatStack, setChatStack] = useState(["A0"]);
  const goToTransition = (option, handle,settings) => {
    console.log(settings);
    if (option&&settings==="OPT") {
      const newLog = { answer: option };
      setChatLogs([...chatLogs, newLog]);
    }
    setChatStack([...chatStack, handle]);
    switch (handle) {
      case "RES":
        askQuestion("Please select your preference.","reg");
        askOptions({
          options: [
            { option: "New Interior", handle: "A1", settings: "OPT" },
            { option: "Renovation", handle: "A2", settings: "OPT" },
          ],
        });
        break;
      case "COM":
        askQuestion("Please Specify the Requirement.","reg");
        setOptions({});
        setTextBoxON("AGENTORG");
        setType("SALE");
        break;
      case "A1":
      case "A2":
        askQuestion("Please select your preference.","reg");
        askOptions({
          options: [
            { option: "Complete Interior", handle: "A3", settings: "OPT" },
            { option: "Specific Requirement", handle: "A4", settings: "OPT" },
          ],
        });
        break;
      case "A3":
        askQuestion("Please Specify the number of Rooms.","reg");
        askOptions({
          options: [
            { option: "1 BHK", handle: "A5", settings: "OPT" },
            { option: "2 BHK", handle: "A5", settings: "OPT" },
            { option: "3 BHK", handle: "A5", settings: "OPT" },
            { option: "4 BHK", handle: "A5", settings: "OPT" },
            { option: "5 BHK+", handle: "A5", settings: "OPT" },
          ],
        });
        break;
      case "A4":
        askQuestion("Select the Option","reg");
        askOptions({
          options: [
            { option: "Kitchen", handle: "A6", settings: "OPT" },
            { option: "Wardrobes", handle: "A6", settings: "OPT" },
            { option: "TV Unit", handle: "A6", settings: "OPT" },
            { option: "Study Unit", handle: "A6", settings: "OPT" },
            { option: "Vanity", handle: "A6", settings: "OPT" },
            { option: "Storage", handle: "A6", settings: "OPT" },
            { option: "Others", handle: "A6", settings: "OPT" },
          ],
        });
        break;

      case "A5":
      case "A6": //Declare Sale and Ask for Details
        const newLogA8 = {
          question: "Thank you for sharing your pereferences",
        };
        setChatLogs((prevLogs) => [...prevLogs, newLogA8]);
        setOptions({});
        handleNameON();
        setType("SALE");
        break;
      case "A13": //End Capture
      case "A14":
      case "A15":
      case "A16":
        askQuestion("Thank you for sharing your pereferences","reg");
        setOptions({});
        handleNameON();
        break;
      case "A18":
        askQuestion("Would you like our sales expert to call you?","reg");
        askOptions({
          options: [
            { option: "Yes", handle: "A19", settings: "OPT" },
            { option: "No", handle: "A20", settings: "OPT" },
          ],
        });

        break;
      case "A19":
        askQuestion("Great !!! Please choose a preferred time to call you","reg");
        askOptions({
          options: [
            { option: "9AM-10AM", handle: "A21", settings: "OPT" },
            { option: "10AM-11AM", handle: "A22", settings: "OPT" },
            { option: "11AM-12PM", handle: "A23", settings: "OPT" },
            { option: "2PM-3PM", handle: "A24", settings: "OPT" },
            { option: "3PM-4PM", handle: "A25", settings: "OPT" },
            { option: "4PM-5PM", handle: "A26", settings: "OPT" },
            { option: "5PM-6PM", handle: "A27", settings: "OPT" },
            { option: "6PM-7PM", handle: "A27", settings: "OPT" },
          ],
        });
        break;

      case "A20":
        askQuestion("Preferred Mode of communication","reg");
        askOptions({
          options: [
            { option: "Email", handle: "A28", settings: "OPT" },
            { option: "Whatsapp", handle: "A29", settings: "OPT" },
            { option: "Text", handle: "A30", settings: "OPT" },
          ],
        });
        break;
      case "A21":
      case "A22":
      case "A23":
      case "A24":
      case "A25":
      case "A26":
      case "A27":
      case "A28":
      case "A29":
      case "A30":
        handleEndChat(option);
        break;
      case "WHATSAPP":
        window.open(
          "https://api.whatsapp.com/send/?phone=+919740828555&text=Hello, I am a visitor from your website and would like to chat with you.&type=phone_number&app_absent=0",
          ""
        );
        break;
      default:
        setChatLogs((prevLogs) => [...prevLogs, "Thank you"]);
        break;
    }
  };

  const handleEndChat = (option) => {
    askQuestion("One of our experts will contact you at your selected convenience","reg");
    askQuestion("Thank you, It was a pleasure interacting with you. Wishing you a wonderful day ","reg");
    askQuestion("Connect us on live chat with our dedicated sales expert for more queries","italic");
    askOptions({
      options: [
        {
          option: "Click here to connect to WhatsApp",
          handle: "WHATSAPP",
          settings: "WHATSAPP",
        },
      ],
    });

    const chatLogsText = chatLogsToString(chatLogs) + "A:" + option;
    const formData = {
      Name: name,
      email: email,
      phone: phone,
      website: "curatedliving.in",
      websiteid: "2",
      message: chatLogsText,
      FromTag: "CHATBOT",
      key: ALL_URL.websitekey
    };
    postDataToServer(formData);
  };

  const chatLogsToString = (chatLogs) => {
    return chatLogs.map(log => {
      let logText = '';
      if (log.question) {
        logText += `Q: ${log.question}\n`;
      }
      if (log.answer) {
        logText += `A: ${log.answer}\n`;
      }
      return logText;
    }).join('');
  };

  const GetQuestionWithTypingEffect = (question) => {
    return question;
  };

  const focus = (
    <input
      id="textInput"
      type="text"
      placeholder="Enter your name"
      autoFocus
      readOnly={true}
      className={styles.noShow}
    />
  );


  return (
    <div>
      <p className={styles.question}>{welcomeMessage}</p>
      <ul className={styles.ul}>
        {chatLogs.map((log, index) => (
          <React.Fragment key={index}>
            {log.question && (
              <li className={`${styles.question} ${styles[log.style]}`}>
                {log.question}
              </li>
            )}
            {log.answer && (
              <li className={styles.answer}>
                {" "}
                <div className={styles.ans}> {log.answer}</div>
              </li>
            )}
          </React.Fragment>
        ))}
        {typing && <ChatTypingAnimation></ChatTypingAnimation>}
      </ul>
      {options && options.options && (
        <>
          {options.options.map((option, index) => (
            <ChatOptionButton
              key={index}
              settings={option.settings}
              buttonText={option.option}
              onClick={() => {
                handleButtonClick(
                  option.option,
                  option.handle,
                  option.settings
                );
              }}
            />
          ))}
          <div className="row m-0">
            <div className="col-12">{focus}</div>
          </div>
        </>
      )}
      {textBoxON === "AGENTORG" && (
        <>
          <ChatTextBox
            textmode="text"
            placeholder="Enter your Requirement"
            onSend={handleTextBoxSend}
          ></ChatTextBox>
        </>
      )}
      {textBoxON === "NAME" && (
        <>
          <ChatTextBox
            textmode="text"
            placeholder="Enter your name"
            regex={/^[a-zA-Z\s-]+$/}
            error="Enter valid Name"
            onSend={handleTextBoxSend}
          ></ChatTextBox>
        </>
      )}
      {textBoxON === "PHONE" && (
        <>
          <ChatTextBox
            textmode="tel"
            placeholder="Enter your Phone"
            regex={/^[6789]\d{9}$/}
            error="Enter valid Phone Number"
            onSend={handleTextBoxSend}
          ></ChatTextBox>
        </>
      )}
      {textBoxON === "EMAIL" && (
        <>
          <ChatTextBox
            textmode="email"
            placeholder="Enter your Email Id"
            regex={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
            error="Enter valid email-id"
            onSend={handleTextBoxSend}
          ></ChatTextBox>
        </>
      )}

      {textBoxON === "THANK" && (
        <>
          <ChatTextBox
            placeholder="THANK"
            onSend={handleTextBoxSend}
          ></ChatTextBox>
        </>
      )}
    </div>
  );
};

const postDataToServer = async (data) => {
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
  } catch (error) {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
  }
};
export default ChatEngine;
