import theme from '../../styles/Theme'

const headerContainer = {
  position: "fixed",
  backgroundColor: theme.text.dark,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "50px",
}
const navSpacer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100vw",
}
const topAll = {
  display: "flex",
  flexDirection: "row",
  marginRight: "10px",
  marginLeft: "10px"
}
const topEach = {
  margin: "5px",
}
const logo = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "25px",
  width: "auto",
  marginLeft: "20px",
  backgroundColor: theme.text.secondary,
  border: `10px solid ${theme.text.secondary}`,
  borderRadius: "10px"
}
const logo2 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "15px",
  width: "auto",
  marginLeft: "10px",
  marginRight: "10px",
  backgroundColor: theme.text.secondary,
  border: `10px solid ${theme.text.secondary}`,
  borderRadius: "10px"
}
const button = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.text.secondary,
  textDecoration: 'none',
  color: theme.text.light,
  textShadow: `1px 1px ${theme.text.dark}`,
  textAlign: "center",
  height: "45px",
  width: "45px",
  borderRadius: "10px"
}
const buttonHover = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.text.light,
  color: theme.text.secondary,
  textAlign: "center",
  height: "45px",
  width: "45px",
  borderRadius: "10px"
}
const button2 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.text.secondary,
  textDecoration: 'none',
  color: theme.text.light,
  textShadow: `1px 1px ${theme.text.dark}`,
  textAlign: "center",
  height: "25px",
  width: "25px",
  borderRadius: "10px"
}
const buttonHover2 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.text.light,
  color: theme.text.secondary,
  textAlign: "center",
  height: "25px",
  width: "25px",
  borderRadius: "10px"
}
const link = {
  textDecoration: 'none'
}
const navTitle =  {
  fontSize: "20px",
  textAlign: "center"
}
const name = {
  fontSize: "15px",
  textAlign: "center",
  minWidth: "105px"
}


export {headerContainer,topAll,topEach,logo,logo2,button,buttonHover,button2,buttonHover2,link,navSpacer,navTitle,name}