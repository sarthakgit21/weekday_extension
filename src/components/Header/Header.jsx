import React, { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { filterActionns } from "../../data/Store/store";
import "../Joblisting/JobCard.css";

const Header = () => {
  // CREATED DUMMY DATA FOR FILTERS

  // ********************* DUMMY DATA****************************************
  const roles = [
    { label: "Software Developer" },
    { label: "Software Developer 2" },
    { label: "Software Developer 3" },
    { label: "Product Engineer 2" },
    { label: "Product Engineer 2" },
  ];
  const numberOfEmployee = [{ label: "10" }, { label: "20" }];
  const experiences = [{ label: "0" }, { label: "1" }, { label: "2" }];
  const remote = [{ label: "Remote" }, { label: "On-site" }];
  const minimumBasePay = [{ label: "10k" }, { label: "20k" }];
  const companies = [
    { title: "Company1" },
    { title: "Company2" },
    { title: "Company3" },
    { title: "Company4" },
    { title: "Company5" },
  ];
  const [basePay, setBasePay] = React.useState(null);
  const [role, setRole] = React.useState(null);
  const [experience, setExperience] = React.useState(null);
  const [remoteVal, setRemoteVal] = useState(null);
  const [company, setCompany] = useState(null);
  const [sizeofcompnay, setSizeOfCompnay] = useState(null);
  const usedispatch = useDispatch();

  //*********************************LOGIC ***********************/
  useEffect(() => {
    usedispatch(
      filterActionns.setData({
        basePay,
        role,
        experience,
        remoteVal,
        company,
        sizeofcompnay,
      })
    );
  }, [basePay, role, experience, remoteVal, company, sizeofcompnay]);

  return (
    <>
      <div className="header-container">
        <Autocomplete
         
          onChange={(event, newValue) => {
            setRole(newValue ? newValue.label : null);
          }}
          className="header-first filter-val"
          id="country-customized-option-demo"
          options={roles}
          disableCloseOnSelect
          getOptionLabel={(option) => `${option.label}`}
          renderInput={(params) => <TextField {...params} label="Roles" />}
        />
        <Autocomplete
          onChange={(event, newValue) => {
            setSizeOfCompnay(newValue ? newValue.label : null);
          }}
          className="filter-val"
          id="country-customized-option-demo"
          options={numberOfEmployee}
          disableCloseOnSelect
          getOptionLabel={(option) => `${option.label}`}
          renderInput={(params) => (
            <TextField {...params} label="Number of Employee" />
          )}
        />
        <Autocomplete
          onChange={(event, newValue) => {
            setExperience(newValue ? newValue.label : null);
          }}
          className="filter-val"
          id="country-customized-option-demo"
          options={experiences}
          disableCloseOnSelect
          getOptionLabel={(option) => `${option.label}`}
          renderInput={(params) => <TextField {...params} label="Experience" />}
        />
        <Autocomplete
          className="filter-val"
          onChange={(event, newValue) => {
            setRemoteVal(newValue ? newValue.label : null);
          }}
          id="country-customized-option-demo"
          options={remote}
          disableCloseOnSelect
          getOptionLabel={(option) => `${option.label}`}
          renderInput={(params) => <TextField {...params} label="Remote" />}
        />
        <Autocomplete
           className="filter-val"
          onChange={(event, newValue) => {
            setBasePay(newValue ? newValue.label : null);
          }}
          id="country-customized-option-demo4"
          options={minimumBasePay}
          disableCloseOnSelect
          getOptionLabel={(option) => `${option.label}`}
          renderInput={(params) => (
            <TextField {...params} label="Minimum Base Say" />
          )}
        />
        {/* <Stack spacing={2} sx={{ width: 300 }}> */}
          <Autocomplete
           className="filter-val"
            freeSolo
            onChange={(event, newValue) => {
              console.log(newValue);
              setCompany(newValue ? newValue : null);
            }}
            id="free-solo-2-demo"
            disableClearable
            options={companies.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                onChange={(event, newValue) => {
                  setCompany(newValue ? newValue : null);
                }}
                {...params}
                label="Search Company"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        {/* </Stack> */}
      </div>
    </>
  );
};

export default Header;
