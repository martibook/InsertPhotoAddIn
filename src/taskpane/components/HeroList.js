import * as React from "react";
import PropTypes from "prop-types";

export default class HeroList extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <main className="ms-welcome__main">
        {children}
      </main>
    );
  }
}

HeroList.propTypes = {
  children: PropTypes.node,
  items: PropTypes.array,
  message: PropTypes.string,
};
