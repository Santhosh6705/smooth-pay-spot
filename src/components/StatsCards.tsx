import { motion } from "framer-motion";
import { Zap, TrendingDown, DollarSign, Calendar } from "lucide-react";

const stats = [
  { icon: DollarSign, label: "Current Due", value: "₹2,450", change: "+5%", color: "text-destructive" },
  { icon: Zap, label: "Units Used", value: "342 kWh", change: "-12%", color: "text-success" },
  { icon: TrendingDown, label: "Avg. Daily", value: "11.4 kWh", change: "-8%", color: "text-success" },
  { icon: Calendar, label: "Due Date", value: "Mar 25", change: "15 days", color: "text-electric" },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-card rounded-xl p-5 shadow-card border border-border"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center">
              <stat.icon className="w-5 h-5 text-electric" />
            </div>
            <span className={`text-xs font-medium ${stat.color}`}>{stat.change}</span>
          </div>
          <p className="font-heading font-bold text-xl text-card-foreground">{stat.value}</p>
          <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCards;
