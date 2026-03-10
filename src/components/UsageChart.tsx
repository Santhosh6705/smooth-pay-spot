import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Sep", units: 280 },
  { month: "Oct", units: 320 },
  { month: "Nov", units: 290 },
  { month: "Dec", units: 410 },
  { month: "Jan", units: 380 },
  { month: "Feb", units: 342 },
];

const UsageChart = () => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-card border border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-heading font-semibold text-lg text-card-foreground">Usage Overview</h3>
          <p className="text-sm text-muted-foreground">Monthly electricity consumption (kWh)</p>
        </div>
        <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-electric/10 text-electric">Last 6 months</span>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUnits" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(205, 100%, 50%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(205, 100%, 50%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 88%)" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: 'hsl(215, 16%, 47%)' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: 'hsl(215, 16%, 47%)' }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{
              background: 'hsl(0, 0%, 100%)',
              border: '1px solid hsl(214, 20%, 88%)',
              borderRadius: '8px',
              fontSize: '13px',
            }}
          />
          <Area type="monotone" dataKey="units" stroke="hsl(205, 100%, 50%)" strokeWidth={2.5} fillOpacity={1} fill="url(#colorUnits)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsageChart;
