import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <form onSubmit={this.handleSubmit}>
        <input name="comment" ref={(c) => { this.input = c; }} />
        <button type="submit">Add comment</button>
      </form>
    );
  }
}

CommentForm.propTypes = propTypes;

export default CommentForm;
