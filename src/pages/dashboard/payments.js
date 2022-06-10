import React from 'react';
import PaymentCard from "../../components/payment/PaymentCard";

const Payments = () => {
  return (
    <>
      <h1>How would you like to receive payments?</h1>
      <section>
        <div className="">
          <PaymentCard
            buttonText="Link Your Bank"
            subText="Secured By Stripe Connect"
          />
          <PaymentCard buttonText="Debit Card" subText="Secured By Stripe" />
          <PaymentCard
            buttonText="Account and Routing Number"
            subText="Secuirted By Stripe"
          />
        </div>
        <h1>Taxpayer Id</h1>
        <input placeholder="00-123456768868666" />
        <button>Confirm</button>
      </section>
    </>
  );
};

export default Payments;
