import { MdKeyboardCommandKey } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import baseAssets from "../assets/base_assets";
import { useRootContext } from "../services/context_provider";
import commonComponents from "./commons/CustomMui";
import SizedBox from "./commons/SizedBox";
import styles from "./commons/styles";

const { Text } = commonComponents;

export default function Footer() {
  const nav = useNavigate();
  const { palette } = useRootContext();
  const paths = ["about", "work", "connect"];

  const pathItems = paths.map((path) => {
    return (
      <>
        <Text
          className="hover-underline-animation"
          style={textStyles}
          onClick={() => {
            nav("/" + path);
          }}
        >
          {path}
        </Text>
        <SizedBox width={"50px"} />
      </>
    );
  });

  return (
    <div
      style={{
        ...styles.row,
        position: "fixed",
        bottom: "0",
        justifyContent: "right",
        alignItems: "center",
        width: "100vw",
        paddingBottom: "60px",
        paddingRight: "150px",
      }}
    >
      {pathItems}
      <div
        className="hover-underline-animation"
        style={{
          ...styles.row,
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => {
          palette.toggle();
        }}
      >
        <MdKeyboardCommandKey
          style={{
            fontSize: "16px",
            color: "white",
            cursor: "pointer",
            marginRight: "5px",
            marginBottom: "5px",
          }}
        />
        <Text style={{ ...textStyles }}>+ k</Text>
      </div>
      <SizedBox width={"40px"} />
      <img
        onClick={() => {
          nav("/");
        }}
        style={{
          width: "20px",
          height: "20px",
        }}
        src={baseAssets.lpLogo}
        alt="Your SVG"
      />
    </div>
  );
}

const textStyles: React.CSSProperties = {
  fontSize: "14px",
  paddingBottom: "5px",
  cursor: "pointer",
  letterSpacing: "2px",
};
