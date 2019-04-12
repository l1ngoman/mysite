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
}
const home = {
  display: "flex",
  justifyContent: "center",
  width: "75%",
  color: theme.text.light,
  // textShadow: `1px 1px ${theme.text.shadow}`,
}
const indent = {
  textIndent: "30px",
  fontWeight: "bold",
  textShadow: "1px 1px black"
}
const langs = {
  large: {
    display: "flex",
    alignItems: "center",

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
    minWidth: "650px"
  },
  small: {
    width: "400px"
  }
}
const labels = {
  large: {
    width: "150px",
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
