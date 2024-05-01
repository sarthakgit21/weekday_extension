import React from "react";
import JobCard from "./JobCard";

const JobListing = () => {
  const jobList = [
    {
      title: "Software Engineer",
      company: "ABC Tech",
      location: "New York, NY",
      description:
        "We are seeking a skilled software engineer to join our team...We are seeking a skilled software engineer to join our team...We are seeking a skilled software engineer to join our team...We are seeking a skilled software engineer to join our team...We are seeking a skilled software engineer to join our team...We are seeking a skilled software engineer to join our team...We are seeking a skilled software engineer to join our team...We are seeking a skilled software engineer to join our team...We are seeking a skilled software engineer to join our team...We are seeking a skilled software engineer to join our team...",
      experience: "3+ years",
      applyLink: "https://example.com/apply",
    },
  ];

  return (
    <div className="job-listing">
      {jobList.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
};

export default JobListing;
