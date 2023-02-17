import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./components/Button";
import Modal from "./components/Modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modals: [
        {
          id: 0,
          isActive: false,
          closeButton: false,
          title: "Are you ready to donate for Ukraine?",
          text: [
            "If once you try, it won`t be possible to stop.",
            "Are you sure that you want to start, right?",
          ],
          actions: [
            <Button
              text={"Donate"}
              backgroundColor="red-button"
              onClick={() => {
                this.firstModal();
                alert("-13.500$");
              }}
            />,
          ],
        },
        {
          id: 1,
          isActive: false,
          closeButton: true,
          title: "Do you want to delete this file?",
          text: [
            "Once you delete this file, it won`t be possible to undo this action.",
            "Are you sure you want to delete it?",
          ],
          actions: [
            <Button
              text={"Ok"}
              backgroundColor="red-button"
              onClick={() => {
                this.secondModal();
                alert("You agreed this action");
              }}
            />,
            <Button
              text={"Сancel"}
              backgroundColor="red-button"
              onClick={() => {
                this.secondModal();
                alert("You canceled this action");
              }}
            />,
          ],
        },
      ],
    };
  }
  firstModal = () => {
    const setActive = this.state.modals[0];
    setActive.isActive = !setActive.isActive;
    this.setState({ setActive });
  };
  closeFirstModal = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      this.firstModal();
    }
  };
  secondModal = () => {
    const setActive = this.state.modals[1];
    setActive.isActive = !setActive.isActive;
    this.setState({ setActive });
  };
  closeSecondModal = (e) => {
    if (
      e.target.classList.contains("modal-overlay") ||
      e.target.classList.contains("close-button")
    ) {
      this.secondModal();
    }
  };
  render() {
    return (
      <>
        <div className="buttons">
          <Button
            backgroundColor={"yellow"}
            text={"First modal"}
            onClick={this.firstModal}
          />
          <Button
            backgroundColor={"blue"}
            text={"Second modal"}
            onClick={this.secondModal}
          />
        </div>
        <div className="modals">
          <Modal
            closeButton={this.state.modals[0].closeButton}
            isActive={this.state.modals[0].isActive}
            header={this.state.modals[0].title}
            text={this.state.modals[0].text[0]}
            question={this.state.modals[0].text[1]}
            actions={this.state.modals[0].actions}
            onClick={this.closeFirstModal}
          />
          <Modal
            closeButton={this.state.modals[1].closeButton}
            isActive={this.state.modals[1].isActive}
            header={this.state.modals[1].title}
            text={this.state.modals[1].text[0]}
            question={this.state.modals[1].text[1]}
            actions={this.state.modals[1].actions}
            onClick={this.closeSecondModal}
          />
        </div>
      </>
    );
  }
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
