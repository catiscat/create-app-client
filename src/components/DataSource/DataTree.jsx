import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Input } from 'antd'

const propTypes = {
  onFetchDataTree: PropTypes.func,
  dataTree: PropTypes.object,
}

const defaultProps = {}

class DataTree extends Component {
  constructor(props) {
    super(props)
    const { dataTree = {} } = this.props;
  }

  componentWillMount(){
    const {onFetchDataTree} = this.props;
    onFetchDataTree();
  }
  render(){
    return (
      <h1>DataTree Page</h1>
    );
  }
  
}

DataTree.propTypes = propTypes;
DataTree.defaultProps = defaultProps;

export default DataTree;
