import { Zap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg gradient-electric flex items-center justify-center">
            <Zap className="w-5 h-5 text-accent-foreground" />
          </div>
          <span className="font-heading font-bold text-xl text-foreground">PowerBill</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          <Link to="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
          <Link to="/bills" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">My Bills</Link>
          <Link to="/pay" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pay Now</Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button variant="electric" size="sm">Get Started</Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-3">
          <Link to="/" className="block text-sm font-medium text-muted-foreground py-2">Home</Link>
          <Link to="/dashboard" className="block text-sm font-medium text-muted-foreground py-2">Dashboard</Link>
          <Link to="/bills" className="block text-sm font-medium text-muted-foreground py-2">My Bills</Link>
          <Link to="/pay" className="block text-sm font-medium text-muted-foreground py-2">Pay Now</Link>
          <Button variant="electric" className="w-full">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
