import theme from '../../styles/Theme'
 
 const projectLinks = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  maxWidth: "1000px",
  height: "65vh",
  margin: "5px 5px 5px 5px",
}
const mainStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  backgroundImage: "url(./images/tablet.svg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundColor: theme.text.secondary,
  color: theme.text.dark,
  borderRadius: "22px",
  height: "200px",
  width: "145px",
  margin: "10px 10px 10px 10px",
}
const mainStyleHover = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  backgroundImage: "url(./images/tablet.svg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundColor: theme.text.light,
  backgroundRepeat: "no-repeat",
  color: theme.text.secondary,
  textShadow: `1px 1px ${theme.text.dark}`,
  borderRadius: "22px",
  height: "200px",
  width: "145px",
  margin: "10px 10px 10px 10px",
}
const tileTitle = {
  width: "90px",
}

const link = {
  textDecoration: "none"
}

export {projectLinks,mainStyle,mainStyleHover,tileTitle,link}