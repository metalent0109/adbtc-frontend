import { Theme } from "@mui/system"

const spinnerStyles = (theme: Theme) => ({
  loadingSpinnerContainer: {
    position: "fixed",
    tope: "0",
    right: "0",
    bottom: "0",
    left: "0",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: "5000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  loadingSpinner: {
    width: "64px",
    height: "64px",
    border: "8px solid",
    borderColor: "#000 transparent #555 transparent",
    borderRadies: "50%",
    animation: "spin 1.2s linear infinite"
  }
});

export default spinnerStyles;
