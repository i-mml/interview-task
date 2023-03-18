import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    position: "relative",
  },

  inputContainer: {
    borderRadius: 8,
    border: "1px solid #eee",
    width: 300,
    padding: 12,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },

  menuContainer: {
    border: "1px solid #eee",
    borderRadius: 8,
    padding: 12,
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    marginTop: 8,
    maxHeight: 200,
    overflowY: "auto",
    overflowX: "hidden",
    "&::-webkit-scrollbar-thumb": {
      background: "#c6c7cc",
      width: 5,
      borderRadius: 8,
    },
    "&::-webkit-scrollbar": {
      background: "white",
      width: 5,
      borderRadius: 8,
    },
  },

  menuItem: {
    padding: "6px 24px",
    cursor: "pointer",
    borderRadius: 4,
    "&:hover": {
      background: "#f2f4ff",
    },
  },

  activeMenuItem: {
    background: "#f2f4ff",
    color: "#6B7DCE",
    fontWeight: "bold",
    marginBottom: 8,
  },
  activeInput: {
    border: "2px solid #6B7DCE",
    outline: "3px solid #d8e1fd",
  },
  svgIcon: {
    position: "absolute",
    right: "15px",
  },
});

export default useStyles;
