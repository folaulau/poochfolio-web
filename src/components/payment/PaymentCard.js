import { CheckIcon } from "@heroicons/react/solid";

const PaymentCard = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-around w-80 h-80 border border-[#c9d9ef] rounded-3xl">
        <div className="">
          <CheckIcon className="w-6 h-6 p-6 border border-red-300" />
        </div>
        <button className="bg-[#096b82] rounded-3xl text-white px-7 py-2">
          Link Your Bank
        </button>
        <h3>Secuired By Stripe Connect</h3>
      </div>
    </>
  );
};

export default PaymentCard;
