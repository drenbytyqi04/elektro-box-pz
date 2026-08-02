import {
  Zap,
  House,
  ShieldCheck,
  Camera,
  Fingerprint,
  Lightbulb,
  Network,
  Wrench,
  DoorOpen,
  Building2,
  Thermometer,
  BatteryCharging,
  Mic,
  Workflow,
  AlertTriangle,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Zap,
  House,
  ShieldCheck,
  Camera,
  Fingerprint,
  Lightbulb,
  Network,
  Wrench,
  DoorOpen,
  Building2,
  Thermometer,
  BatteryCharging,
  Mic,
  Workflow,
  AlertTriangle,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Zap;
}
