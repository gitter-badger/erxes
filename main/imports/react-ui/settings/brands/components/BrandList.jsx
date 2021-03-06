import React, { PropTypes, Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Wrapper } from '/imports/react-ui/layout/components';
import { ModalTrigger } from '/imports/react-ui/common';
import Sidebar from '../../Sidebar.jsx';
import { BrandForm } from '../containers';
import Row from './Row.jsx';


const propTypes = {
  brands: PropTypes.array.isRequired,
  removeBrand: PropTypes.func.isRequired,
};

class BrandList extends Component {
  constructor(props) {
    super(props);

    this.renderBrands = this.renderBrands.bind(this);
  }

  renderBrands() {
    const { brands, removeBrand } = this.props;

    return brands.map(brand =>
      <Row
        key={brand._id}
        brand={brand}
        removeBrand={removeBrand}
      />
    );
  }

  render() {
    const trigger = (
      <Button bsStyle="link">
        <i className="ion-plus-circled" /> New brand
      </Button>
    );

    const actionBarLeft = (
      <ModalTrigger title="New brand" trigger={trigger}>
        <BrandForm />
      </ModalTrigger>
    );

    const actionBar = (
      <Wrapper.ActionBar left={actionBarLeft} />
    );

    const content = (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Description</th>
            <th width="180">Created At</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.renderBrands()}
        </tbody>
      </Table>
    );

    const breadcrumb = [
      { title: 'Settings', link: '/settings/brands' },
      { title: 'Brands' },
    ];

    return (
      <div>
        <Wrapper
          header={<Wrapper.Header breadcrumb={breadcrumb} />}
          leftSidebar={<Sidebar />}
          actionBar={actionBar}
          content={content}
        />
      </div>
    );
  }
}

BrandList.propTypes = propTypes;

export default BrandList;
