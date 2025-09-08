"use client";

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 my-12">
      <h1 className="text-3xl font-bold mb-6 text-white">Privacy Policy – TradeTrackr</h1>

      <p className="mb-4 text-white">
        TradeTrackr is a trading journal app for Android. We respect your privacy and explain how your data is handled.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-white">1. Data Collection</h2>
      <p className="mb-4">
        TradeTrackr stores your trading data (trades, notes, strategy details, and emotions) locally on your device using SQLite. 
        We do not collect, transmit, or share this data with any third parties.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-white">2. Third-Party Services</h2>
      <p className="mb-4 text-white">
        Donations via BuyMeACoffee or PayPal are handled directly by these providers. We do not store or process your payment information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-white">3. Data Security</h2>
      <p className="mb-4 text-white">
        All data is stored locally on your device in a secure SQLite database. No data is transmitted or shared.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-white">4. User Rights</h2>
      <p className="mb-4 text-white">
        You can delete your data at any time by clearing the app data or uninstalling the app.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-white">5. Contact</h2>
      <p className="mb-4 text-white">
        For questions about this privacy policy, contact me at bruno.krizic1999@gmail.com.
      </p>
    </main>
  );
}
