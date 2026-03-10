import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreditCard, Smartphone, Building2, Zap } from "lucide-react";
import { toast } from "sonner";

const methods = [
  { id: "card", icon: CreditCard, label: "Card" },
  { id: "upi", icon: Smartphone, label: "UPI" },
  { id: "bank", icon: Building2, label: "Net Banking" },
];

const PaymentSection = () => {
  const [selected, setSelected] = useState("card");
  const [consumerId, setConsumerId] = useState("");

  const handlePay = () => {
    if (!consumerId.trim()) {
      toast.error("Please enter your Consumer ID");
      return;
    }
    toast.success("Payment initiated successfully!");
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-card border border-border">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg gradient-electric flex items-center justify-center">
          <Zap className="w-5 h-5 text-accent-foreground" />
        </div>
        <div>
          <h3 className="font-heading font-semibold text-lg text-card-foreground">Quick Pay</h3>
          <p className="text-sm text-muted-foreground">Pay your electricity bill instantly</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-card-foreground mb-2 block">Consumer ID</label>
          <Input
            placeholder="Enter your consumer number"
            value={consumerId}
            onChange={(e) => setConsumerId(e.target.value)}
            className="bg-background"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-card-foreground mb-2 block">Amount</label>
          <Input value="₹2,450.00" readOnly className="bg-muted font-semibold" />
        </div>

        <div>
          <label className="text-sm font-medium text-card-foreground mb-3 block">Payment Method</label>
          <div className="grid grid-cols-3 gap-3">
            {methods.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelected(m.id)}
                className={`flex flex-col items-center gap-2 p-3 rounded-lg border transition-all ${
                  selected === m.id
                    ? "border-electric bg-electric/5 shadow-glow"
                    : "border-border hover:border-electric/30"
                }`}
              >
                <m.icon className={`w-5 h-5 ${selected === m.id ? "text-electric" : "text-muted-foreground"}`} />
                <span className={`text-xs font-medium ${selected === m.id ? "text-electric" : "text-muted-foreground"}`}>{m.label}</span>
              </button>
            ))}
          </div>
        </div>

        <Button variant="electric" className="w-full py-6 text-base" onClick={handlePay}>
          Pay ₹2,450.00
        </Button>
      </div>
    </div>
  );
};

export default PaymentSection;
