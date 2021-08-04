import React from "react";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import StyledChat from "./styled.js";

const Chat = () => {
  return (
    <StyledChat>
      <WhatsAppWidget
        phoneNumber="5493415704791"
        textReplyTime="Normalmente responde en menos de 2 horas"
        companyName="House & Wines"
        message="¡Hola! 👋🏼 ¿Necesitas ayuda? Déjanos un mensaje de WhatsApp"
        sendButton="Enviar"
      />
    </StyledChat>
  );
};

export default Chat;
