import React from "react";
import Tabs from "./Tabs";
import InputDemo from "../Input/Input";
import styles from "./Navbar.module.css";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@/components/theme-provider"; // Adjust the import path as needed
import { useAuth, UserButton } from "@clerk/clerk-react";

export function ToggleDemo() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Toggle
      aria-label="Toggle theme"
      pressed={theme === "dark"}
      onPressedChange={toggleTheme}
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </Toggle>
  );
}

const Navbar = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();
  // console.log(isSignedIn);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img
          src="/logo.png"
          style={{ height: "40px", cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
      </div>
      <div className={styles.navbar}>
        <Tabs />
      </div>
      <div className={styles.input}>
        <InputDemo />
      </div>
      <div className={styles.extraBtn}>
        <ToggleDemo />
        {!isSignedIn ? (
          <Button>
            <Link to={"/signup"}>Signup</Link>
          </Button>
        ) : (
          <UserButton afterSignOutUrl="/" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
