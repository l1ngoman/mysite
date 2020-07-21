
const modern = {
  bkgd: "url(https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
  color: {
    blue: "rgb(20,47,73)",
    green: "rgb(80,105,47)",
    black: "rgb(14,12,15)",
    white: "rgb(241,220,220)",
    transGrey: "rgba(14,12,15,.7)"
  }
}
const theme = {
  text: {
    primary: modern.color.blue,
    secondary: modern.color.green,
    dark: modern.color.black,
    light: modern.color.white,
    shadow: modern.color.green
  },
  trans: {
    dark: modern.color.transGrey
  },
  background: {
    backgroundImage: modern.bkgd,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    minWidth: "100vw"
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    width: "100%"
  }
}


export default theme