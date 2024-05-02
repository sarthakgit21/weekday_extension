import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { useDispatch, useSelector } from "react-redux";
import fetchJobs from "../../data/fetchingjobs/fetchjob";
import { Jobdataactions } from "../../data/Store/store";
import InfiniteScroll from "react-infinite-scroll-component";
import "./JobCard.css";

const JobListing = () => {
  const jobList = useSelector((store) => store.Jobdata);
  const usedispatch = useDispatch();
  const [loading, setloading] = useState(true);
  const fetchmorejobs = async () => {
    const data = await fetchJobs();
    usedispatch(Jobdataactions.setData(data));
  };
  const filterdata = useSelector((store) => store.filterData);
  useEffect(() => {
    fetchmorejobs();
    setloading(false);
  }, [filterdata]);
  const { basePay, role, experience, remoteVal, company, sizeofcompnay } =
    filterdata;
  const jobListFiltered = jobList.filter((item) => {
    let boolVal = true;
    boolVal = basePay ? jobList.basePay >= basePay : boolVal;
    boolVal = role ? jobList.role?.includes(role) : boolVal;
    boolVal = experience ? jobList.experience >= experience : boolVal;
    boolVal = remoteVal ? jobList.role?.includes(remoteVal) : boolVal;
    boolVal = company ? jobList.company?.includes(company) : boolVal;
    boolVal = sizeofcompnay ? jobList.sizeofcompnay >= sizeofcompnay : boolVal;
    return boolVal;
  });
  const jobListFinal = jobListFiltered;

  return (
    <>
      {loading && <h4>Loading...</h4>}
      <InfiniteScroll
        dataLength={jobListFinal.length}
        next={fetchmorejobs}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="job-listing">
          <div className="container">
            {jobListFinal.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default JobListing;
