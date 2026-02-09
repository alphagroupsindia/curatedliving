import SectionHeading from "@/lib/UI/SectionHeading/SectionHeading";
import EnquiryForm from "../../Enquiry/EnquiryForm/EnquiryForm";
import GoogleMap from "../GoogleMap/GoogleMap";
import styles from './ContactUs.module.css';
import SectionTitle from "@/lib/UI/SectionTitle/SectionTitle";
import SectionText from "@/lib/UI/SectionText/SectionText";

const ContactUs=()=>{
    return (
      <div className={styles.contactUs}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <SectionHeading
                heading="Contact"
                color="rgb(230,230,230)"
                size="90"
              ></SectionHeading>
              <div className="mt-5 pt-5">
                <SectionHeading
                  heading="Find Us Here"
                  color="#ffcc00"
                ></SectionHeading>
                <SectionText
                  text="#422, 6th Main Rd, Vijayanagar 1st Stage, Mysuru, Karnataka"
                  line="30"
                  char="0.2"
                  color="rgb(220 220 220)"
                  size="20"
                >
                  {" "}
                </SectionText>

                <SectionText
                  text="+91 88843 59990"
                  line="10"
                  char="0.2"
                  weight="600"
                  color="rgb(220 220 220)"
                  size="18"
                >
                  {" "}
                </SectionText>
                <SectionText
                  text="+91 88843 69990"
                  line="10"
                  char="0.2"
                  color="rgb(220 220 220)"
                  size="18"
                >
                  {" "}
                </SectionText>
                <SectionText
                  text="sales@curatedliving.in"
                  line="10"
                  char="0.2"
                  color="rgb(220 220 220)"
                  size="20"
                >
                  {" "}
                </SectionText>
              </div>
            </div>
            <div className="col-sm-6">
              <EnquiryForm
                heading=""
                labelColor="rgb(222,222,222)"
                closeButton={false}
              ></EnquiryForm>
            </div>
          </div>
        </div>
        <GoogleMap></GoogleMap>
      </div>
    );
}

export default ContactUs;