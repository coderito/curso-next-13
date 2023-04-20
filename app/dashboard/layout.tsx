interface Props {
    children: React.ReactNode;
}

function DashboarLayout({children}: Props) {
  return (
    <div>
        <h1>Layout de Dasboard</h1>
        <div>{children}</div>
    </div>
  )
}

export default DashboarLayout;