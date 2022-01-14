import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from "react-loader-spinner";

export default function Spinner() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        background: "#afafaf",
      }}
    >
      <TailSpin type="TailSpin" color="red" height={80} width={80} />
    </div>
  );
}
