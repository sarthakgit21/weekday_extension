
import React from "react";
import "./JobCard.css";

const JobCard = ({
  jobDetailsFromCompany,
  jdLink,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="job-card">
      <h2>Software Engineer</h2>
      <p>
        {"ABC Tech"} - {"New York, NY"}
      </p>
      <div className="jobDetailsFromCompany">
        <p>{expanded ? jobDetailsFromCompany : jobDetailsFromCompany.slice(0, 100)}</p>
        {jobDetailsFromCompany.length > 100 && (
          <button className="expand-button " onClick={toggleDescription}>
            {expanded ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
      <p>Experience Required: {"3+ years"}</p>
      <a
        className="apply-button"
        href={  jdLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Apply Now
      </a>
    </div>
  );
};

export default JobCard;
