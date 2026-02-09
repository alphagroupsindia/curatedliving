import React from "react";
import Styles from "./PageHeader.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionHeading from "../SectionHeading/SectionHeading";
import Image from 'next/image';
import imgSign from './sign.png';
import { sign } from "crypto";

interface PageHeaderProps {
  title: string;
  sign?:boolean;
  img: string;
  bread: string;
  color:string;
  message1?:string;
  message2?:string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  img,
  sign,
  bread,
  color,
  message1,message2,
}) => {
  const headerStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const breadcrumbList = bread.split(":");
  const breadcrumbs = breadcrumbList.map((breadcrumb, index) => {
    const isLastBreadcrumb = index === breadcrumbList.length - 1;
    const breadcrumbLink =
      breadcrumb.toLowerCase() === "home" ? "." : breadcrumb.toLowerCase();
    return isLastBreadcrumb ? (
      <span className={Styles.span} key={index}>
        {breadcrumb}
      </span>
    ) : (
      <>
        <a href={`/${breadcrumbLink}`} className={Styles.a} key={index}>
          {breadcrumb}
        </a>{" "}
        /{" "}
      </>
    );
  });

  return (
    <>
      <div className="row m-0">
        <div className="col-6 col-sm-4">
          <div className={Styles.pageHeader} style={headerStyle}>
            <h1 className={Styles.h1} style={{ color: color }}>
              {title}
            </h1>
            <div className={Styles.arc}></div>
            <div className={Styles.breadcrumbs}>{breadcrumbs}</div>
          </div>
        </div>
        <div
          className="col-6 col-sm-8
        "
        >
          <SectionHeading
            color="white"
            top="85px"
            size="30"
            line="30px"
            mobile="1.7"
            heading={message1}
          />
          <SectionHeading
            color="rgb(255 204 0)"
            size="30"
            line="30px"
            top="20px"
            mobile="1.4"
            heading={message2}
          />
          {sign&&<div className="text-center mt-3">
            <Image src={imgSign} alt="Signature"></Image>
          </div>}
        </div>
      </div>
    </>
  );
};

export default PageHeader;
