import "./character-container.css";

interface Props {
  children: React.ReactNode;
}

function Cardlayout({ children }: Props) {
  return <div className="character-layout">{children}</div>;
}

export default Cardlayout;
