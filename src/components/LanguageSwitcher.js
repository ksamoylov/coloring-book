import React from "react";
import {translations} from "../utils/LocalizedStrings";
import "./LanguageSwitcher.css";

export default class LanguageSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lang: translations.getLanguage()};
  }

  render() {
    return (
      <div
        className="switch-btn"
        onClick={() => {
          const currentLang = this.props.lang === 'en' ? 'ru' : 'en';

          this.setState({lang: currentLang});
          this.props.onChangeLang(currentLang);
        }}
        >{this.state.lang}</div>
    );
  }
}

