import "./style.css";

export const Logo = () => {
  return (
    <div>
      <h1 onClick={() => window.location.reload()} className="LogoText">
        Burguer <span>Kenzie</span>
      </h1>
    </div>
  );
};
