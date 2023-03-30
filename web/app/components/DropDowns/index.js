import React from 'react';

class DropDownBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: 0
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.closeDropDown = this.closeDropDown.bind(this);
    this.openDropDown = this.openDropDown.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  toggleShow(event) {
    this.setState({
      show: !this.state.show
    });
  }

  closeDropDown(event) {
    this.setState({
      show: false
    });
  }

  openDropDown(event) {
    this.setState({
      show: true
    });
  }

  onBlur(evt) {
    evt.persist();
    setTimeout(() => {
      if (!evt.target.contains(document.activeElement)) {
        this.setState({
          show: false
        });
      }
    },0);
  }

  render() {
    return null;
  }
}

export default DropDownBase;
