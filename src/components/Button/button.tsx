
import React, { useState, useRef, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import "../../styles.css";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
        glass: "bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const [isRippling, setIsRippling] = useState(false);
    const [coords, setCoords] = useState({ x: -1, y: -1 });
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    // Combine refs
    const combinedRef = (node: HTMLButtonElement) => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
      buttonRef.current = node;
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (props.disabled) return;
      
      const rect = buttonRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setCoords({ x, y });
      setIsRippling(true);
      
      setTimeout(() => {
        setIsRippling(false);
      }, 600);
      
      if (props.onClick) {
        props.onClick(e);
      }
    };

    const Comp = asChild ? Slot : "button";
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={combinedRef}
        onClick={handleClick}
        {...props}
      >
        {props.children}
        {isRippling && (
          <span
            className="essence-ripple"
            style={{
              left: coords.x,
              top: coords.y,
            }}
          />
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
