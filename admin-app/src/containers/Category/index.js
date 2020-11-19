import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Row, Col, Container, Modal, Button,  } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, addCategory } from '../../actions';
import Input from '../../../src/components/UI/Input';

/**
* @author
* @function Category
**/
const Category = (props) => {

  const category = useSelector(state => state.category);
  const [ categoryName, setCategoryName] = useState('');
  const [ parentCategoryId, setParentCategoryId] = useState('');
  const [ categoryImage, setCategoryImage] = useState('');
  const [ show, setShow ] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log( `Category.js`)
    dispatch(getAllCategory());
  }, [dispatch]);

//button functions of modal
  const handleClose = () => {
    const form = new FormData();

    form.append('name', categoryName);
    form.append('parentId', parentCategoryId);
    form.append('categoryImage', categoryImage); 
    dispatch(addCategory(form));


    // const cat = {
    //   categoryName,
    //   parentCategoryId,
    //   categoryImage
    // };

    // console.log(cat);


    setShow(false);
  } 
  const handleShow = () => setShow(true);

  const renderCategoryList = (categoryList) => {

    let myCategoryList = [];

    for (let category  of categoryList){
      myCategoryList.push(
        <li key={category.name}>
          {category.name}
          {category.children.length > 0 ? (<ul>
            {renderCategoryList(category.children)} 
            </ul>) : null}
        </li>
      );
    }
    return myCategoryList;
      
   }

const createCategoryList = (categoryList, options = []) =>
{
  for(let category of categoryList){
    options.push({ value: category._id, name: category.name })
    if(category.children.length > 0) {
      createCategoryList( category.children, options )
    }
  }

  return options;
}

//function to handle category Image

const handleCategoryImage = (e) => {
    setCategoryImage(e.target.files[0]);
}

 return(
  <Layout sidebar> 
  <Container>
    <Row>
      <Col md={12}>
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <h3>Category</h3>
        <button onClick={handleShow}>Add</button>
        </div>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <ul>
            { renderCategoryList(category.categoryList)}
            {/* { JSON.stringify(createCategoryList(category.categoryList))} */}
        </ul>
      </Col>
    </Row>
  </Container>

  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input 
            value = { categoryName }
            placeholder = { `Category Name`}
            onChange = { (e) => setCategoryName(e.target.value)}
          />  

          <select className="form-control"
          value = {parentCategoryId} 
          onChange={(e) => setParentCategoryId(e.target.value)}>
            <option> select category </option>
            {
              createCategoryList(category.categoryList).map(option => 
              <option key = { option.value } value = { option.value }> { option.name } </option>)
            }
          </select>

          <input type="file" name="categoryImage" onChange = {  handleCategoryImage} />

        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

  </Layout>
  )
}



export {Category as default};
 