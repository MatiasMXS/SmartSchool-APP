import { Login } from "../../Components/Login/Login";
import fondo from "../../assets/hero_1.jpg";

const LoginPage = () => {
  return (
    <div
      style={{
        position: "fixed", // Fija el fondo en la pantalla sin desplazamiento
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(52, 57, 63, 0.9)", // Ajusta la opacidad (0.5 = 50%)
        }}
      ></div>
      <div
        style={{
          position: "relative",
          zIndex: 1, // Asegura que el contenido esté sobre la capa oscura
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
