
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "limit": 10,
  "offset": 0
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw, 
};
// WE CAN USE AXIOS ALSO FOR DATA RETREIVAL BUT I HVAE USED THIS AS IT IS GIVEN IN DOCS OF ASSISSMENT


const fetchJobs = async () => {
  try {
    const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const result = await response.text();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchJobs;
