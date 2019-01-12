import theme from './Theme'

const radio = {
  group: {
    display: "flex",
    justifyContent: "center",
  },
  unclicked: {
    height: "10px",
    width: "10px",
    backgroundColor: theme.text.light,
    margin: "5px"
  },
  clicked: {
    height: "10px",
    width: "10px",
    backgroundColor: theme.text.primary,
    margin: "5px"
  }
}
const images = { //screenshots used in projects
  img: {
    height: "250px",
    width: "250px",
  },
  containerLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    float: "left",
    marginRight: "25px",
    marginLeft: "25px"
  },
  containerRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    float: "right",
    marginRight: "25px",
    marginLeft: "25px"
  },
}
const page = { //page format for each project page
  container: {
    minHeight: "35vw",
    width: "80vw",
    minWidth: "300px",
    backgroundColor: theme.trans.dark,
    padding: "10px"
  },
  paragraphWithImg: {
    minHeight: "250px",
    color: theme.text.primary,
    border: `1px solid ${theme.text.secondary}}`,
  },
  sectionTitle: {
    textAlign: "center",
    color: theme.text.primary,
    textShadow: `1px 1px ${theme.text.secondary}`
  }
}

export { radio,images,page }