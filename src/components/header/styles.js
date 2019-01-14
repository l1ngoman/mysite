import theme from '../../styles/Theme'

const headerContainer = {
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
  marginRight: "20px",
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
const link = {
  textDecoration: 'none'
}
const navTitle =  {
    fontSize: "10px"
  }
const navTitle2 =  {
    fontSize: "20px"
  }

export {headerContainer,topAll,topEach,logo,button,buttonHover,link,navSpacer,navTitle,navTitle2}