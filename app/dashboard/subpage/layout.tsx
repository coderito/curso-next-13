
interface Props {
    children: React.ReactNode;
}

function layout({children}: Props) {
  return (
    <div>
        <h1>Layout de subpage</h1>
        <div>{children}</div>
    </div>
  )
}

export default layout