import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";

// all available config props
const config = {
  width: "400px",
  height: "400px",
  floating: true
};

const steps = [
  // chatbot's question
  {
    id: "intro",
    message: "what do you want to change?",
    trigger: "changeCode"
  },
  // user's response
  {
    id: "changeCode",
    user: true,
    trigger: ({ value, steps }) => {
      return "desiredChange"; // this is the id of the next chat interaction
    }
  },

  // chatbot's response
  {
    id: "desiredChange",
    message: ({ previousValue, steps }) => {
      console.log("previousValue, steps: ", previousValue, steps);
      return (
        "I have updated based on ",
        previousValue,
        "what more do you want to change?"
      );
    },
    trigger: "changeCode2" // go back to the chatbot's first question
  },

  // user's response
  {
    id: "changeCode2",
    user: true,
    trigger: ({ value, steps }) => {
      return "desiredChange"; // go back to the where the user types in their response
    }
  }
];

// const handleSubmit = async (event) => {
//   event.preventDefault();
//   try {
//     const response = await axios.post("http://localhost:8000/api/ui", {
//       prompt: formValue,
//     });
//     setFormValue("");
//     console.log("Success: ", response.data);
//   } catch (error) {
//     alert("Error: ", error);
//     console.error("Error: ", error);
//   }
// };

class ChatForm extends Component {
  render() {
    return <ChatBot steps={steps} {...config} />;
  }
}

export default ChatForm;
