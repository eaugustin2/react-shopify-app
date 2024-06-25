import React, { useEffect, useState } from "react";
import { ButtonInterface } from "../../../../app/types/Button";
import "./Button.css";

interface buttonProps {
  id: string | null | undefined;
}

export const Button = ({ id }: buttonProps) => {
  const [button, setButton] = useState<ButtonInterface>(); //setting type for button state

  const buttonId = id ? id : "1234";

  const getThisButton = async () => {
    await fetch(`http://localhost:8002/api/button/storage/${buttonId}`)
      .then(async (data) => {
        const buttonJson = await data.json(); //this line allows the data to properly be pulled
        setButton(buttonJson);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };

  useEffect(() => {
    getThisButton();
  }, []);
  return (
    <div id="react-button" style={{ backgroundColor: button?.color }}>
      {button?.cta ? button.cta : "Click"}
    </div>
  );
};
