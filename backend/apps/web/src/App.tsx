const features = [
  'Auth',
  'Wallets',
  'Transfers',
  'Ledger',
  'Risk',
  'Reconciliation'
];

export default function App() {
  return (
    <main className="app-shell">
      <section className="hero-card">
        <p className="eyebrow">LedgerX</p>
        <h1>Modern ledger operations for money movement.</h1>
        <p className="subtitle">
          This frontend scaffold is ready for account, wallet, transfer, and risk workflows.
        </p>
        <div className="feature-grid">
          {features.map((feature) => (
            <div key={feature} className="feature-pill">
              {feature}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
