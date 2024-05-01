import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { useDispatch, useSelector } from "react-redux";
import fetchJobs from "../../data/fetchingjobs/fetchjob";
import { Jobdataactions } from "../../data/Store/store";
import InfiniteScroll from "react-infinite-scroll-component";

const JobListing = () => {
  const jobList = useSelector((store) => store.Jobdata);
  const usedispatch = useDispatch();
  const [loading, setloading] = useState(true);
  const fetchmorejobs = async () => {
    const data = await fetchJobs();
    usedispatch(Jobdataactions.setData(data));
  };
  
  useEffect(() => {
    fetchmorejobs();
    setloading(false);
  }, []);
  return (
    <>
      {loading && <h4>Loading...</h4>}
      <InfiniteScroll
        dataLength={jobList.length}
        next={fetchmorejobs}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="job-listing">
          {jobList.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default JobListing;
