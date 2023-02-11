import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import CustomOptionStep from "./CustomOptions";

const options = [
  {
    value: "option1",
    label: "Option 1",
    height: "100",
    width: "100",
    src:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
  },
  {
    value: "option2",
    label: "Option 2",
    height: "100",
    width: "100",
    src:
      "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
  }
];

// all available config props
const config = {
  width: "400px",
  height: "500px",
  floating: true
};

const steps = [
  {
    id: "intro",
    message: "Please select an option:",
    trigger: "options"
  },
  {
    id: "options",
    component: <CustomOptionStep options={options} />,
    asMessage: true,
    trigger: "selected-option"
  },
  {
    id: "selected-option",
    message: `You selected: ${options.value}}`,
    end: true
  }
];

const triggerNextStep = () => {
  console.log("this is triggerNextStep");
};

// const userPref, setUserPref = useState(); // ['green;,

const steps2 = [
  {
    id: "intro",
    message: "Hello what is your name?",
    trigger: "user-name"
  },
  // user's response
  {
    id: "user-name",
    user: true,
    trigger: ({ value, steps }) => {
      // console.log("metadata.value: ", value, steps);
      //console.log('input value: ', metadata.value);
      return "greet";
    }
  },
  // chatbot's response
  {
    id: "greet",
    message: ({ previousValue, steps }) => {
      console.log("previousValue, steps: ", previousValue, steps);
      return previousValue;
    },
    trigger: "user-style"
  },
  // user's response
  {
    id: "user-style",
    user: true,

    trigger: "greet"
  },
  {
    id: "options",
    component: (
      <CustomOptionStep options={options} triggerNextStep={triggerNextStep} />
    ),
    asMessage: true
  },
  {
    id: "option1",
    message: `You selected: option1`,
    end: true
  },
  {
    id: "option2",
    message: `You selected: option2`,
    end: true
  }
];

class ChatForm extends Component {
  render() {
    return <ChatBot steps={steps2} {...config} />;
  }
}

export default ChatForm;
