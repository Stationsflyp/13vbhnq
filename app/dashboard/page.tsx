"use client"

import { useState } from "react"
import { Particles } from "@/components/particles"
import {
  Shield,
  Activity,
  Users,
  Settings,
  Bell,
  Search,
  Plus,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  Lock,
  Zap,
  Globe,
  BarChart3,
  Map,
  Code,
  Server,
  Database,
  Cloud,
  Terminal,
  FileText,
  Download,
  Upload,
  CreditCard,
  Package,
  Webhook,
  Calendar,
  Trash2,
  Edit,
  Copy,
  Smartphone,
  Mail,
  Slack,
  Github,
  Key,
  History,
  MessageSquare,
  Award,
  Target,
  Cpu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Dashboard() {
  const [selectedApp, setSelectedApp] = useState("MyApp.exe")
  const [showProModal, setShowProModal] = useState(false)

  const protectedApps = [
    { name: "MyApp.exe", status: "Protected", threats: 0, lastScan: "2 min ago" },
    { name: "GameEngine.exe", status: "Scanning", threats: 2, lastScan: "5 min ago" },
    { name: "BusinessApp.exe", status: "Protected", threats: 0, lastScan: "1 hour ago" },
    { name: "UtilityTool.exe", status: "Warning", threats: 1, lastScan: "30 min ago" },
  ]

  const threatData = [
    { type: "Debugger Attempt", severity: "High", time: "2 min ago", blocked: true },
    { type: "Memory Dump", severity: "Medium", time: "15 min ago", blocked: true },
    { type: "Code Injection", severity: "Critical", time: "1 hour ago", blocked: true },
    { type: "Process Hollowing", severity: "High", time: "2 hours ago", blocked: false },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Particles />
      {/* Navigation */}
      <nav className="bg-black/80 backdrop-blur-md border-b border-sky-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-sky-400" />
                <span className="text-xl font-bold text-white">OxcyShop Security</span>
              </Link>
              <div className="hidden md:flex space-x-6">
                <Button variant="ghost" className="text-sky-400">
                  <Activity className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
                <Button variant="ghost" className="text-gray-300 hover:text-sky-400">
                  <Shield className="h-4 w-4 mr-2" />
                  Protection
                </Button>
                <Button variant="ghost" className="text-gray-300 hover:text-sky-400">
                  <Eye className="h-4 w-4 mr-2" />
                  Radar Map
                </Button>
                <Button variant="ghost" className="text-gray-300 hover:text-sky-400">
                  <Users className="h-4 w-4 mr-2" />
                  Team
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search applications..."
                  className="pl-10 bg-gray-800 border-gray-700 text-white w-64"
                />
              </div>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-sky-400">
                <Bell className="h-5 w-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="User" />
                      <AvatarFallback className="bg-sky-500 text-white">U</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-gray-800 border-gray-700" align="end">
                  <DropdownMenuLabel className="text-white">My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem className="text-gray-300 hover:text-white">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-300 hover:text-white">Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Security Dashboard</h1>
            <p className="text-gray-300">Monitor and manage your application security</p>
          </div>
          <Dialog open={showProModal} onOpenChange={setShowProModal}>
            <DialogTrigger asChild>
              <Button className="bg-sky-500 hover:bg-sky-600 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Protect New App
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 border-sky-500/20 text-white max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-sky-400 mb-2">Upgrade to Pro</DialogTitle>
                <DialogDescription className="text-gray-300">
                  Unlock advanced protection for up to 4 applications
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-sky-400 mb-2">$65</div>
                  <p className="text-gray-300">per month</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                    Protect up to 4 executables
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                    Advanced obfuscation techniques
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                    Real-time threat monitoring
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                    Anti-debug & VM detection
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                    Priority support
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white">Upgrade to Pro - $65/month</Button>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-gray-300 hover:bg-gray-800"
                    onClick={() => setShowProModal(false)}
                  >
                    Maybe Later
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-900/50 border-sky-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Protected Apps</CardTitle>
              <Shield className="h-4 w-4 text-sky-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">24</div>
              <p className="text-xs text-green-400">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                +2 from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-sky-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Threats Blocked</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">1,247</div>
              <p className="text-xs text-green-400">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                +15% from last week
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-sky-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Security Score</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">98.5%</div>
              <Progress value={98.5} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-sky-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Active Monitoring</CardTitle>
              <Activity className="h-4 w-4 text-sky-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">24/7</div>
              <p className="text-xs text-sky-400">Real-time protection</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-gray-800 border-gray-700 grid grid-cols-8 w-full">
            <TabsTrigger value="overview" className="data-[state=active]:bg-sky-500">
              Overview
            </TabsTrigger>
            <TabsTrigger value="protection" className="data-[state=active]:bg-sky-500">
              AntiCrack Protection
            </TabsTrigger>
            <TabsTrigger value="radar" className="data-[state=active]:bg-sky-500">
              Radar Map
            </TabsTrigger>
            <TabsTrigger value="api" className="data-[state=active]:bg-sky-500">
              API Security
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-sky-500">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="integrations" className="data-[state=active]:bg-sky-500">
              Integrations
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-sky-500">
              Settings
            </TabsTrigger>
            <TabsTrigger value="billing" className="data-[state=active]:bg-sky-500">
              Billing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              {/* Protected Applications - existing card */}
              <Card className="bg-gray-900/50 border-sky-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Protected Applications</CardTitle>
                  <CardDescription className="text-gray-300">
                    Current status of your protected executables
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {protectedApps.map((app, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-sky-400"></div>
                          <div>
                            <p className="text-white font-medium">{app.name}</p>
                            <p className="text-sm text-gray-400">Last scan: {app.lastScan}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant={
                              app.status === "Protected"
                                ? "default"
                                : app.status === "Warning"
                                  ? "destructive"
                                  : "secondary"
                            }
                            className={app.status === "Protected" ? "bg-green-500" : ""}
                          >
                            {app.status}
                          </Badge>
                          {app.threats > 0 && <Badge variant="destructive">{app.threats} threats</Badge>}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Threats - existing card */}
              <Card className="bg-gray-900/50 border-sky-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Recent Security Events</CardTitle>
                  <CardDescription className="text-gray-300">
                    Latest threat detection and blocking activities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {threatData.map((threat, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          {threat.blocked ? (
                            <CheckCircle className="h-5 w-5 text-green-400" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-400" />
                          )}
                          <div>
                            <p className="text-white font-medium">{threat.type}</p>
                            <p className="text-sm text-gray-400">{threat.time}</p>
                          </div>
                        </div>
                        <Badge
                          variant={
                            threat.severity === "Critical"
                              ? "destructive"
                              : threat.severity === "High"
                                ? "destructive"
                                : "secondary"
                          }
                        >
                          {threat.severity}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* New Additional Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gray-900/50 border-sky-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Cloud className="h-5 w-5 mr-2 text-sky-400" />
                    Cloud Storage
                  </CardTitle>
                  <CardDescription className="text-gray-300">Secure backup and version control</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Used:</span>
                      <span className="text-white">2.4 GB / 10 GB</span>
                    </div>
                    <Progress value={24} className="h-2" />
                    <Button className="w-full bg-sky-500 hover:bg-sky-600">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Files
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-sky-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Database className="h-5 w-5 mr-2 text-sky-400" />
                    Threat Database
                  </CardTitle>
                  <CardDescription className="text-gray-300">Global threat intelligence network</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Signatures:</span>
                      <span className="text-white">1,247,892</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Last Update:</span>
                      <span className="text-sky-400">2 min ago</span>
                    </div>
                    <Button className="w-full bg-sky-500 hover:bg-sky-600">
                      <Download className="h-4 w-4 mr-2" />
                      Update Database
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-sky-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Users className="h-5 w-5 mr-2 text-sky-400" />
                    Team Activity
                  </CardTitle>
                  <CardDescription className="text-gray-300">Recent team member actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="bg-sky-500 text-white text-xs">JD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-white text-sm">John protected MyApp.exe</p>
                        <p className="text-gray-400 text-xs">5 min ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="bg-green-500 text-white text-xs">SM</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-white text-sm">Sarah updated policies</p>
                        <p className="text-gray-400 text-xs">1 hour ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="protection" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="bg-gray-900/50 border-sky-500/20">
                <CardHeader>
                  <Lock className="h-8 w-8 text-sky-400 mb-4" />
                  <CardTitle className="text-white">Code Obfuscation</CardTitle>
                  <CardDescription className="text-gray-300">
                    Advanced code protection and obfuscation techniques
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-sky-500 hover:bg-sky-600">Configure Protection</Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-sky-500/20">
                <CardHeader>
                  <Zap className="h-8 w-8 text-sky-400 mb-4" />
                  <CardTitle className="text-white">Anti-Debug</CardTitle>
                  <CardDescription className="text-gray-300">
                    Prevent debugging and reverse engineering attempts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-sky-500 hover:bg-sky-600">Enable Anti-Debug</Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-sky-500/20">
                <CardHeader>
                  <Globe className="h-8 w-8 text-sky-400 mb-4" />
                  <CardTitle className="text-white">VM Detection</CardTitle>
                  <CardDescription className="text-gray-300">
                    Detect and prevent execution in virtual environments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-sky-500 hover:bg-sky-600">Setup VM Detection</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="radar" className="space-y-6">
            <Card className="bg-gray-900/50 border-sky-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Map className="h-5 w-5 mr-2 text-sky-400" />
                  Security Radar Map - Real-Time Threat Monitoring
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Live visualization of security threats and attack patterns worldwide
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 bg-gray-800/50 rounded-lg relative overflow-hidden">
                  {/* Radar Background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-80 h-80">
                      {/* Radar Circles */}
                      <div className="absolute inset-0 border-2 border-sky-500/20 rounded-full"></div>
                      <div className="absolute inset-8 border border-sky-500/30 rounded-full"></div>
                      <div className="absolute inset-16 border border-sky-500/40 rounded-full"></div>
                      <div className="absolute inset-24 border border-sky-500/50 rounded-full"></div>

                      {/* Radar Lines */}
                      <div className="absolute top-1/2 left-0 w-full h-px bg-sky-500/30"></div>
                      <div className="absolute left-1/2 top-0 w-px h-full bg-sky-500/30"></div>
                      <div className="absolute top-1/2 left-1/2 w-px h-1/2 bg-sky-500/40 origin-bottom rotate-45"></div>
                      <div className="absolute top-1/2 left-1/2 w-px h-1/2 bg-sky-500/40 origin-bottom -rotate-45"></div>

                      {/* Radar Sweep */}
                      <div
                        className="absolute top-1/2 left-1/2 w-px h-1/2 bg-gradient-to-t from-sky-400 to-transparent origin-bottom animate-spin"
                        style={{ animationDuration: "4s" }}
                      ></div>

                      {/* Threat Indicators */}
                      <div className="absolute top-16 left-20 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="absolute top-32 right-16 w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-20 left-32 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-32 right-24 w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                      <div className="absolute top-24 left-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>

                      {/* Center Dot */}
                      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-sky-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </div>

                  {/* Radar Info Panel */}
                  <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 w-64">
                    <h4 className="text-white font-semibold mb-3">Live Threat Detection</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Active Threats:</span>
                        <span className="text-red-400 font-medium">5</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Blocked Attacks:</span>
                        <span className="text-green-400 font-medium">247</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Protected Apps:</span>
                        <span className="text-sky-400 font-medium">24</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Security Level:</span>
                        <span className="text-green-400 font-medium">High</span>
                      </div>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 bg-gray-900/80 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3">Threat Levels</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-gray-300">Critical</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        <span className="text-gray-300">High</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                        <span className="text-gray-300">Medium</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Radar Controls */}
                <div className="mt-6 flex justify-between items-center">
                  <div className="flex space-x-4">
                    <Button variant="outline" className="border-sky-500/50 text-sky-400 hover:bg-sky-500/10">
                      <Activity className="h-4 w-4 mr-2" />
                      Real-Time Mode
                    </Button>
                    <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Historical Data
                    </Button>
                  </div>
                  <div className="text-sm text-gray-400">
                    Last updated: <span className="text-sky-400">2 seconds ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* API Overview */}
              <Card className="bg-gray-900/50 border-sky-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Code className="h-5 w-5 mr-2 text-sky-400" />
                    OxcyShop Security API
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Integrate our security services directly into your applications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sky-400 font-mono text-sm">Base URL</span>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </div>
                    <code className="text-white font-mono text-sm">https://api.oxcyshop.com/v1</code>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">API Version:</span>
                      <Badge className="bg-sky-500">v1.2.0</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Rate Limit:</span>
                      <span className="text-white">1000 req/hour</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Authentication:</span>
                      <span className="text-white">Bearer Token</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* API Endpoints */}
              <Card className="bg-gray-900/50 border-sky-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Server className="h-5 w-5 mr-2 text-sky-400" />
                    Available Endpoints
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Core API endpoints for security operations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-green-400 border-green-400">
                            GET
                          </Badge>
                          <code className="text-white font-mono text-sm">/applications</code>
                        </div>
                        <p className="text-gray-400 text-xs mt-1">List protected applications</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-blue-400 border-blue-400">
                            POST
                          </Badge>
                          <code className="text-white font-mono text-sm">/protect</code>
                        </div>
                        <p className="text-gray-400 text-xs mt-1">Protect new executable</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-yellow-400 border-yellow-400">
                            PUT
                          </Badge>
                          <code className="text-white font-mono text-sm">/config</code>
                        </div>
                        <p className="text-gray-400 text-xs mt-1">Update protection settings</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-red-400 border-red-400">
                            DELETE
                          </Badge>
                          <code className="text-white font-mono text-sm">/applications/:id</code>
                        </div>
                        <p className="text-gray-400 text-xs mt-1">Remove protection</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* API Examples */}
            <Card className="bg-gray-900/50 border-sky-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Terminal className="h-5 w-5 mr-2 text-sky-400" />
                  API Examples
                </CardTitle>
                <CardDescription className="text-gray-300">Code examples for common operations</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="protect" className="w-full">
                  <TabsList className="bg-gray-800">
                    <TabsTrigger value="protect">Protect App</TabsTrigger>
                    <TabsTrigger value="status">Check Status</TabsTrigger>
                    <TabsTrigger value="threats">Get Threats</TabsTrigger>
                  </TabsList>

                  <TabsContent value="protect" className="mt-4">
                    <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm">
                        <code className="text-gray-300">
                          {`curl -X POST https://api.oxcyshop.com/v1/protect \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "file_path": "/path/to/your/app.exe",
    "protection_level": "advanced",
    "obfuscation": true,
    "anti_debug": true,
    "vm_detection": true
  }'`}
                        </code>
                      </pre>
                    </div>
                  </TabsContent>

                  <TabsContent value="status" className="mt-4">
                    <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm">
                        <code className="text-gray-300">
                          {`curl -X GET https://api.oxcyshop.com/v1/applications/12345 \\
  -H "Authorization: Bearer YOUR_API_KEY"

Response:
{
  "id": "12345",
  "name": "MyApp.exe",
  "status": "protected",
  "protection_level": "advanced",
  "last_scan": "2024-01-15T10:30:00Z",
  "threats_blocked": 247
}`}
                        </code>
                      </pre>
                    </div>
                  </TabsContent>

                  <TabsContent value="threats" className="mt-4">
                    <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm">
                        <code className="text-gray-300">
                          {`curl -X GET https://api.oxcyshop.com/v1/threats \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -G -d "app_id=12345" -d "limit=10"

Response:
{
  "threats": [
    {
      "id": "threat_001",
      "type": "debugger_attempt",
      "severity": "high",
      "blocked": true,
      "timestamp": "2024-01-15T10:25:00Z"
    }
  ]
}`}
                        </code>
                      </pre>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* SDK Downloads */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gray-900/50 border-sky-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Download className="h-5 w-5 mr-2 text-sky-400" />
                    JavaScript SDK
                  </CardTitle>
                  <CardDescription className="text-gray-300">Official SDK for Node.js and browsers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <code className="block bg-gray-800 p-2 rounded text-sm text-gray-300">
                      npm install @oxcyshop/security-sdk
                    </code>
                    <Button className="w-full bg-sky-500 hover:bg-sky-600">
                      <Download className="h-4 w-4 mr-2" />
                      Download SDK
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-sky-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Download className="h-5 w-5 mr-2 text-sky-400" />
                    Python SDK
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Python library for server-side integration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <code className="block bg-gray-800 p-2 rounded text-sm text-gray-300">
                      pip install oxcyshop-security
                    </code>
                    <Button className="w-full bg-sky-500 hover:bg-sky-600">
                      <Download className="h-4 w-4 mr-2" />
                      Download SDK
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-sky-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-sky-400" />
                    Documentation
                  </CardTitle>
                  <CardDescription className="text-gray-300">Complete API reference and guides</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-gray-300 text-sm">
                      Comprehensive documentation with examples and best practices
                    </p>
                    <Button className="w-full bg-sky-500 hover:bg-sky-600">
                      <FileText className="h-4 w-4 mr-2" />
                      View Docs
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            {/* Security Analytics Dashboard */}
            <div className="grid lg:grid-cols-3 gap-6 mb-6">
              <Card className="bg-gray-900/50 border-sky-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-sky-400" />
                    Threat Trends
                  </CardTitle>
                  <CardDescription className="text-gray-300">Security threats over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">This Week:</span>
                      <span className="text-red-400 font-bold">+23%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">This Month:</span>
                      <span className="text-green-400 font-bold">-12%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Critical Threats:</span>
                      <span className="text-orange-400 font-bold">5</span>
                    </div>
                    <Button className="w-full bg-sky-500 hover:bg-sky-600">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      View Detailed Report
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-sky-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Target className="h-5 w-5 mr-2 text-sky-400" />
                    Attack Vectors
                  </CardTitle>
                  <CardDescription className="text-gray-300">Most common attack methods</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Debugger Attempts</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={75} className="w-16 h-2" />
                        <span className="text-white text-sm">75%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Memory Dumps</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={45} className="w-16 h-2" />
                        <span className="text-white text-sm">45%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Code Injection</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={30} className="w-16 h-2" />
                        <span className="text-white text-sm">30%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-sky-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Award className="h-5 w-5 mr-2 text-sky-400" />
                    Security Score
                  </CardTitle>
                  <CardDescription className="text-gray-300">Overall protection effectiveness</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-sky-400">98.5%</div>
                    <Progress value={98.5} className="h-3" />
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-center">
                        <div className="text-green-400 font-bold">247</div>
                        <div className="text-gray-400">Blocked</div>
                      </div>
                      <div className="text-center">
                        <div className="text-red-400 font-bold">3</div>
                        <div className="text-gray-400">Bypassed</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Metrics */}
            <Card className="bg-gray-900/50 border-sky-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Cpu className="h-5 w-5 mr-2 text-sky-400" />
                  Performance Metrics
                </CardTitle>
                <CardDescription className="text-gray-300">System performance and resource usage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sky-400 mb-2">2.3ms</div>
                    <div className="text-gray-300 text-sm">Avg Response Time</div>
                    <Progress value={85} className="mt-2 h-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-2">99.9%</div>
                    <div className="text-gray-300 text-sm">Uptime</div>
                    <Progress value={99.9} className="mt-2 h-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400 mb-2">45%</div>
                    <div className="text-gray-300 text-sm">CPU Usage</div>
                    <Progress value={45} className="mt-2 h-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-2">2.1GB</div>
                    <div className="text-gray-300 text-sm">Memory Usage</div>
                    <Progress value={65} className="mt-2 h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Analytics */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-gray-900/50 border-sky-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-sky-400" />
                    Security Events Timeline
                  </CardTitle>
                  <CardDescription className="text-gray-300">Recent security events and responses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-3 bg-gray-800/50 rounded-lg">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-white font-medium">Critical threat detected</p>
                        <p className="text-gray-400 text-sm">Advanced debugger attempt blocked on MyApp.exe</p>
                        <p className="text-gray-500 text-xs">2 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-gray-800/50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-white font-medium">Protection updated</p>
                        <p className="text-gray-400 text-sm">New obfuscation layer applied to GameEngine.exe</p>
                        <p className="text-gray-500 text-xs">15 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-gray-800/50 rounded-lg">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-white font-medium">Scan completed</p>
                        <p className="text-gray-400 text-sm">Weekly security scan finished - 0 vulnerabilities found</p>
                        <p className="text-gray-500 text-xs">1 hour ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-sky-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-sky-400" />
                    Geographic Threat Distribution
                  </CardTitle>
                  <CardDescription className="text-gray-300">Threats by geographic location</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-3 bg-red-500 rounded-sm"></div>
                        <span className="text-gray-300">Russia</span>
                      </div>
                      <span className="text-white font-medium">34%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-3 bg-orange-500 rounded-sm"></div>
                        <span className="text-gray-300">China</span>
                      </div>
                      <span className="text-white font-medium">28%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-3 bg-yellow-500 rounded-sm"></div>
                        <span className="text-gray-300">North Korea</span>
                      </div>
                      <span className="text-white font-medium">15%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-3 bg-blue-500 rounded-sm"></div>
                        <span className="text-gray-300">Iran</span>
                      </div>
                      <span className="text-white font-medium">12%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-3 bg-purple-500 rounded-sm"></div>
                        <span className="text-gray-300">Others</span>
                      </div>
                      <span className="text-white font-medium">11%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="integrations" className="space-y-6">
            {/* Popular Integrations */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <Card className="bg-gray-900/50 border-sky-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Slack className="h-5 w-5 mr-2 text-sky-400" />
                    Slack Integration
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Get security alerts in your Slack channels
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Status:</span>
                      <Badge className="bg-green-500">Connected</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Channel:</span>
                      <span className="text-white">#security-alerts</span>
                    </div>
                    <Button className="w-full bg-sky-500 hover:bg-sky-600">
                      <Settings className="h-4 w-4 mr-2" />
                      Configure
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-sky-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Github className="h-5 w-5 mr-2 text-sky-400" />
                    GitHub Integration
                  </CardTitle>
                  <CardDescription className="text-gray-300">Protect your repositories and releases</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Status:</span>
                      <Badge variant="outline" className="border-gray-600 text-gray-400">
                        Not Connected
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Repositories:</span>
                      <span className="text-gray-400">0</span>
                    </div>
                    <Button className="w-full bg-sky-500 hover:bg-sky-600">
                      <Plus className="h-4 w-4 mr-2" />
                      Connect GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-sky-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Webhook className="h-5 w-5 mr-2 text-sky-400" />
                    Webhooks
                  </CardTitle>
                  <CardDescription className="text-gray-300">Custom webhook integrations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Active:</span>
                      <span className="text-white">3</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Last Triggered:</span>
                      <span className="text-sky-400">2 min ago</span>
                    </div>
                    <Button className="w-full bg-sky-500 hover:bg-sky-600">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Webhook
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Available Integrations */}
            <Card className="bg-gray-900/50 border-sky-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Package className="h-5 w-5 mr-2 text-sky-400" />
                  Available Integrations
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Connect with your favorite tools and services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-gray-800/50 rounded-lg text-center">
                    <Mail className="h-8 w-8 text-sky-400 mx-auto mb-2" />
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400 text-sm">SMTP notifications</p>
                    <Button size="sm" className="mt-2 bg-sky-500 hover:bg-sky-600">
                      Connect
                    </Button>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg text-center">
                    <MessageSquare className="h-8 w-8 text-sky-400 mx-auto mb-2" />
                    <p className="text-white font-medium">Discord</p>
                    <p className="text-gray-400 text-sm">Bot notifications</p>
                    <Button size="sm" className="mt-2 bg-sky-500 hover:bg-sky-600">
                      Connect
                    </Button>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg text-center">
                    <Smartphone className="h-8 w-8 text-sky-400 mx-auto mb-2" />
                    <p className="text-white font-medium">SMS</p>
                    <p className="text-gray-400 text-sm">Text alerts</p>
                    <Button size="sm" className="mt-2 bg-sky-500 hover:bg-sky-600">
                      Connect
                    </Button>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg text-center">
                    <Server className="h-8 w-8 text-sky-400 mx-auto mb-2" />
                    <p className="text-white font-medium">Splunk</p>
                    <p className="text-gray-400 text-sm">Log management</p>
                    <Button size="sm" className="mt-2 bg-sky-500 hover:bg-sky-600">
                      Connect
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Webhook Configuration */}
            <Card className="bg-gray-900/50 border-sky-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-sky-400" />
                  Webhook Configuration
                </CardTitle>
                <CardDescription className="text-gray-300">Manage your webhook endpoints</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div>
                      <p className="text-white font-medium">Security Alerts Webhook</p>
                      <p className="text-gray-400 text-sm">https://api.myapp.com/security-webhook</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-gray-600">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-red-600 text-red-400">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div>
                      <p className="text-white font-medium">Threat Intelligence Webhook</p>
                      <p className="text-gray-400 text-sm">https://api.myapp.com/threat-webhook</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-gray-600">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-red-600 text-red-400">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            {/* Account Settings */}
            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <Card className="bg-gray-900/50 border-sky-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Users className="h-5 w-5 mr-2 text-sky-400" />
                    Account Settings
                  </CardTitle>
                  <CardDescription className="text-gray-300">Manage your account information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">Display Name</label>
                    <Input className="bg-gray-800 border-gray-700 text-white" defaultValue="John Doe" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">Email</label>
                    <Input className="bg-gray-800 border-gray-700 text-white" defaultValue="john@company.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">Company</label>
                    <Input className="bg-gray-800 border-gray-700 text-white" defaultValue="Acme Corp" />
                  </div>
                  <Button className="w-full bg-sky-500 hover:bg-sky-600">Save Changes</Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-sky-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Key className="h-5 w-5 mr-2 text-sky-400" />
                    API Keys
                  </CardTitle>
                  <CardDescription className="text-gray-300">Manage your API access keys</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div>
                      <p className="text-white font-medium">Production Key</p>
                      <p className="text-gray-400 text-sm font-mono">oxcy_prod_••••••••••••••••</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-gray-600">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-red-600 text-red-400">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div>
                      <p className="text-white font-medium">Development Key</p>
                      <p className="text-gray-400 text-sm font-mono">oxcy_dev_••••••••••••••••</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-gray-600">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-red-600 text-red-400">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Button className="w-full bg-sky-500 hover:bg-sky-600">
                    <Plus className="h-4 w-4 mr-2" />
                    Generate New Key
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Security Settings */}
            <Card className="bg-gray-900/50 border-sky-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-sky-400" />
                  Security Settings
                </CardTitle>
                <CardDescription className="text-gray-300">Configure security preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-medium">Two-Factor Authentication</p>
                        <p className="text-gray-400 text-sm">Add an extra layer of security</p>
                      </div>
                      <Button className="bg-sky-500 hover:bg-sky-600">Enable</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-medium">Login Notifications</p>
                        <p className="text-gray-400 text-sm">Get notified of new logins</p>
                      </div>
                      <Button variant="outline" className="border-green-600 text-green-400">
                        Enabled
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-medium">Session Timeout</p>
                        <p className="text-gray-400 text-sm">Auto-logout after inactivity</p>
                      </div>
                      <select className="bg-gray-800 border-gray-700 text-white rounded px-3 py-1">
                        <option>30 minutes</option>
                        <option>1 hour</option>
                        <option>4 hours</option>
                        <option>Never</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-medium">IP Whitelist</p>
                        <p className="text-gray-400 text-sm">Restrict access by IP address</p>
                      </div>
                      <Button variant="outline" className="border-gray-600">
                        Configure
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-medium">Audit Logs</p>
                        <p className="text-gray-400 text-sm">Track all account activities</p>
                      </div>
                      <Button variant="outline" className="border-green-600 text-green-400">
                        Enabled
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-medium">Data Encryption</p>
                        <p className="text-gray-400 text-sm">AES-256 encryption at rest</p>
                      </div>
                      <Button variant="outline" className="border-green-600 text-green-400">
                        Active
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card className="bg-gray-900/50 border-sky-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-sky-400" />
                  Notification Settings
                </CardTitle>
                <CardDescription className="text-gray-300">Choose how you want to be notified</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-white font-medium mb-3">Security Alerts</h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" defaultChecked />
                        <span className="text-gray-300">Email</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" defaultChecked />
                        <span className="text-gray-300">SMS</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-gray-300">Push</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-3">System Updates</h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" defaultChecked />
                        <span className="text-gray-300">Email</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-gray-300">SMS</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" defaultChecked />
                        <span className="text-gray-300">Push</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-3">Marketing</h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-gray-300">Email</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-gray-300">SMS</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-gray-300">Push</span>
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-6">
            {/* Current Plan */}
            <Card className="bg-gray-900/50 border-sky-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-sky-400" />
                  Current Plan
                </CardTitle>
                <CardDescription className="text-gray-300">Manage your subscription and billing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">Pro Plan</h3>
                        <p className="text-gray-300">Up to 4 protected applications</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-sky-400">$65</div>
                        <div className="text-gray-300">per month</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Applications Used:</span>
                        <span className="text-white">2 / 4</span>
                      </div>
                      <Progress value={50} className="h-2" />
                      <div className="flex justify-between">
                        <span className="text-gray-300">Next Billing:</span>
                        <span className="text-white">February 15, 2024</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Button className="w-full bg-sky-500 hover:bg-sky-600">Upgrade Plan</Button>
                    <Button variant="outline" className="w-full border-gray-600 text-gray-300">
                      Change Plan
                    </Button>
                    <Button variant="outline" className="w-full border-red-600 text-red-400">
                      Cancel Subscription
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Billing History */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-gray-900/50 border-sky-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <History className="h-5 w-5 mr-2 text-sky-400" />
                    Billing History
                  </CardTitle>
                  <CardDescription className="text-gray-300">Your recent invoices and payments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div>
                        <p className="text-white font-medium">January 2024</p>
                        <p className="text-gray-400 text-sm">Pro Plan - Monthly</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-medium">$65.00</p>
                        <Badge className="bg-green-500">Paid</Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div>
                        <p className="text-white font-medium">December 2023</p>
                        <p className="text-gray-400 text-sm">Pro Plan - Monthly</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-medium">$65.00</p>
                        <Badge className="bg-green-500">Paid</Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div>
                        <p className="text-white font-medium">November 2023</p>
                        <p className="text-gray-400 text-sm">Starter Plan - Monthly</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-medium">$29.00</p>
                        <Badge className="bg-green-500">Paid</Badge>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-sky-500 hover:bg-sky-600">
                    <Download className="h-4 w-4 mr-2" />
                    Download All Invoices
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-sky-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-sky-400" />
                    Payment Methods
                  </CardTitle>
                  <CardDescription className="text-gray-300">Manage your payment information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-6 bg-blue-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">VISA</span>
                        </div>
                        <div>
                          <p className="text-white font-medium">•••• •••• •••• 4242</p>
                          <p className="text-gray-400 text-sm">Expires 12/25</p>
                        </div>
                      </div>
                      <Badge className="bg-sky-500">Primary</Badge>
                    </div>
                    <Button className="w-full bg-sky-500 hover:bg-sky-600">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Payment Method
                    </Button>
                  </div>

                  <div className="mt-6 p-4 bg-sky-500/10 border border-sky-500/20 rounded-lg">
                    <h4 className="text-white font-medium mb-2">Usage This Month</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Base Plan:</span>
                        <span className="text-white">$65.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Additional Storage:</span>
                        <span className="text-white">$5.00</span>
                      </div>
                      <div className="border-t border-sky-500/20 pt-2 flex justify-between font-medium">
                        <span className="text-white">Total:</span>
                        <span className="text-sky-400">$70.00</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
