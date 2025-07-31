import React from "react";
import Tabs from "./Tabs";
import InputDemo from "../Input/Input";
import styles from "./Navbar.module.css";
import { Moon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "../ui/button";

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <Moon className="h-4 w-4" />
    </Toggle>
  );
}

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/logo.jpeg" style={{ height: "40px" }} />
      </div>
      <div className={styles.navbar}>
        <Tabs />
      </div>
      <div className={styles.input}>
        <InputDemo />
      </div>
      <div className={styles.extraBtn}>
        <ToggleDemo />
        <Button>Signup</Button>
      </div>
    </div>
  );
};

export default Navbar;
