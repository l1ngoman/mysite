const color = {
  grey: "rgb(26,51,58)",
  yellow: "rgb(254,187,78)",
  orange: "rgb(199,72,28)",
  white: "#F6F6F6",
  transGrey: "rgba(26,51,58,.6)"
}

const modern = {
  bkgd: "url(https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
  color: {
    grey: "rgb(65,66,96)",
    wood: "rgb(141,89,70)",
    black: "rgb(14,12,15)",
    white: "rgb(241,220,220)",
    transGrey: "rgba(14,12,15,.7)"
  }
}
const beach = {
  bkgd: "url(https://images.unsplash.com/photo-1523739617628-18951496ae32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
  color: {
    grey: "rgb(26,51,58)",
    yellow: "rgb(254,187,78)",
    orange: "rgb(199,72,28)",
    white: "#F6F6F6",
    transGrey: "rgba(26,51,58,.6)"
  }
}

const theme = {
  text: {
    primary: modern.color.grey,
    secondary: modern.color.wood,
    dark: modern.color.black,
    light: modern.color.white,
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
  }
}


export default theme