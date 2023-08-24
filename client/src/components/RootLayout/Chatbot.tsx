import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";


const theme = {
  background: 'white',
  headerBgColor: 'white',
  headerFontSize: '20px',
  botBubbleColor: 'white',
  headerFontColor: 'slate',
  botFontColor: 'slate',
  userBubbleColor: 'white',
  userFontColor: 'slate',
  fontFamily: "Kanit",
};

const steps = [
  {
    id: "0",
    message: "สวัสดีครับ!",
    trigger: "1",
  },
  {
    id: "1",
    message: "ต้องการติดต่ออะไรครับ?",
    trigger: "2",
  },
  {
    id: "11",
    message: "มีอะไรอยากสอบถามอีกไหมครับ?",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      { value: 1, label: "วิธีการขนส่ง", trigger: "3" },
      { value: 2, label: "วิธีการติดต่อ", trigger: "4" },
      { value: 3, label: "สอบถามแอดมิน", trigger: "5" },
      { value: 4, label: "ไม่ถามแล้ว", trigger: "99" },
    ],
  },
  {
    id: "3",
    message: "ทางเราขนส่งผ่านMaeKun Expressครับ",
    trigger: "11",
  },
  {
    id: "4",
    message: "ติดต่อทางไลน์ @ChaoKneeMa1234ได้เลยครับ",
    trigger: "11",
  },
  {
    id: "5",
    message: "ขอไลน์ของคุณลูกค้าไว้ แล้วแอดมินจะตอบกลับครับ",
    delay: 1000,
    trigger: "6",
  },
  {
    id: "6",
    user: true,
    trigger: "7",
  },
  {
    id: "7",
    message: "ขอบคุณครับ คุณ{previousValue}",
    trigger: "11",
  },
  {
    id: "99",
    message: "เรียบร้อยนะครับ ขอบคุณที่ใช้บริการครับ",
    end: true,
  },
];

const config = {
  floating: true,
};

export default function Chatbot()  {

  return (
    <div className="fixed z-50 bottom-10 right-8">
      <ThemeProvider theme={theme}>
        <ChatBot {...config} steps={steps}  />
      </ThemeProvider>
    </div>
  );
}
