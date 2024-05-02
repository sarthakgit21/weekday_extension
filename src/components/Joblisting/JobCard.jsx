import React from "react";
import "./JobCard.css";
import Button from "@mui/material/Button";

const JobCard = ({ jobDetailsFromCompany, jdLink }) => {
  //***************************LOGIC***************************** */
  const [expanded, setExpanded] = React.useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };
//***************************RENDERING***************************** */
  return (
    <div className="job-card">
      <div className="header-top">
        <span className="top-header"> ⏳ 10 days ago &nbsp;</span>
      </div>
      <div className="companny">
        <div className="left-company">
          <img
            alt="Company-logo"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/214/517/small/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg"
          ></img>
        </div>
        <div className="right-company">
          <span style={{fontFamily:"Manrope", fontWeight:"600"}}>Company Name</span>
          <br />
          Software Engineer
          <br />
          India
        </div>
      </div>
      <p>
        <span style={{ fontWeight: "600" }}>
          Estimated Salary: ₹15 - 20 LPA ✅
        </span>
      </p>
      <div className="discription">
        <span style={{ fontWeight: "500" }}>About Company :- </span>
        <br />
        <span style={{ fontWeight: "700" }}>About us</span>
        <p className="para">
          {expanded
            ? jobDetailsFromCompany
            : jobDetailsFromCompany.slice(0, 250)}
        </p>
        {jobDetailsFromCompany.length > 250 && (
          <button className="expand-button" onClick={toggleDescription}>
            {expanded ? "View Less" : "View More"}
          </button>
        )}
      </div>
      <div>
        <p>
          <span style={{ fontWeight: "600" }}>Minimum Experience:</span> <br />
          {"3 years"}
        </p>
      </div>
      <div className="buttons-tops">
        <Button
          variant="contained"
          color="success"
          className="buttons"
          style={{
            backgroundColor: "#46c5a1",
            marginTop: "15px",
            borderRadius: "10px",
          }}
        >
          <a
            className="apply-button"
            href={jdLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={{ fontWeight: "800", color: "black" }}>
              ⚡ Apply Now
            </span>
          </a>
        </Button>
        <Button
          variant="contained"
          color="success"
          className="buttons"
          style={{
            backgroundColor: "#4943da",
            marginTop: "25px",
            borderRadius: "10px",
          }}
        >
          {" "}
          <div className="left-company pic-logo">
            <img
              alt="Company-logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE-c12tnUug1e3DZJo0hUeGEuVE-UcY6SaKgmfH9bW2Q&s"
            ></img>
          </div>{" "}
          <div className="left-company pic-logo">
            <img
              alt="Company-logo "
              src="https://cdn-icons-png.freepik.com/512/4202/4202841.png"
            ></img>
          </div>
          <a
            className="apply-button"
            href={jdLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Unlock Referrals ask
          </a>
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
