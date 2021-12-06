import React from 'react';
import PropTypes from 'prop-types';

const useStyles = () => ({ color: 'pink' });

export default function Dummy({
  showContent = false,
  content = 'default',
  color = 'red',
  onClick
}) {
  const headerStyle = useStyles();
  return (
    <div>
      <main>
        <h1 css={headerStyle}>Welcome!</h1>

        {showContent && (
          <p style={{ color }}>
            Here is your content:
            {content}
          </p>
        )}

        <button type="button" onClick={onClick}>
          Click me
        </button>
      </main>
    </div>
  );
}

Dummy.propTypes = {
  showContent: PropTypes.bool,
  content: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
};
