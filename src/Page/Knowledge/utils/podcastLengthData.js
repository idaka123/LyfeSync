import { podcastsData } from "../Knowledge.data";

const calculateLength = (a) => {
  const data = a.split(' ');
  if (data[1] === "hour") return parseInt(data[0]) * 60 * 60 + parseInt(data[2]) * 60 + parseInt(data[4]);
  return parseInt(data[0]) * 60 + parseInt(data[2]);
}

export default calculateLength;
