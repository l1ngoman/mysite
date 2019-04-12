import theme from '../../styles/Theme'

 const projectLinks = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  maxWidth: "1000px",
  margin: "50px 5px 5px 5px",
}
const mainStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  backgroundImage: "url(./images/sticky_note.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  color: theme.text.dark,
  // textShadow: `1px 1px ${theme.text.shadow}`,
  borderRadius: "22px",
  height: "200px",
  width: "200px",
  margin: "10px 10px 10px 10px",
}
const mainStyleHover = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  backgroundImage: "url(./images/sticky_note.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  color: theme.text.primary,
  // textShadow: `1px 1px ${theme.text.shadow}`,
  border: `1px solid ${theme.text.primary}`,
  borderRadius: "22px",
  height: "200px",
  width: "200px",
  margin: "10px 10px 10px 10px",
}
const tileTitle = {
  width: "125px",
}

const link = {
  textDecoration: "none"
}

export {projectLinks,mainStyle,mainStyleHover,tileTitle,link}
