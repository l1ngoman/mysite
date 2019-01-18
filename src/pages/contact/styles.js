import theme from '../../styles/Theme'

const contact = {
    large: {
        form: {
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            width: "50vw",
            minHeight: "350px",
            paddingTop: "30px",
            paddingBottom: "30px",
            backgroundColor: theme.text.primary,
            // border: "1px solid red"
        },
        label: {
            display: "flex",
            justifyContent: 'left',
            color: theme.text.secondary,
            textShadow: `1px 1px ${theme.text.dark}`,
            // border: "1px solid blue",
        },
        fieldName: {
            paddingLeft: "5%",
            width: "22.5%"
        },
        input: {
            width: "60%",
            height: "35px",
            backgroundColor: theme.text.light
        },
        message: {
            textAlign: "left",
            width: "60%",
            height: "175px",
            resize: "none",
            backgroundColor: theme.text.light
        },
        submit: {
            width: "75px",
            height:"30px",
            fontSize: "15px",
            color: theme.text.dark,
            backgroundColor: theme.text.secondary
        }
    },
    small: {
        form: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "90vw",
            minHeight: "350px",
            paddingTop: "15px",
            paddingBottom: "10px",
            backgroundColor: theme.text.primary,
            // border: "1px solid red"
        },
        label: {
            display: "flex",
            flexDirection: "column",
            justifyContent: 'left',
            width: "200px",
            color: theme.text.secondary,
            textShadow: `1px 1px ${theme.text.dark}`,
            // border: "1px solid blue",
        },
        fieldName: {
            fontSize: "20px",
            width: "200px"
        },
        input: {
            width: "200px",
            height: "35px",
            backgroundColor: theme.text.light
        },
        message: {
            textAlign: "left",
            width: "200px",
            height: "175px",
            resize: "none",
            backgroundColor: theme.text.light
        },
        submit: {
            width: "75px",
            height:"30px",
            fontSize: "15px",
            color: theme.text.dark,
            backgroundColor: theme.text.secondary
        }
    }
}

export default contact;