import React from 'react';
import { Card, Form, Input, Select, Button } from 'element-react';
import 'element-theme-default';
import './FormBudget.css';

class FormBudget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        type: '',
        comment: '',
        cash: '',
      },
      rules: {
        type: [{ required: true, message: 'choose type', trigger: 'change' }],
        comment: [
          { required: true, message: 'Please, add comment', trigger: 'blur' },
        ],
        cash: [
          { required: true, message: 'cash is required' },
          {
            validator: (rule, value, callback) => {
              const cash = parseInt(value, 10);
              if (!Number.isInteger(cash)) {
                callback(new Error('Cash must be a number'));
              } else {
                if (cash < 1) {
                  callback(new Error('Please input a number greater then 0'));
                } else {
                  callback();
                }
              }
            },
            trigger: 'change',
          },
        ],
      },
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.refs.form.validate((valid) => {
      if (valid) {
        alert('submit!');
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }

  handleReset(e) {
    e.preventDefault();
    this.refs.form.resetFields();
    this.setState({
      form: { type: '', comment: '', cash: '' },
    });
  }

  onChange(key, value) {
    this.setState({
      form: Object.assign({}, this.state.form, { [key]: value }),
    });
  }

  render() {
    return (
      <Card className='box-card form-auto' header='Add a new record'>
        <Form
          ref='form'
          model={this.state.form}
          rules={this.state.rules}
          labelWidth='90%'
          labelPosition='left'
          className='demo-ruleForm'
        >
          <Form.Item label='Type' prop='type'>
            <Select
              value={this.state.form.type}
              placeholder='Please select type'
              onChange={this.onChange.bind(this, 'type')}
            >
              <Select.Option label='Income' value='Income'></Select.Option>
              <Select.Option label='Outcome' value='Outcome'></Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label='Comment' prop='comment'>
            <Input
              type='text'
              value={this.state.form.comment}
              onChange={this.onChange.bind(this, 'comment')}
              autoComplete='off'
            />
          </Form.Item>
          <Form.Item label='Cash' prop='cash'>
            <Input
              value={this.state.form.cash}
              onChange={this.onChange.bind(this, 'cash')}
            ></Input>
          </Form.Item>
          <Form.Item>
            <Button type='primary' onClick={this.handleSubmit.bind(this)}>
              Submit
            </Button>
            <Button onClick={this.handleReset.bind(this)}>Reset</Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}

export default FormBudget;
