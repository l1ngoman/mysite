import theme from '../../styles/Theme'
 
 const projectLinks = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  maxWidth: "400px",
  padding: "5px 5px 5px 5px",
}
const mainStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  backgroundImage: "url(./images/lightbulb.jpg)",
  backgroundRepeat: "no-repeat",
  color: theme.text.secondary,
  textShadow: "1px 1px black",
  height: "150px",
  width: "150px",
  margin: "5px 5px 5px 5px",
  border: `1px solid ${theme.text.dark}`
}
const mainStyleHover = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  backgroundImage: "url(./images/lightbulb.jpg)",
  backgroundRepeat: "no-repeat",
  color: theme.text.secondary,
  textShadow: `1px 1px ${theme.text.dark}`,
  height: "150px",
  width: "150px",
  margin: "5px 5px 5px 5px",
  border: `1px solid ${theme.text.primary}`
}
const tileTitle = {
  width: "100px",
}

const link = {
  textDecoration: "none"
}

export {projectLinks,mainStyle,mainStyleHover,tileTitle,link}