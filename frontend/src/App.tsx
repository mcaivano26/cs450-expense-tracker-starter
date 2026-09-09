const transactions = [
  { title: 'Groceries', amount: 86.4, category: 'Food', type: 'expense' },
  { title: 'Paycheck', amount: 2600, category: 'Income', type: 'income' },
  { title: 'Internet', amount: 54.99, category: 'Bills', type: 'expense' }
];

const totalExpenses = transactions
  .filter((tx) => tx.type === 'expense')
  .reduce((sum, tx) => sum + tx.amount, 0);

const totalIncome = transactions
  .filter((tx) => tx.type === 'income')
  .reduce((sum, tx) => sum + tx.amount, 0);

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', background: '#f8fafc', minHeight: '100vh' }}>
      <h1 style={{ marginBottom: '1rem' }}>Expense Tracker</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ background: '#d1fae5', padding: '1rem', borderRadius: '12px' }}>
          <div style={{ color: '#065f46' }}>Income</div>
          <h2 style={{ margin: '0.5rem 0 0' }}>${totalIncome.toFixed(2)}</h2>
        </div>
        <div style={{ background: '#fee2e2', padding: '1rem', borderRadius: '12px' }}>
          <div style={{ color: '#991b1b' }}>Expenses</div>
          <h2 style={{ margin: '0.5rem 0 0' }}>${totalExpenses.toFixed(2)}</h2>
        </div>
        <div style={{ background: '#dbeafe', padding: '1rem', borderRadius: '12px' }}>
          <div style={{ color: '#1d4ed8' }}>Net</div>
          <h2 style={{ margin: '0.5rem 0 0' }}>${(totalIncome - totalExpenses).toFixed(2)}</h2>
        </div>
      </div>

      <div style={{ background: '#fff', borderRadius: '12px', padding: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        {transactions.map((tx, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #e5e7eb' }}>
            <div>
              <strong>{tx.title}</strong>
              <div style={{ color: '#6b7280', fontSize: '0.85rem' }}>{tx.category}</div>
            </div>
            <div style={{ color: tx.type === 'expense' ? '#dc2626' : '#16a34a', fontWeight: 700 }}>
              {tx.type === 'expense' ? '-' : '+'}${tx.amount.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
