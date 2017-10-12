import React, { Component }  from 'react';
import { connect  } from 'react-redux';
import { bindActionCreators } from 'redux'
import RecordEditor from '../record-editor/RecordEditor'
import { Field, reduxForm  } from 'redux-form'

class RecordForm extends Component {

  onChange(e) {
    this.props.submit()
    console.log('changed!')
  }

  render() {
    const { error, handleSubmit } = this.props
    return (
      <form onSubmit={ handleSubmit  }>
        <Field component="input" type="hidden" name="workspace_id"
          value={this.props.record.workspace_id} />
        <div>
          <Field component={RecordEditor} name="content"
            placeholder="Enter a record here."
            defaultValue={this.props.record.content}
            onChange={(e) => this.onChange(e)} />
        </div>
        <div>
          {error && <strong>{error}</strong>}
        </div>
      </form>
    )

  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

RecordForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecordForm)

RecordForm = reduxForm({
  form: 'record',
  destroyOnUnmount: false
})(RecordForm)

export default RecordForm
