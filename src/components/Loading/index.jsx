import { Oval } from "react-loader-spinner";
import "./style.css"
const Loading = () => {
  
  return (
  <div className="oval-loader">
    <Oval color="red" secondaryColor="blue" height={50} />
  </div>);
};
export default Loading;
