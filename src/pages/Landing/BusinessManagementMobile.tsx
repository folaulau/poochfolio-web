import businessManagementImage from 'assets/images/landing/business-management.png';

import CheckedDescription from 'components/molecules/CheckedDescription';

export default function BusinessManagementMobile() {
  return (
    <div
      id="business-management"
      className="container flex items-center flex-col bg-white p-0"
    >
      <div className="flex-1 p-6">
        <div className="text-16 font-900">MANAGEMENT</div>
        <h2 className="text-40 mt-1 font-900" style={{ fontSize: 30, lineHeight: '38px' }}>
          Business <span className="text-primary-800">Management Features</span>
        </h2>

        <div className="flex gap-4 mt-9">
          <div className="flex-1 space-y-5 text-[#666666]" style={{ fontSize: 20 }}>
            <CheckedDescription isMobile>Pooch profile and intake form</CheckedDescription>
            <CheckedDescription isMobile>Client management</CheckedDescription>
            <CheckedDescription isMobile>Instant bookings</CheckedDescription>
            <CheckedDescription isMobile>Machine learning SMS integration and automation</CheckedDescription>
            <CheckedDescription isMobile>Cloud storage and data security</CheckedDescription>
            <CheckedDescription isMobile>Payroll and Employee management</CheckedDescription>
            <CheckedDescription isMobile>Add multiple users and set user permissions</CheckedDescription>
            <CheckedDescription isMobile>Analytics and QuickBooks integration</CheckedDescription>
            <CheckedDescription isMobile>QuickBooks Connect</CheckedDescription>
            <CheckedDescription isMobile>POS hardware</CheckedDescription>
            <CheckedDescription isMobile>Stripe integration</CheckedDescription>
            <CheckedDescription isMobile>Text to pay</CheckedDescription>
            <CheckedDescription isMobile>Calendar integration</CheckedDescription>
          </div>
        </div>
      </div>

      <div className="flex-1 p-1 items-center justify-center flex mt-24">
        <img src={businessManagementImage} alt="" className="w-full max-w-[450px]" />
      </div>
    </div>
  );
}
