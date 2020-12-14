import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddress, getCartItems } from "../../actions";
import AddressForm from "./AddressForm";
import Layout from "../../components/Layout";
import PriceDetails from "../../components/PriceDetails";
import { Anchor,MaterialButton, MaterialInput } from "../../components/MaterialUI";
import Card from "../../components/UI/Card";
import "./style.css";

/**
 * @author
 * @function CheckoutPage
 **/

const CheckoutStep = (props) => {
  return (
    <div className="checkoutStep">
      <div
        onClick={props.onClick}
        className={`checkoutHeader ${props.active && "active"}`}
      >
        <div>
          <span className="stepNumber">{props.stepNumber}</span>
          <span className="stepTitle">{props.title}</span>
        </div>
      </div>
      {props.body && props.body}
    </div>
  );
};

const CheckoutPage = (props) => {
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const [newAddress, setNewAddress] = useState(false);
  const [address, setAddress] = useState([]);
  const [confirmAddress, setConfirmAddress] = useState(false); 
  const [selectedAddress, setSelectedAddress] = useState(null);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const onAddressSubmit = (addr) => {
    setSelectedAddress(addr);
    setConfirmAddress(true);
  };

  const selectAddress = (addr) => {
    //console.log(addr);
    const updatedAddress = address.map
    (adr => adr._id === addr._id ? 
        {...adr, selected: true } : {...adr, selected: false});
        setAddress(updatedAddress);
  };

  const confirmDeliveryAddress = (addr) => {
    setSelectedAddress(addr);
    setConfirmAddress(true);
  };

const enabledAddressEditForm = (addr) => {
  const updatedAddress = address.map((adr) => 
  adr._id === addr._id ? { ...adr, edit: true } : { ...adr, edit:false}
  );
  setAddress(updatedAddress);
}

  useEffect(() => {
    auth.authenticate && dispatch(getAddress());
  }, [auth.authenticate, dispatch]);

  useEffect(() => {
    const address = user.address.map((adr) => ({
      ...adr,
      selected: false,
      edit: false,
    }));
    setAddress(address);
    //user.address.length === 0 && setNewAddress(true);
  }, [user.address]);

  return (
    <Layout>
      <div className="cartContainer" style={{ alignItems: "flex-start" }}>
        <div className="checkoutContainer">
          <CheckoutStep
            stepNumber={"1"}
            title={"LOGIN"}
            active={!auth.authenticate}
            body={
              auth.authenticate ? (
                <div className="loggedInId">
                  <span style={{ fontWeight: 500 }}>{auth.user.fullName}</span>
                  <span style={{ margin: "0 5px" }}>{auth.user.email}</span>
                </div>
              ) : (
                <div>
                  <MaterialInput label="Email" />
                </div>
              )
            }
          />
          <CheckoutStep
            stepNumber={"2"}
            title={"DELIVERY ADDRESS"}
            active={!confirmAddress && auth.authenticate}
            body={
              <>
                {
                confirmAddress ? (

                  <div>{`${selectedAddress.address} - ${selectedAddress.pinCode}`}</div>
                ): (
                address.map((adr) => (
                  <div className="flexRow addressContainer">
                    <div>
                      <input 
                        name="address" 
                        onClick={() => selectAddress(adr)} 
                        type="radio" />
                    </div>
                    <div className="flexRow sb addressinfo">
                      {
                        !adr.edit ? (
                          <div style={{width: "100%"}}>
                            <div className="addressDetail">
                            <div>
                          <span className="addressName">{adr.name}</span>
                          <span className="addressType">
                            {adr.addressType}
                            </span>
                          <span className="addressMobileNumber">
                            {adr.mobileNumber}
                            </span>
                        </div>
                        {
                          adr.selected && (
                            <Anchor 
                              name="EDIT"
                              onClick={() => enabledAddressEditForm(adr)}
                              style={{
                                fontWeight: "500",
                                color: "#2874f0",
                              }} 
                            />
                          )} 
                      </div>
                      <div className="fullAddress">
                        {adr.address}
                        <br />
                        {" "}
                        {
                          `${adr.state} - ${adr.pinCode}`
                        }
                      </div>
                        
                        {/* <div>{adr.address}</div> */}
                        {
                            adr.selected && 
                            <MaterialButton
                            title="DELIVER HERE"
                            onClick={() => confirmDeliveryAddress(adr)}
                            style={{
                              width: "200px",
                              margin: "10px 0",
                            }}
                          /> 
                      }
                       
                      </div>
                ):(
                  <AddressForm 
                    withoutLayout={true}
                    onSubmitForm={onAddressSubmit}
                    onCancel={() => {}}
                  />
                )}
                    </div>
                  </div>
                ))
                )
              }
              </>
            }
          />

          {/* address form */}
          {confirmAddress ? null : newAddress ? (
            <AddressForm onSubmitForm={onAddressSubmit} onCancel={() => {}} />
          ) : auth.authenticate ? (
            <CheckoutStep
              stepNumber={"+"}
              title={"ADD NEW ADDRESS"}
              active={false}
              onClick={() => setNewAddress(true)}
            />
          ) : null}


          <CheckoutStep stepNumber={"3"} 
          title={"ORDER SUMMARY"} />

          <CheckoutStep stepNumber={"4"} 
          title={"PAYMENT OPTIONS"} />
        </div>
          
        <PriceDetails
          totalItems={Object.keys(cart.cartItems).reduce(function (qty, key) {
            return qty + cart.cartItems[key].qty;
          }, 0)}
          totalPrice= {Object.keys(cart.cartItems).reduce((totalPrice, key) => {
            return totalPrice + price * qty;
          }, 0)}
        />

      </div>
    </Layout>
  );
};

export default CheckoutPage;
