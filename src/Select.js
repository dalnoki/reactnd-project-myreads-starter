import React from 'react';
import Select from 'react-select';
import Book from './Book'


const options = [
    { value: 'current', label: 'Currently reading' },
    { value: 'want', label: 'Want to read' },
    { value: 'read', label: 'Read' },
    { value: 'none', label: 'None' }
  ];

class SelectButton extends Book {
constructor(props) {
    super(props)
    console.log(props)

  state = {
    selectedOption: null,
  }
}
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    return selectedOption;
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select defaultValue='none'
        placeholder='Set book status'
        value={selectedOption}
        onChange={this.props.getSelectState}
        options={options}
      />
    );
  }
}


export default SelectButton