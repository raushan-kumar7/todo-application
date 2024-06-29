import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import useTheme from "../../context/theme";
import "./theme.css";

export default function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.target.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <div className="bg-themechange">
      <label className="theme-toggle">
        <input type="checkbox" onChange={onChangeBtn} checked={themeMode === 'dark'} />
        {themeMode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
      </label>
    </div>
  );
}
