import { Check, Clock, AlertCircle } from "lucide-react";

const bills = [
  { month: "February 2026", amount: "₹2,450", units: "342 kWh", status: "Unpaid", icon: AlertCircle, statusClass: "bg-destructive/10 text-destructive" },
  { month: "January 2026", amount: "₹2,680", units: "380 kWh", status: "Paid", icon: Check, statusClass: "bg-success/10 text-success" },
  { month: "December 2025", amount: "₹3,120", units: "410 kWh", status: "Paid", icon: Check, statusClass: "bg-success/10 text-success" },
  { month: "November 2025", amount: "₹2,150", units: "290 kWh", status: "Paid", icon: Check, statusClass: "bg-success/10 text-success" },
  { month: "October 2025", amount: "₹2,380", units: "320 kWh", status: "Overdue", icon: Clock, statusClass: "bg-warning/10 text-warning" },
];

const RecentBills = () => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-card border border-border">
      <h3 className="font-heading font-semibold text-lg text-card-foreground mb-5">Recent Bills</h3>
      <div className="space-y-3">
        {bills.map((bill, i) => (
          <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-background hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${bill.statusClass}`}>
                <bill.icon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-card-foreground">{bill.month}</p>
                <p className="text-xs text-muted-foreground">{bill.units}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-card-foreground">{bill.amount}</p>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${bill.statusClass}`}>{bill.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBills;
