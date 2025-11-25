import React, { useState, useEffect } from 'react';
import {
  Menu,
  Grid,
  Calendar,
  Zap,
  Mail,
  Users,
  Edit,
  MoreHorizontal,
  Search,
  Bell,
  Save,
  File,
  Video,
  CalendarRange,
  PhoneOutgoing,
  MessageCircleMore,
  Bot,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

// Define a type for your menu items
type NavItem = {
  id: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
};

const MainNavbar: React.FC = () => {
  const [hiddenItems, setHiddenItems] = useState<NavItem[]>([]);

  const allItems: NavItem[] = [
    { id: 'grid', icon: File, label: 'File' },
    { id: 'deck', icon: Video, label: 'Meeting' },
    { id: 'calendar', icon: Mail, label: 'Gmail' },
    { id: 'flash', icon: CalendarRange, label: 'Calender' },
    { id: 'mail', icon: PhoneOutgoing, label: 'Contacts' },
    { id: 'users', icon: MessageCircleMore, label: 'Chat' },
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setHiddenItems(allItems.slice(3));
      } else if (width < 768) {
        setHiddenItems(allItems.slice(4));
      } else if (width < 1024) {
        setHiddenItems(allItems.slice(5));
      } else if (width < 1280) {
        setHiddenItems(allItems.slice(6));
      } else {
        setHiddenItems([]);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleItems = allItems.filter(
    (item) => !hiddenItems.includes(item)
  );

  return (
    <div className="w-full bg-skyblue-500 text-white">
      <nav className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-white rounded-full" />
            <div className="w-3 h-3 bg-white rounded-full" />
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center gap-2">
          {visibleItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="icon"
                className="text-white hover:bg-slate-800"
              >
                <Icon className="w-5 h-5" />
              </Button>
            );
          })}

          {/* Three Dots Menu */}
          {hiddenItems.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-slate-800"
                >
                  <MoreHorizontal className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 text-white border-slate-700">
                {hiddenItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <DropdownMenuItem
                      key={item.id}
                      className="hover:bg-slate-700 cursor-pointer"
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {item.label}
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* Right Side Icons */}
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-slate-800"
          >
            <Bot className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-slate-800"
          >
            <Bell className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-red-500 hover:bg-slate-800"
          >
            M
          </Button>
        </div>
      </nav>      
    </div>
  );
};

export default MainNavbar;
