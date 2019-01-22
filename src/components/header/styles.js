import theme from '../../styles/Theme'

const header = {
  container: {
    position: "fixed",
    backgroundColor: theme.text.dark,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "75px",
    border: `2px solid ${theme.text.dark}`
  },
  navSpacer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100vw",
  },
  topAll: {
    display: "flex",
    flexDirection: "row",
    marginRight: "10px",
    marginLeft: "10px"
  },
  topEach: {
    margin: "5px",
  },
  logo: {
    large: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "25px",
      width: "auto",
      marginLeft: "20px",
      backgroundColor: theme.text.primary,
      padding: "12px",
      border: `2px solid ${theme.text.dark}`,
      borderRadius: "10px"
    },
    small: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "15px",
      width: "auto",
      marginLeft: "10px",
      marginRight: "10px",
      backgroundColor: theme.text.primary,
      padding: "12px",
      border: `2px solid ${theme.text.dark}`,
      borderRadius: "10px"
    }
  },
  link: {
    textDecoration: 'none'
  },
  navTitle: {
    fontSize: "20px",
    textAlign: "center"
  },
  name: {
    fontSize: "15px",
    textAlign: "center",
    minWidth: "90px"
  }
}

const button = {
  large: {
    normal: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.text.primary,
      textDecoration: 'none',
      color: theme.text.light,
      textShadow: `1px 1px ${theme.text.shadow}`,
      textAlign: "center",
      height: "45px",
      width: "45px",
      borderRadius: "10px",
      border: `2px solid ${theme.text.dark}`,
    },
    hover: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.text.light,
      color: theme.text.primary,
      textAlign: "center",
      height: "45px",
      width: "45px",
      borderRadius: "10px",
      border: `2px solid ${theme.text.dark}`,
    }
  },
  small: {
    normal: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.text.primary,
      textDecoration: 'none',
      color: theme.text.light,
      textShadow: `1px 1px ${theme.text.shadow}`,
      textAlign: "center",
      height: "25px",
      width: "25px",
      borderRadius: "10px",
      border: `2px solid ${theme.text.dark}`,
    },
    hover: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.text.light,
      color: theme.text.primary,
      textAlign: "center",
      height: "25px",
      width: "25px",
      borderRadius: "10px",
      border: `2px solid ${theme.text.dark}`,
    }
  },
}

export {header,button}