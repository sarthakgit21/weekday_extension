import React from "react";
import "./JobCard.css";
import Button from "@mui/material/Button";

const JobCard = ({ jobDetailsFromCompany, jdLink }) => {
  const [expanded, setExpanded] = React.useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="job-card">
      <div className="header-top">
        <span className="top-header">⏳ 10 days ago</span>
      </div>
      <div className="companny">
        <div className="left-company">
          <img
            alt="Company-logo"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/214/517/small/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg"
          ></img>
        </div>
        <div className="right-company">
          Companny Name
          <br />
          Software Engineer
          <br />
          India
        </div>
      </div>
      <p>Estimated Salary 15 lac- 20 lac</p>
      <div>
        About Company
        <p>
          {expanded
            ? jobDetailsFromCompany
            : jobDetailsFromCompany.slice(0, 300)}
        </p>
        {jobDetailsFromCompany.length > 100 && (
          <button className="expand-button " onClick={toggleDescription}>
            {expanded ? "View Less" : "View More"}
          </button>
        )}
      </div>
      <div>
        <p>Experience Required: {"3+ years"}</p>
      </div>
      <div className="buttons-tops">
        <Button
          variant="contained"
          color="success"
          className="buttons"
          style={{ backgroundColor: "#46c5a1" ,  marginTop: "35px",borderRadius:"10px"}}
        >
          <a
            className="apply-button"
            href={jdLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            ⚡ Apply Now
          </a>
        </Button>
        <Button
          variant="contained"
          color="success"
          className="buttons"
          style={{ backgroundColor: "#4943da", marginTop: "35px" ,borderRadius:"10px" }}
        >
          <a
            className="apply-button"
            href={jdLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Unlock Refferals ask
          </a>
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
