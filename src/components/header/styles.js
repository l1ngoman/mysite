import theme from '../../styles/Theme'

const headerContainer = {
  backgroundColor: theme.text.dark,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "55px",
}
const navSpacer = {
  display: "flex",
  justifyContent: "space-between",
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
  height: "25px",
  width: "auto",
  marginLeft: "20px"
}
const button = {
  backgroundColor: theme.text.secondary,
  textDecoration: 'none',
  color: theme.text.light,
  textShadow: `1px 1px ${theme.text.dark}`,
  textAlign: "center",
  height: "20px",
  width: "75px"
}
const buttonHover = {
  backgroundColor: theme.text.primary,
  color: theme.text.dark,
  textShadow: `1px 1px ${theme.text.light}`,
  textAlign: "center",
  height: "20px",
  width: "75px"
}
const link = {
  textDecoration: 'none'
}



export {headerContainer,topAll,topEach,logo,button,buttonHover,link,navSpacer}