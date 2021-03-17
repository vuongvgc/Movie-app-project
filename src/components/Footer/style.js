const styles = (theme) => {
  return {
    compFooter: {
      backgroundColor: theme.palette.success.main,
      width: "100%",
      height: "100%",
      marginBottom: -25,
    },
    contentFooter: {
      display: "flex",
      paddingBottom: 20,
      borderBottom: "1px solid black",
    },
    itemContentFooter: {
      width: "100%",
      marginTop: 15,
    },
    styleLink: {
      textDecoration: "none",
      color: "black",
      cursor: "pointer",
      marginTop: 50,
      "& p": {
        marginTop: 10,
      },
      "&:hover p": {
        fontWeight: 700,
      },
    },

    gridLogoPartner: {
      paddingRight: 70,
    },

    styleLogoPartner: {
      cursor: "pointer",
      marginTop: 5,
      transition: "all 0.3s",
      "&:hover": {
        transition: "all 0.3s",
        opacity: 0.7,
      },
    },

    gridLogoSocial: {
      paddingRight: 70,
    },
    styleImgOS: {
      width: "40%",
    },
    // Responsive
    [theme.breakpoints.down("md")]: {
      gridLogoPartner: {
        paddingRight: 50,
      },
      gridLogoSocial: {
        paddingRight: 60,
      },
    },
    [theme.breakpoints.down("sm")]: {
      gridLogoPartner: {
        paddingRight: 0,
        width: 90,
      },
      gridLogoSocial: {
        paddingRight: 90,
      },
      styleImgOS: {
        width: "60%",
      },
    },
    [theme.breakpoints.down("xs")]: {
      contentFooter: {
        display: "block",
        textAlign: "center",
      },
      gridLogoPartner: {
        paddingRight: 0,
        width: 170,
        margin: "0 auto",
      },
      gridLogoSocial: {
        paddingRight: 0,
        width: 170,
        margin: "0 auto",
      },
      boxContact: {
        width: "55%",
        margin: "0 auto",
        padding: 10,
      },
      itemContentFooter: { marginTop: 0, paddingTop: 15 },
    },
  };
};
export default styles;
