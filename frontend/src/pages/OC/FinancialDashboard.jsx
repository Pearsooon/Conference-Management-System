import React from 'react';
import { DollarSign, TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';
import Button from '../../ui/Button'; 

const StatCard = ({ icon: Icon, label, value, change, trend, color, colors }) => (
    <div style={{
        background: colors.cardBg,
        border: `1px solid ${colors.border}`,
        borderRadius: '12px',
        padding: '24px',
        flex: 1
    }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
            <div style={{
                width: '48px',
                height: '48px',
                background: `${color}15`,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Icon size={24} color={color} />
            </div>
            {change && (
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '13px',
                    color: trend === 'up' ? colors.success : colors.danger,
                    fontWeight: 600
                }}>
                    {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                    {change}
                </div>
            )}
        </div>
        <div style={{ fontSize: '13px', color: colors.textLight, marginBottom: '4px' }}>{label}</div>
        <div style={{ fontSize: '28px', fontWeight: 700, color }}>${value.toLocaleString()}</div>
    </div>
);

const FinancialDashboard = ({ colors, data }) => {
    // Assuming financial data is passed via props
    const financialData = data.financialData || {
        totalRevenue: 125000,
        totalExpense: 89000,
        budgetLimit: 150000,
        profit: 36000,
        revenueBySource: [
            { name: 'Registration', value: 85000, color: '#2563eb' },
            { name: 'Sponsorship', value: 30000, color: '#10b981' },
            { name: 'Exhibition', value: 10000, color: '#f59e0b' }
        ],
        expenseByCategory: [
            { name: 'Venue', value: 35000, color: '#ef4444' },
            { name: 'Catering', value: 28000, color: '#8b5cf6' },
            { name: 'Marketing', value: 15000, color: '#ec4899' },
            { name: 'Technology', value: 11000, color: '#06b6d4' }
        ]
    };
    
    const budgetPercentage = (financialData.totalExpense / financialData.budgetLimit) * 100;

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                    <h2 style={{ margin: '0 0 8px 0', fontSize: '28px', fontWeight: 600 }}>Financial Dashboard 💸</h2>
                    <p style={{ color: colors.textLight }}>Real-time financial overview and budget analysis.</p>
                </div>
                <Button icon={RefreshCw} variant="secondary" colors={colors}>Refresh Data</Button>
            </div>

            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
                <StatCard
                    icon={DollarSign}
                    label="Total Revenue"
                    value={financialData.totalRevenue}
                    change="+12%"
                    trend="up"
                    color={colors.success}
                    colors={colors}
                />
                <StatCard
                    icon={TrendingDown}
                    label="Total Expense"
                    value={financialData.totalExpense}
                    change="+8%"
                    trend="up"
                    color={colors.danger}
                    colors={colors}
                />
                <StatCard
                    icon={TrendingUp}
                    label="Net Profit"
                    value={financialData.profit}
                    change="+15%"
                    trend="up"
                    color={colors.primary}
                    colors={colors}
                />
            </div>

            {/* Budget Progress */}
            <div style={{
                background: colors.cardBg,
                border: `1px solid ${colors.border}`,
                borderRadius: '12px',
                padding: '24px',
                marginBottom: '24px'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Budget vs Actual</h3>
                    <span style={{ fontSize: '14px', color: colors.textLight }}>
                        ${financialData.totalExpense.toLocaleString()} / ${financialData.budgetLimit.toLocaleString()}
                    </span>
                </div>
                <div style={{
                    height: '12px',
                    background: colors.bg,
                    borderRadius: '6px',
                    overflow: 'hidden',
                    marginBottom: '8px'
                }}>
                    <div style={{
                        height: '100%',
                        width: `${budgetPercentage}%`,
                        background: budgetPercentage > 90 ? colors.warning : colors.success,
                        borderRadius: '6px',
                        transition: 'width 0.3s'
                    }} />
                </div>
                <div style={{ fontSize: '13px', color: colors.textLight }}>
                    {budgetPercentage.toFixed(1)}% of budget used
                </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                {/* Revenue Chart */}
                <div style={{
                    background: colors.cardBg,
                    border: `1px solid ${colors.border}`,
                    borderRadius: '12px',
                    padding: '24px'
                }}>
                    <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: 600 }}>Revenue by Source</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {financialData.revenueBySource.map(item => (
                            <div key={item.name}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                    <span style={{ fontSize: '14px', fontWeight: 500 }}>{item.name}</span>
                                    <span style={{ fontSize: '14px', fontWeight: 600 }}>${item.value.toLocaleString()}</span>
                                </div>
                                <div style={{
                                    height: '8px',
                                    background: colors.bg,
                                    borderRadius: '4px',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        height: '100%',
                                        width: `${(item.value / financialData.totalRevenue) * 100}%`,
                                        background: item.color,
                                        borderRadius: '4px'
                                    }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Expense Chart */}
                <div style={{
                    background: colors.cardBg,
                    border: `1px solid ${colors.border}`,
                    borderRadius: '12px',
                    padding: '24px'
                }}>
                    <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: 600 }}>Expense by Category</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {financialData.expenseByCategory.map(item => (
                            <div key={item.name}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                    <span style={{ fontSize: '14px', fontWeight: 500 }}>{item.name}</span>
                                    <span style={{ fontSize: '14px', fontWeight: 600 }}>${item.value.toLocaleString()}</span>
                                </div>
                                <div style={{
                                    height: '8px',
                                    background: colors.bg,
                                    borderRadius: '4px',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        height: '100%',
                                        width: `${(item.value / financialData.totalExpense) * 100}%`,
                                        background: item.color,
                                        borderRadius: '4px'
                                    }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinancialDashboard;