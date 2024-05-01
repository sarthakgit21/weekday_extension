
import React from "react";
import "./JobCard.css";

const JobCard = ({
  title,
  company,
  location,
  description,
  experience,
  applyLink,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="job-card">
      <h2>{title}</h2>
      <p>
        {company} - {location}
      </p>
      <div className="description">
        <p>{expanded ? description : description.slice(0, 100)}</p>
        {description.length > 100 && (
          <button className="expand-button " onClick={toggleDescription}>
            {expanded ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
      <p>Experience Required: {experience}</p>
      <a
        className="apply-button"
        href={applyLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Apply Now
      </a>
    </div>
  );
};

export default JobCard;
