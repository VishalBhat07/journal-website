import React from "react";
import Tabs from "./Tabs";
import InputDemo from "../Input/Input";
import styles from "./Navbar.module.css";
import { Moon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <Moon className="h-4 w-4" />
    </Toggle>
  );
}

const Navbar = () => {
  const navigate = useNavigate();
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
        <Button>
          <Link to={"/signup"}>Signup</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
