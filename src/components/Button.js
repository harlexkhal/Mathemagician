import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.PureComponent {
  render() {
    const { ctrls, last } = this.props;
    const listItems = ctrls.map((ctrl, index) => {
      let cl = 'bg-ash';
      let row = '';
      let selectLast = 3;
      if (last && index === 0) {
        row = 'ctrl-btn-2-row';
        selectLast = 2;
      }
      if (index === selectLast) {
        cl = 'bg-orange';
      }
      return <button key={ctrl} type="button" className={`ctrl-btn-row ${row} ${cl} font`}>{ctrl}</button>;
    }, last);
    return (
      <div className="ctrls">{listItems}</div>
    );
  }
}

Button.propTypes = {
  ctrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  last: PropTypes.bool.isRequired,
};

export default Button;
