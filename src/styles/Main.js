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
    height: "20px",
    width: "20px",
    backgroundColor: theme.text.light,
    borderRadius: "10px",
    margin: "5px"
  },
  clicked: {
    height: "20px",
    width: "20px",
    backgroundColor: theme.text.primary,
    border: `1px solid ${theme.text.light}`,
    borderRadius: "10px",
    margin: "5px"
  },
  unclicked2: {
    height: "20px",
    width: "20px",
    backgroundColor: theme.text.light,
    borderRadius: "10px",
    margin: "5px",
  },
  clicked2: {
    height: "20px",
    width: "20px",
    backgroundColor: theme.text.secondary,
    borderRadius: "10px",
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
    marginLeft: "5%",
    marginTop:"20px"
  },
  containerRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    float: "right",
    marginRight: "5%",
    marginLeft: "25px",
    marginTop:"20px"
  },
}
const page = { //page format for each project page
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    minHeight: "100vh",
    minWidth: "100vw",
    paddingTop: "40px",
    paddingBottom: "100px",
    backgroundColor: theme.trans.dark,
  },
  paragraph: {
    color: theme.text.light,
    border: `1px solid ${theme.text.dark}}`,
    textShadow: `1px 1px black`,
    paddingTop: "10px",
    paddingLeft: "5%",
    paddingRight: "5%",
    fontWeight: "bold"
  },
  paragraphWithImg: {
    minHeight: "250px",
    color: theme.text.light ,
    border: `1px solid ${theme.text.dark}}`,
    paddingLeft: "5%",
    paddingRight: "5%",
    // textShadow: `1px 1px ${theme.text.shadow}`,
    fontWeight: "bold",
    paddingLeft: "100px",
    paddingRight: "100px",
  },
  sectionTitle: {
    paddingTop: "5px",
    textAlign: "center",
    color: theme.text.light,
    fontWeight: "bold",
    textShadow: `1px 1px black`
  }
}

export { radio,images,page }
