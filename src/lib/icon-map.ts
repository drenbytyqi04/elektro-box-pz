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
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Zap;
}
