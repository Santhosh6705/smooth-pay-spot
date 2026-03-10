import Navbar from "@/components/Navbar";
import StatsCards from "@/components/StatsCards";
import UsageChart from "@/components/UsageChart";
import RecentBills from "@/components/RecentBills";
import PaymentSection from "@/components/PaymentSection";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="font-heading text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back! Here's your billing overview.</p>
        </div>

        <StatsCards />

        <div className="grid lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            <UsageChart />
          </div>
          <div>
            <PaymentSection />
          </div>
        </div>

        <div className="mt-6">
          <RecentBills />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
