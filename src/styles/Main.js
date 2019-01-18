import theme from './Theme'

const radio = {
  group: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  group2: {
    display: "flex",
    justifyContent: 'center',
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
    backgroundColor: theme.text.secondary,
    margin: "5px"
  },
  unclicked2: {
    height: "10px",
    width: "10px",
    backgroundColor: theme.text.light,
    margin: "5px",
  },
  clicked2: {
    height: "10px",
    width: "10px",
    backgroundColor: theme.text.secondary,
    margin: "5px",
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
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    minHeight: "100vh",
    minWidth: "100vw",
    paddingTop: "10px",
    paddingLeft: "200px",
    paddingRight: "200px",
    paddingBottom: "100px",
    backgroundColor: theme.trans.dark,
  },
  paragraph: {
    color: theme.text.light,
    border: `1px solid ${theme.text.dark}}`,
    textShadow: `1px 1px ${theme.text.secondary}`,
    paddingTop: "10px"
  },
  paragraphWithImg: {
    minHeight: "250px",
    color: theme.text.light ,
    border: `1px solid ${theme.text.dark}}`,
    textShadow: `1px 1px ${theme.text.secondary}`
  },
  sectionTitle: {
    paddingTop: "10px",
    textAlign: "center",
    color: theme.text.light,
    textShadow: `1px 1px ${theme.text.dark}`
  }
}

export { radio,images,page }