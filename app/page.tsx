import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, BarChart3, Package, Workflow, Layers, Zap, Database, Shield, Clock } from "lucide-react"

export const metadata = {
  title: "Robust - Factory ERP System",
  description:
    "Transform your factory operations with HyperRobust ERP - Real-time analytics, inventory management, and workflow automation.",
}

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">HyperRobust</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-primary">
              Benefits
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#contact" className="hidden md:block text-sm font-medium hover:text-primary">
              Contact
            </Link>
            <Button asChild>
              <Link href="#demo">Request Demo</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transform Your Factory Operations with HyperRobust ERP
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The complete enterprise solution for modern manufacturing. Real-time analytics, intelligent
                    inventory management, and seamless workflow automation.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="#demo">
                      Request a Demo <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#features">Explore Features</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="HyperRobust Dashboard"
                  className="rounded-lg object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Advantages Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Key Advantages
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Streamline Your Manufacturing Process
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  HyperRobust delivers powerful tools to optimize your factory operations, reduce costs, and increase
                  productivity.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-primary/20 shadow-sm">
                <CardHeader className="pb-2">
                  <BarChart3 className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Real-time Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Monitor production metrics in real-time with customizable dashboards and actionable insights.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20 shadow-sm">
                <CardHeader className="pb-2">
                  <Package className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Inventory Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Optimize stock levels, reduce waste, and ensure materials are available when needed.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20 shadow-sm">
                <CardHeader className="pb-2">
                  <Workflow className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Workflow Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Automate repetitive tasks, streamline approvals, and eliminate bottlenecks in your production
                    process.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Powerful Features for Modern Manufacturing
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  HyperRobust combines cutting-edge technology with industry expertise to deliver a comprehensive ERP
                  solution.
                </p>
              </div>
            </div>
            <div className="grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-start space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Customizable Dashboards</h3>
                <p className="text-muted-foreground">
                  Create personalized views for different roles and departments, ensuring everyone has the information
                  they need.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Seamless Integration</h3>
                <p className="text-muted-foreground">
                  Connect with your existing systems and equipment for a unified view of your entire manufacturing
                  process.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Data-Driven Insights</h3>
                <p className="text-muted-foreground">
                  Leverage advanced analytics and machine learning to identify patterns and optimize production.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Enterprise-Grade Security</h3>
                <p className="text-muted-foreground">
                  Protect your valuable data with robust security features, role-based access control, and compliance
                  tools.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Predictive Maintenance</h3>
                <p className="text-muted-foreground">
                  Anticipate equipment failures before they happen, reducing downtime and extending asset lifecycles.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Quality Control</h3>
                <p className="text-muted-foreground">
                  Monitor and improve product quality with integrated testing, inspection, and statistical process
                  control.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Factory operations with HyperRobust"
                  className="rounded-lg object-cover shadow-xl"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Benefits
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Why Choose HyperRobust?
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our ERP system is designed specifically for manufacturing environments, with features that deliver
                    real business value.
                  </p>
                </div>
                <ul className="grid gap-4">
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <ChevronRight className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium leading-none">Increased Operational Efficiency</p>
                      <p className="text-sm text-muted-foreground">
                        Reduce manual processes and streamline workflows for up to 30% improvement in efficiency.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <ChevronRight className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium leading-none">Reduced Inventory Costs</p>
                      <p className="text-sm text-muted-foreground">
                        Optimize inventory levels to reduce carrying costs while ensuring materials are available when
                        needed.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <ChevronRight className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium leading-none">Enhanced Decision Making</p>
                      <p className="text-sm text-muted-foreground">
                        Access real-time data and insights to make informed decisions quickly and confidently.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <ChevronRight className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium leading-none">Improved Quality Control</p>
                      <p className="text-sm text-muted-foreground">
                        Implement robust quality management processes to reduce defects and improve customer
                        satisfaction.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Trusted by Industry Leaders
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our customers have to say about their experience with HyperRobust.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="border-primary/20 shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-muted-foreground/10"></div>
                    <div>
                      <CardTitle>Sarah Johnson</CardTitle>
                      <CardDescription>Operations Director, TechManufacturing Inc.</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "HyperRobust has transformed our factory operations. We've seen a 25% reduction in downtime and a
                    15% increase in overall productivity within just six months of implementation."
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20 shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-muted-foreground/10"></div>
                    <div>
                      <CardTitle>Michael Chen</CardTitle>
                      <CardDescription>CTO, Global Precision Products</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "The real-time analytics and customizable dashboards have given us unprecedented visibility into our
                    manufacturing processes. We can now make data-driven decisions that directly impact our bottom
                    line."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="demo" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Factory Operations?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Schedule a personalized demo to see how HyperRobust can optimize your manufacturing processes.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="grid gap-4">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your Name"
                    type="text"
                  />
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your Email"
                    type="email"
                  />
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Company Name"
                    type="text"
                  />
                  <Button type="submit" variant="secondary" size="lg">
                    Request Demo
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Flexible Pricing for Every Business
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that fits your manufacturing needs and scale as your business grows.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-primary/20 shadow-sm">
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <div className="text-3xl font-bold">
                    $499<span className="text-sm font-normal text-muted-foreground">/month</span>
                  </div>
                  <CardDescription>For small manufacturing operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 text-sm">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Up to 25 users</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Core ERP functionality</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Basic analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Email support</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full bg-transparent" variant="outline">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-primary shadow-lg">
                <CardHeader>
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Popular
                  </div>
                  <CardTitle>Professional</CardTitle>
                  <div className="text-3xl font-bold">
                    $999<span className="text-sm font-normal text-muted-foreground">/month</span>
                  </div>
                  <CardDescription>For medium-sized manufacturing businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 text-sm">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Up to 100 users</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Advanced ERP functionality</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Real-time analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>API access</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="border-primary/20 shadow-sm">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <div className="text-3xl font-bold">
                    Custom<span className="text-sm font-normal text-muted-foreground"> pricing</span>
                  </div>
                  <CardDescription>For large manufacturing enterprises</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 text-sm">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Unlimited users</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Full ERP suite</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Advanced analytics & ML</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>24/7 dedicated support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>On-premise option</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full bg-transparent" variant="outline">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Contact Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Have questions about HyperRobust? Our team is here to help you find the right solution for your
                    manufacturing needs.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium leading-none">Phone</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium leading-none">Email</p>
                      <p className="text-sm text-muted-foreground">info@hyperrobust.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium leading-none">Address</p>
                      <p className="text-sm text-muted-foreground">
                        123 Manufacturing Blvd, Suite 500
                        <br />
                        Tech City, CA 94103
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-md">
                  <CardHeader>
                    <CardTitle>Send us a message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="first-name"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            First name
                          </label>
                          <input
                            id="first-name"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="John"
                            type="text"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="last-name"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Last name
                          </label>
                          <input
                            id="last-name"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Doe"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="john.doe@example.com"
                          type="email"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your message here"
                        ></textarea>
                      </div>
                      <Button type="submit">Send Message</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Layers className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">HyperRobust</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Transforming factory operations with intelligent ERP solutions.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Company</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  About
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Careers
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Press
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Resources</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Documentation
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Help Center
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Case Studies
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Webinars
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Legal</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Cookie Policy
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  GDPR
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} HyperRobust. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
