import theme from './Theme'
import position from './Positioning';

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
    height: "200px",
    width: "200px",
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
    minHeight: "100vh",
    maxWidth: "100vw",
    paddingTop: "10px",
    paddingLeft: "100px",
    paddingRight: "100px",
    backgroundColor: theme.trans.dark
  },
  paragraph: {
    color: theme.text.light,
    border: `1px solid ${theme.text.dark}}`,
    textShadow: `1px 1px ${theme.text.secondary}`
  },
  paragraphWithImg: {
    minHeight: "250px",
    color: theme.text.light ,
    border: `1px solid ${theme.text.dark}}`,
    textShadow: `1px 1px ${theme.text.secondary}`
  },
  sectionTitle: {
    textAlign: "center",
    color: theme.text.light,
    textShadow: `1px 1px ${theme.text.dark}`
  }
}

export { radio,images,page }