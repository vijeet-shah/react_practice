import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar2 from "../components/Navbar2";

const More = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <NavBar2 />
      <button
        onClick={goToHome}
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        Take Me to testing Phase 1
      </button>
    </div>
  );
};

export default More;
