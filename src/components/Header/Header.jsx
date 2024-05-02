import React, { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { filterActionns } from "../../data/Store/store";

const Header = () => {
  const roles = [{ label: "Software Developer" }];
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
  const filterdata = useSelector((store) => store.filterData);

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
      <Autocomplete
        style={{ width: "14%" }}
        onChange={(event, newValue) => {
          setRole(newValue?newValue.label:null);
        }}
        id="country-customized-option-demo"
        options={roles}
        disableCloseOnSelect
        getOptionLabel={(option) => `${option.label}`}
        renderInput={(params) => <TextField {...params} label="Roles" />}
      />
      <Autocomplete
        style={{ width: "14%" }}
        onChange={(event, newValue) => {
          setSizeOfCompnay(newValue?newValue.label:null);
        }}
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
          setExperience(newValue?newValue.label:null);
        }}
        style={{ width: "14%" }}
        id="country-customized-option-demo"
        options={experiences}
        disableCloseOnSelect
        getOptionLabel={(option) => `${option.label}`}
        renderInput={(params) => <TextField {...params} label="Experience" />}
      />
      <Autocomplete
        style={{ width: "14%" }}
        onChange={(event, newValue) => {
          setRemoteVal(newValue?newValue.label:null);
        }}
        id="country-customized-option-demo"
        options={remote}
        disableCloseOnSelect
        getOptionLabel={(option) => `${option.label}`}
        renderInput={(params) => <TextField {...params} label="Remote" />}
      />
      <Autocomplete
        style={{ width: "14%" }}
        onChange={(event, newValue) => {
          setBasePay(newValue?newValue.label:null);
        }}
        id="country-customized-option-demo4"
        options={minimumBasePay}
        disableCloseOnSelect
        getOptionLabel={(option) => `${option.label}`}
        renderInput={(params) => (
          <TextField {...params} label="Minimum Base Say" />
        )}
      />
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          freeSolo
          onChange={(event, newValue) => {
            setCompany(newValue?newValue:null);
          }}
          id="free-solo-2-demo"
          disableClearable
          options={companies.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Company"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Stack>
    </>
  );
};

export default Header;
