const color = {
  grey: "rgb(26,51,58)",
  yellow: "rgb(254,187,78)",
  orange: "rgb(199,72,28)",
  white: "#F6F6F6",
  transGrey: "rgba(26,51,58,.6)"
}

const modern = {
  bkgd: "url(https://images.unsplash.com/photo-1545671652-7d674e3c4d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)",
  colors: {
    grey: "rgb(26,51,58)",
    yellow: "rgb(254,187,78)",
    orange: "rgb(199,72,28)",
    white: "#F6F6F6",
    transGrey: "rgba(26,51,58,.6)"
  }
}
const beach = {
  bkgd: "url(https://images.unsplash.com/photo-1523739617628-18951496ae32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
  colors: {
    grey: "rgb(26,51,58)",
    yellow: "rgb(254,187,78)",
    orange: "rgb(199,72,28)",
    white: "#F6F6F6",
    transGrey: "rgba(26,51,58,.6)"
  }
}
const computer = {
  bkgd: "url(https://images.unsplash.com/photo-1539630498457-2fdb43c8a2a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)",
}
const theme = {
  text: {
    primary: color.yellow,
    secondary: color.orange,
    dark: color.grey,
    light: color.white,
  },
  trans: {
    dark: color.transGrey
  },
  background: {
    backgroundImage: beach.bkgd,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh"
  }
}




export default theme