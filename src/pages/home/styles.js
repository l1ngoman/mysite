import theme from '../../styles/Theme'

const img ={
  width: "150px",
  height: "150px",
  float: "left",
  marginRight: "20px",
  borderRadius: "10px",
  boxShadow: `1px 1px ${theme.trans.dark}`
}
const nav = {
  display: "flex",
  justifyContent: "center",
  paddingBottom: "10px",
}
const home = {
  text: {
    display: "flex",
    justifyContent: "center",
    width: "75%",
    color: theme.text.light,
    // textShadow: `1px 1px ${theme.text.shadow}`,
  },
  technology: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    color: theme.text.light,
    // textShadow: `1px 1px ${theme.text.shadow}`,
  }
}
const indent = {
  textIndent: "30px",
  fontWeight: "bold",
  textShadow: "1px 1px black"
}
const langs = {
  large: {
    display: "flex",
    alignItems: "center"
  },
  small: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  }
}
const section = {
  large: {
    minWidth: "650px",
    paddingTop: "20px",
    borderTop: `2px solid ${theme.trans.dark}`,
  },
  small: {
    width: "400px"
  }
}
const labels = {
  large: {
    minWidth: "150px",
    fontSize: "20px",
    fontWeight: "bold",
    textShadow: "1px 1px black"
  },
  small: {
    display: "flex",
    justifyContent: "center",
    width: "150px",
    fontSize: "18px",
    marginTop: "10px",
    marginBottom: "10px",
    fontWeight: "bold",
    textShadow: "1px 1px black"
  }
}
export { img, nav, home, section, indent, langs, labels }
