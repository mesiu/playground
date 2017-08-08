import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './commentForm.css';

const propTypes = {
  id: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.input.value === '') {
      return;
    }

    this.props.onSubmit(this.props.id, this.input.value);
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input className={styles.input} name="comment" ref={(c) => { this.input = c; }} />
        <button className={styles.button} type="submit">Add comment</button>
      </form>
    );
  }
}

CommentForm.propTypes = propTypes;

export default CommentForm;
