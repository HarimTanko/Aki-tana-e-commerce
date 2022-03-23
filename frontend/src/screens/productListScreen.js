import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import { Table, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Message from '../components/Message';
import Loader from '../components/Loader';

import { listProducts } from '../actions/productActions';
import { useNavigate } from 'react-router-dom';

const ProductListScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
    } else {
      navigate('/login');
    }
  }, [dispatch, userInfo, navigate]);

  const createProductHandler = () => {};

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      // delete products
    }
  };
  return (
    <>
      <Row className='align-items-center'>
        <Col md={4}>
          <h1>Products</h1>
        </Col>
        <Col
          md={{ span: 4, offset: 4 }}
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <Button className='my-3' onClick={createProductHandler}>
            <i className='fas fa-plus'></i> Create Product
          </Button>
        </Col>
      </Row>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>&#8358;{product.price}</td>
                <td>{product.category}</td>

                <td style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <LinkContainer to={`/admin/product/${product._id}/edit`}>
                    <Button variabt='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(product._id)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ProductListScreen;
